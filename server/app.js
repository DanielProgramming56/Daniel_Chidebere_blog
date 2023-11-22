import express from "express"
import dotenv from "dotenv"
import api from "./routes/api.js"
// configurations
dotenv.config()

// create application
const app = express()


// middlewares
app.use("/api", api)
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`your application is running in port ${port}`))
