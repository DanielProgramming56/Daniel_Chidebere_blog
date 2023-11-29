import express from "express";
import dotenv from "dotenv";
import api from "./routes/api.js";
import { connectDataBase } from "./config/database.js";
import { handleError } from "./middleware/handleError.js";
import cors from "cors";

// configurations
dotenv.config();

// create application
const app = express();

// middlewares
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));  // Place CORS middleware at the top
app.use(express.json());
app.use("/api", api);
app.use(handleError);
// app.use(invalidPathError);

// port
const port = process.env.PORT || 5000;
connectDataBase();
app.listen(port, () => console.log(`Your application is running on port ${port}`));
