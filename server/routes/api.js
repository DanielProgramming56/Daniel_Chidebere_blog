import express from "express"
import blog from "./blogRoutes.js"
import user from "./userRoutes.js"
const app = express()
app.use("/blogs", blog)
app.use("/user", user)

export default app