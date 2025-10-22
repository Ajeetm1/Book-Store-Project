const router = require("express").Router();
const User = require('../models/users');
const {authenticateToken}= require('./userAuth');

// add book to favourite..

router.put('/favourite-book',authenticateToken,async(req,res)=>{
    try{
       const {bookid,id} = req.headers;
       console.log(id);
       const userData = await User.findById(id);
       const isbookfavourite = userData.favourites.includes(bookid);
       if(isbookfavourite){
        res.status(200).json({message:"Book is already in favourites."})
       }

       await User.findByIdAndUpdate(id,{$push:{favourites:bookid}})
        res.status(200).json({message:"Book added to  favourites.",bookid})
    }

    catch(error)
    {
      res.status(500).json({message:"An error Occured"});
    }
    
    
}),


// remove book from favourite
router.put('/favourite-book-removed',authenticateToken,async(req,res)=>{
    try{
       const {bookid,id} = req.headers;
       console.log(id);
       const userData = await User.findById(id);
       const isbookfavourite = userData.favourites.includes(bookid);
       if(isbookfavourite){
       await User.findByIdAndUpdate(id,{$pull:{favourites:bookid}})
       }

      
        return res.status(200).json({message:"Book remove from  favourites."})
    }

    catch(error)
    {
      res.status(500).json({message:"An error Occured"});
    }
    
    
}) 

// get favourite book of a particuar user
router.get('/get-favourite-book',authenticateToken,async(req,res)=>{
    try{
    const{id} = req.headers;
    const userData = await User.findById(id).populate("favourites");
    const favouriteBook = userData.favourites;
    return res.status(200).json({data:favouriteBook})
    }

catch(error){  
     res.status(500).json({message:"An error Occured"});
}

})



module.exports=router;