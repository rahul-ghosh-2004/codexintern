import mongoose, { Schema } from "mongoose"

const internSchema = new Schema({
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
        required: true
    },
    certificateURL: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Intern = mongoose.model("Intern", internSchema)

export default Intern