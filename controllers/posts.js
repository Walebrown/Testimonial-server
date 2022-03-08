import PostTestimonials from "../models/testimonials.js"


export const getPosts = async (req, res) => {
    try {
        const posttestimonial =  await PostTestimonials.find();

        res.status(200).json(posttestimonial);
        console.log(posttestimonial)
        
    } catch (error) {
        res.status(404).json({message: error.message })
        
    }
}

export const createPost = async (req,res)=> {
   // const newPost = PostMessage.create(req.body);
   //res.status(201).json(newPost);
    const post = req.body;
    const newPost =  new PostTestimonials(post);
    
    try {
        await newPost.save();
        res.status(201).json(newPost)
        
        
    } catch (error) {
        res.status(409).json(error)
        
    }
}