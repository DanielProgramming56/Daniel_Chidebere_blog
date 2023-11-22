import express from "express"
import blog from "./blogRoutes.js"
const app = express()
app.use("/blogs", blog )

export default app