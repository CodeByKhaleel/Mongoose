import mongoose from "mongoose"

let subTodo = new mongoose.Schema({
    type:mongoose.Schema.Types.ObjectId,
    ref:"SubTodo"
})
const subtodoSchema = mongoose.Schema(
  {
    content:{
      type:String,
      required:true
    },
    complete:{
      type:Boolean,
      default:false
    },
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    subTodos:[subTodo]
  },{timestamps:true})

export const Todo = mongoose.model("Todo",subtodoSchema)