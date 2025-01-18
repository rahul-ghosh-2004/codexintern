import AsyncHandler from "../utils/AsyncHandler.js";
import HandleError from "../utils/HandleError.js";
import HandleResponse from "../utils/HandleResponse.js";
import Student from "../models/student.model.js";

const signup = AsyncHandler(async (req, res) => {
    const { fullname, email, phone, offerLetterId, password } = req.body

    if (!fullname || !email || !password || !phone || !offerLetterId) {
        return res
        .status(404)
        .json(
            new HandleError(
                400,
                "All fields are required!"
            )
        )
    }

    if (fullname?.trim() === "") {
        return res
        .status(400)
        .json(
            new HandleError(
                400,
                "Fullname should not be empty!"
            )
        )
    }

    if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email?.trim())) {
        return res
        .status(400)
        .json(
            new HandleError(
                400,
                "Invalid email!"
            )
        )
    }

    if (phone?.trim() === "") {
        return res
        .status(400)
        .json(
            new HandleError(
                400,
                "Phone number should not be empty!"
            )
        )
    }

    if (phone?.trim().length !== 10) {
        return res
        .status(400)
        .json(
            new HandleError(
                400,
                "Phone number should be 10 digits!"
            )
        )
    }

    if (offerLetterId?.trim()?.length < 5) {
        return res
        .status(400)
        .json(
            new HandleError(
                400,
                "Offer letter ID is invalid"
            )
        )
    }

    if (password?.trim() === "") {
        return res
        .status(400)
        .json(
            new HandleError(
                400,
                "Password should not be empty!"
            )
        )
    }

    if (password?.trim()?.length < 8 || password?.trim()?.length > 16) {
        return res
        .status(400)
        .json(
            new HandleError(
                400,
                "Password should contain 8 to 16 characters!"
            )
        )
    }

    const existedStudent = await Student.findOne({ offerLetterId: offerLetterId?.trim() })

    if(existedStudent) {
        return res
        .status(400)
        .json(
            new HandleError(
                400,
                "Offer letter ID already exists!"
            )
        )        
    }

    const student = await Student.create({
        fullname: fullname?.trim(),
        email: email?.trim(),
        phone: phone?.trim(),
        offerLetterId: offerLetterId?.trim(),
        password: password?.trim()
    })

    const isCreatedStudent = await Student.findById(student._id)

    if (!isCreatedStudent) {
        return res
        .status(500)
        .json(
            new HandleError(500, "Failed to create student")
        )
    }

    return res
    .status(201)
    .json(
        new HandleResponse(201, isCreatedStudent, "Successfully signed up")
    )
})

const signin = AsyncHandler(async (req, res) => {})

const signout = AsyncHandler(async (req, res) => {})

export {
    signup,
    signin,
    signout
}