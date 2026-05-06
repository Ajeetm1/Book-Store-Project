const mongoose = require("mongoose");

const Conn =async () =>{
    try {
      await mongoose.connect(`${process.env.MONGO_URI}`);
      console.log('connected')
      
    
    }
    catch (error){
        console.log(error)
    }

    

    
}
module.exports = Conn;