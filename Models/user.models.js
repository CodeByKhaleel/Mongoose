import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username:{
      type:'String',
      required:true,
      unique:true,
      lowercase:true
    },
    email:{
      type:String,
      required:[true,"email is required"],
      unique:[true,"already available"],
      lowercase:[true,"must be lowercase"]
    },
    password:{
      type:String,
      required:true,
      min:[8,"password must be 8 letters"]
    }
  },{timestamps:true}
)

export const User = mongoose.model("User",userSchema) 
