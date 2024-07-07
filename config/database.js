const mongoose=require('mongoose')

require('dotenv').config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("DB Connection is Successful"))
    .catch((error)=>{
        console.log("Received an error");
        console.log(error.message);
        process.exit(1);
    });
}

module.exports=dbConnect;