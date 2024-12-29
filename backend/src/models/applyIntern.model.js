import mongoose, { Schema } from "mongoose"


const applyInternSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true,
        trim: true,
        index: true
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    domain: {
        type: String,
        enum: ["Front-End Development", "Basic Web Development", "Back-End Development", "Python Development"],
        trim: true,
        index: true,
        required: true
    },
    college: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })

const ApplyIntern = mongoose.model("ApplyIntern", applyInternSchema)

export default ApplyIntern