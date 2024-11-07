import mongoose from "mongoose"
import databaseName from "../constant.js"

const connectDatabase = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${databaseName}`)
        console.log(`MongoDB connection established :: ${connectionInstance.connection.host}/${databaseName}`)
    } catch (error) {
        console.error(`MongoDB connection ERROR :: ${error.message}`)
        process.exit(1)
    }
}

export default connectDatabase