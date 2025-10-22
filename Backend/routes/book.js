const router = require("express").Router();
const User = require("../models/users");
const jwt = require("jsonwebtoken");
const Book = require("../models/books");
const { authenticateToken } = require("./userAuth");

// add book admin..
router.post("/add-book", authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const user = await User.findById(id);
        if (user.role !== "admin") {
            return res.status(400).json({ message: "you are not admin." })
        }

        const book = new Book({
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            description: req.body.description,
            language: req.body.language,

        })
        await book.save();
        res.status(200).json({ message: "book added sucessfully." })

    }

    catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
})




// update books..
router.put('/update-books', authenticateToken, async (req, res) => {
    try {
        const { bookid } = req.headers;
         console.log("Received bookId:", bookid);
        console.log("Received body:", req.body);
        await Book.findByIdAndUpdate(bookid, {
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            description: req.body.description,
            language: req.body.language
        });

        return res.status(200).json({ message: "Book updated successfully" })
    }

    catch (error) {
        console.log(error)
        res.status(500).json({ message: "An error accurred" })
    }
})




// delete books.
router.delete('/delete-books',authenticateToken,async(req,res)=>{
    try{
        const{bookid} = req.headers;
        console.log(bookid);
        await Book.findByIdAndDelete(bookid);
        res.status(200).json({message:"book deleted successfully"})

    }

    catch(eror){
        res.status(500).json({message:"An error occurred."})
    }
})



// get all books .
router.get('/get-all-books',async(req,res)=>{
    try{
        
        const books = await Book.find().sort({createdAt:-1});
        return res.json({status:"success",data:books});
    }
    catch(error){
         res.status(500).json({message:"An error occurred."})
    }
})



// get recent books with limit
router.get('/get-recent-books',async(req,res)=>{
    try{
        
        const books = await Book.find().sort({createdAt:-1}).limit(4);
        return res.json({status:"success",data:books});
    }
    catch(error){
         res.status(500).json({message:"An error occurred."})
    }
})




// get book by id
router.get('/get-book-by-id/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const books = await Book.findById(id);
        return res.json({status:"success",data:books});
    }
    catch(error){
         res.status(500).json({message:"An error occurred."})
    }
})

module.exports = router;

