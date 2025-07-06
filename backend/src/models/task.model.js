import mongoose, { Schema } from "mongoose"

const taskSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    githubTaskLink: {
        type: String,
        required: true
    },
    offerLetterId: {
        type: String,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    },
    paymentScreenShot: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Task = mongoose.model("Task", taskSchema)

export default Task