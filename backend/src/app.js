import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(cookieParser())

app.use(express.json({
    limit: "100kb"
}))
app.use(express.urlencoded({
    limit: "100kb",
    extended: true
}))
app.use(express.static("public/temp"))




import adminRoute from "./routes/admin.route.js"
import internRoute from "./routes/intern.route.js"
import applyInternRouter from "./routes/applyIntern.route.js"
import studentRoute from "./routes/student.route.js"
import paymentRoute from "./routes/payment.route.js"
import taskUploadRoute from "./routes/task.route.js"

app.use("/api/v1/admin", adminRoute)
app.use("/api/v1/intern", internRoute)
app.use("/api/v1/intern_application", applyInternRouter)
app.use("/api/v1/student", studentRoute)
app.use("/api/v1/payment", paymentRoute)
app.use("/api/v1/task", taskUploadRoute)

export default app