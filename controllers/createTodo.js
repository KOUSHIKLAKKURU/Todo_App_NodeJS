//Import the model
const Todo=require('../models/Todo')

//define Route Handler
exports.createTodo=async(req,res)=>{
    try{
        //extract title,description from request body
        const {title,description}=req.body;
        //create a new TODO Object and insert it in DB
        const response=await Todo.create({title,description});
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry Created Successfully"
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"Internal Server Error",
                message:err.message
            }
        );
    }
}