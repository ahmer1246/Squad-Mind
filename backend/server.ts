import express from "express";
import rateLimit from "express-rate-limit";
import feedbackRouter from "./Routes/feedbackRoute";
import bodyParser from "body-parser"
const cors = require('cors');

const app = express();
const port =  4000;
app.use(bodyParser.json());
app.use(cors()); 

const limiter = rateLimit({
    windowMs : 1000 * 10 ,
    max : 1,
    message:"Too many request "
});


// end point 
app.use("/feedback",limiter);

app.use("/feedback",feedbackRouter);


app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})