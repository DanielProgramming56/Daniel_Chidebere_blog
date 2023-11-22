import express from "express"
import dotenv from "dotenv"
import api from "./routes/api.js"
import { connectDataBase } from "./config/database.js"
import { handleError } from "./middleware/handleError.js"
import { invalidPathError } from "./middleware/handleError.js"
// configurations
dotenv.config()

// create application
const app = express()


// middlewares
app.use("/api", api)
app.use(handleError)
app.use(invalidPathError)
// port
const port = process.env.PORT || 5000
connectDataBase()
app.listen(port, () => console.log(`your application is running in port ${port}`))
