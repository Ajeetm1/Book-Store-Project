const router = require("express").Router();
const Orders = require('../models/orders');
const User = require('../models/users');
const { authenticateToken } = require("./userAuth");

// place orders..
router.post("/place-order", authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const { orders } = req.body;
        for (const orderData of orders) {
            const newOrder = new Orders({ user: id, book: orderData._id });
            const orderDataFromDb = await newOrder.save();

            // saving Order in user model

            await User.findByIdAndUpdate(id, {
                $push: { orders: orderDataFromDb._id }
            });

            // clearing cart
            await User.findByIdAndUpdate(id, {
                $pull: { cart: orderData._id }
            });
        }
        return res.status(200).json({ message: "Order Placed Successfully" })
    }

    catch (error) {
        console.log(error)
    }
})


// get order history from user
router.get("/get-order-history",authenticateToken,async(req,res)=>{
    try{
       const {id} = req.headers;
       const userData = await User.findById(id).populate({
        path:"orders",populate:({path:"book"})
       
        
       })

       const ordersData = userData.orders.reverse();
       return res.status(200).json({data:ordersData
        
       })
    }

    catch(error){
    console.log(error)
    return res.status(500).json({message:"An error occurred"});
    }
})


// get-all-orders 

router.get("/get-all-orders",authenticateToken,async(req,res)=>{
    try{
      const userData =await Orders.find().populate({
        path:"book",
      }).populate({
        path:"user",
      }).sort({createdAt:-1})
      return res.status(200).json({data:userData})
    }

    catch(error)
    {
      console.log(error);
      return res.status(500).json({message:"An erro Occured"}) 
       }
})


// update order by admin..

router.put("/update-status/:id",authenticateToken,async(req,res)=>{
    try{
      const{id} = req.params;
      await Orders.findByIdAndUpdate(id,{status:req.body.status});
      return res.status(200).json({message:"status updated successfully"})
    }

    catch(error){
        console.log(error)
        return res.status(500).json({message:"An error occured"})
    }
})


// delete Cancel orders by admin.
router.put('/remove-cancel-order/:bookid',authenticateToken ,async(req,res)=>{
    try{
       const {bookid}= req.params;
       const {id} = req.headers;
       
       await User.findByIdAndUpdate(id,{$pull:{orders:bookid}})
       return res.status(200).json({message:"book removed in cart"})
    }

    catch(error){
        res.status(500).json({message:"An eror Occured."})
    }
})

module.exports = router;
