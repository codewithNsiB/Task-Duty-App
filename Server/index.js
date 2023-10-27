import express, { json } from "express";
import { IsconnectedToDB } from "./config/mongoDb.js";
import taskRoutes from "./routes/task.js";
import authRoutes from "./routes/auth.js"
import cors from "cors";
import { config } from "dotenv";

const app = express();
config();
app.use(json());
app.use(cors());
app.disable("x-powered-by");


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/manage", taskRoutes);


app.use((error, req, res) => {
  const status = error.status || 500;
  const message = error.message || "something went wrong";
  return res.status(500).json({
    success: false,
    status,
    message,
  });
});

const PORT = process.env.PORT || 8000;

IsconnectedToDB()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`server connected to port ${PORT}`);
      });
    } catch (error) {
      console.log("Could not connect to server ");
    }
  })
  .catch((error) => {
    console.log("Invalid data connection ");
  });
