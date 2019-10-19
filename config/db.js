const mongoose = require('mongoose');



const connectedDB = async () => {
    try{
        await mongoose.connect(MONGO_URI,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology:true,
        })
        console.log("MongoDB Is Connected");
    }
    catch(e){
        console.log("MongoDB is not connected");
    }
}




module.exports = connectedDB;