require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));



const cors  = require("cors")
const user = require("./routes/user")
const Book = require("./routes/book")
const Favourate = require("./routes/favourate")
const Cart = require("./routes/cart")
const Orders = require("./routes/orders")


app.use(cors({
    origin: [
      "http://localhost:5173",
      "https://book-store-project-weld.vercel.app",
    ],
    credentials: true,
  }));
// routes
app.use("/api/v1",user)
app.use("/api/v1/",Book)
app.use("/api/v1/",Favourate)
app.use("/api/v1/",Cart)
app.use("/api/v1/",Orders)
app.use("/", (req, res) => {
  res.send("Backend running successfully!");
});

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// // port creating
// app.listen(process.env.PORT,()=>{
//     console.log(`Server running on http://localhost:${process.env.PORT}`)

// });
module.exports = app;




// for checking book on versel
// https://book-store-project-96aq1qhb2-ajeetm1s-projects.vercel.app/api/v1/get-all-books

