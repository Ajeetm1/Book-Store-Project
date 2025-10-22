const mongoose = require('mongoose');

const orders = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"user"

    },
// which books user purchase
    book:{
        type:mongoose.Types.ObjectId,
        ref:"books"

    },

    status:{
        type:String,
        default:"Order Placed",
        enum:["Order Placed","out of delivery","Delivered","Canceled"]



    },

},
// for check recent orders sorting.
{timestamps:true}
);

module.exports = mongoose.model("orders",orders);