const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
require("dotenv").config();
require("./conn")
const cors  = require("cors")
const user = require("./routes/user")
const Book = require("./routes/book")
const Favourate = require("./routes/favourate")
const Cart = require("./routes/cart")
const Orders = require("./routes/orders")


app.use(cors());
// routes
app.use("/api/v1",user)
app.use("/api/v1/",Book)
app.use("/api/v1/",Favourate)
app.use("/api/v1/",Cart)
app.use("/api/v1/",Orders)

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});
module.exports = app;
// port creating
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running locally on http://localhost:${PORT}`);
  });
}

