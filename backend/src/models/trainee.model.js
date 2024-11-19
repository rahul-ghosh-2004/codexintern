import mongoose, { Schema } from "mongoose";

const traineeSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    startingDate: {
        type: String,
        required: true
    },
    endingDate: {
        type: String,
        required: true
    },
    certificateID: {
        type: String,
        required: true,
        index: true
    },
    certificateURL: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Trainee = mongoose.model("Trainee", internSchema)

export default Trainee