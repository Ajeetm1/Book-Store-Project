const router = require("express").Router();
const User = require('../models/users')
const {authenticateToken} = require('./userAuth')


// put book into cart..
router.put('/add-to-cart',authenticateToken ,async(req,res)=>{
    try{
       const {bookid,id}= req.headers;
       const UserData = await User.findById(id);
       const isbookfavourite = UserData.cart.includes(bookid);
       if(isbookfavourite)
       {
        return res.status(200).json({message:"book is already in cart"})
       }
       await User.findByIdAndUpdate(id,{$push:{cart:bookid}})
       return res.status(200).json({message:"book added in cart"})
    }

    catch(error){
        res.status(500).json({message:"An eror Occured."})
    }
})

// remove from cart
router.put('/remove-to-cart/:bookid',authenticateToken ,async(req,res)=>{
    try{
       const {bookid}= req.params;
       const {id} = req.headers;
       
       await User.findByIdAndUpdate(id,{$pull:{cart:bookid}})
       return res.status(200).json({message:"book removed in cart"})
    }

    catch(error){
        res.status(500).json({message:"An eror Occured."})
    }
})


// get cart of a particular user
router.get('/get-user-cart',authenticateToken ,async(req,res)=>{
    try{
       const {id}= req.headers;
       const UserData = await User.findById(id).populate("cart");
       const cart = UserData.cart.reverse();
       
       return res.json({
        status:"Success full response",
        data:cart,
       })
    }
    catch(error){
        res.status(500).json({message:"An eror Occured."})
    }
})


module.exports=router;