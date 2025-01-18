import mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"
import JWT from "jsonwebtoken"

const studentSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        index: true,
        minLength: 10,
        maxLength: 10
    },
    offerLetterId: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 16,
        trim: true
    }
}, { timestamps: true })

studentSchema.pre("save", async function(next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    } else {
        next();
    }
})

studentSchema.methods.validatePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

studentSchema.methods.generateAccessToken = function() {
    return JWT.sign(
        {
            _id: this._id,
            email: this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

const Student = mongoose.model("Student", studentSchema)

export default Student