import express from "express"
import blog from "./blogRoutes.js"
import user from "./userRoutes.js"
import comment from "./commentRoutes.js"
const app = express()
app.use("/blogs", blog)
app.use("/user", user)
app.use("/comment", comment)

export default app