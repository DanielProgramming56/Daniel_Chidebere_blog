import express from "express"
import dotenv from "dotenv"
import api from "./routes/api.js"
import { connectDataBase } from "./config/database.js"
import { handleError } from "./middleware/handleError.js"
import { invalidPathError } from "./middleware/handleError.js"
import cors from "cors"
// configurations
dotenv.config()

// create application
const app = express()


// middlewares
app.use(express.json())
app.use("/api", api)
app.use(handleError)
app.use(invalidPathError)
app.use(cors(
    {
        origin: ["https://https://daniel-chidebere-dev.vercel.app/"],
        methods: ['POST', 'PUT', 'GET', 'DELETE'],
        credentials: true
    }
))
// port
const port = process.env.PORT || 5000
connectDataBase()
app.listen(port, () => console.log(`your application is running in port ${port}`))
