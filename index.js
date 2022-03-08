import  express  from "express";
import mongoose  from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";


import postRoutes from "./routes/posts.js";


const app = express();


app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));

app.use(cors());

app.use('/posts', postRoutes)

const MONGO_URL = "mongodb+srv://Adewale:Adewale@cluster0.1va7l.mongodb.net/testimonials?retryWrites=true&w=majority";
 const PORT = process.env.PORT || 5000;

 mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology:true})
 .then(() => app.listen(PORT, () => console.log(`server is running on port: ${PORT}`)))
 .catch((error) => console.log(error.message))