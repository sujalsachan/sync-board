import mongoose, { Mongoose } from "mongoose";

const taskSchema = new mongoose.Schema({
    
    description : {
        type:String,
        trim : true,
    },
    
    title : {
        type:String, 
        required : [true, 'Task title is required'],
        trim : true,
    },
    
    ListId : {
        type : Schema.Types.ObjectId,
        ref:"List",
        required : [true, 'List id is required'],
        trim : true,
    },
});

const Task = mongoose.model('Task', taskSchema);