const mongoose = require("mongoose");

const Conn =async () =>{
    try {
      await mongoose.connect(`${process.env.URL}`);
      console.log('connected')
      
    
    }
    catch (error){
        console.log(error)
    }

    

    
}
Conn();