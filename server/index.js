import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDb from "./mongodb/connect.js";
import postRoutes from './routes/postRoutes.js'
import userRegister from './routes/userRegister.js'
import dalleRoutes from './routes/dalleRoutes.js'
import loginRoutes from './routes/loginRoute.js'



const app = express();

app.use(cors);


dotenv.config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json({ limit: "50mb" }));

app.use('/api/v1/post',postRoutes)
app.use('/api/v1/dalle',dalleRoutes)
app.use('/api/register',userRegister)
app.use('/api/login',loginRoutes)

app.get("/", async (req, res) => {
  res.send("Hello World");
});

const start = () => {
  try {
    connectDb(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("Server has started at http://localhost:8080");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
