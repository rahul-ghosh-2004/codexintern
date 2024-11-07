import dotenv from "dotenv"
import connectDatabase from "./database/database.connection.js"
import app from "./app.js"

dotenv.config({
    path: "./.env"
})

connectDatabase()
.then(() => {

    console.log("Database connected successfully !!!")

    app.on("error", (error) => {
        console.error(`Server error :: ${error.message}`)
        process.exit(1)
    })

    app.listen(process.env.PORT || 8888, () => {
        console.log(`Server is listining on port :: ${process.env.PORT || 8888}`)
        console.log(`Address is :: http://localhost:${process.env.PORT || 8888}`)
    })
})
.catch((error) => {
    console.error(`ERROR during executing connectDatabase :: ${error.message}`)
    process.exit(1)
})