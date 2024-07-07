//Server Initialization
const express=require('express')
const app=express();

//Load Config from env file
require('dotenv').config();
const PORT=process.env.PORT || 4000;

//middleware to pass json request body
app.use(express.json());
//Import Routes from TODO API
const todoRoutes=require('./routes/todos');
//mount the TODO API Routes
app.use("/api/v1",todoRoutes);

//Start server
app.listen(PORT,()=>{
    console.log(`Server Started successfully at ${PORT}`);
});

//Connect to the database
const dbConnect=require('./config/database')
dbConnect();

//Default Route
app.get('/',(req,res)=>{
    res.send("<h1> THIS IS HOMEPAGE</h1>");
});