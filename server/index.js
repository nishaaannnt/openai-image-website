import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDb from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import userRegister from "./routes/userRegister.js";
import dalleRoutes from "./routes/dalleRoutes.js";
import loginRoutes from "./routes/loginRoute.js";

dotenv.config();

const app = express();


app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.options('*', (req, res) => {
  // Set CORS headers and respond with a 200 OK status
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(200).send();
});


app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);
app.use("/api/register", userRegister);
app.use("/api/login", loginRoutes);


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
