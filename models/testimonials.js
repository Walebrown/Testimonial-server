import mongoose  from "mongoose";

const postSchema =  mongoose.Schema({
    firstName:String,
    lastName:String,
    story:String,
    role: String,
    city: String,
    selectedFile : String ,
  
   

})
const PostTestimonials = mongoose.model('PostTestimonials', postSchema)
export default PostTestimonials;