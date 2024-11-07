import AsyncHandler from "../utils/AsyncHandler.js";
import HandleError from "../utils/HandleError.js";
import HandleResponse from "../utils/HandleResponse.js";
import Admin from "../models/admin.model.js";

const signup = AsyncHandler(async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res
        .status(400)
        .json(
            new HandleError(
                400,
                "All fields are required!"
            )
        )
    }
    
    if (username?.trim() === "") {
        return res
        .status(400)
        .json(
            new HandleError(
                400,
                "Username should not be empty!"
            )
        )
    }

    if (password?.trim().length < 8 || password.trim().length > 16) {
        return res
        .status(400)
        .json(
            new HandleError(
                400,
                "Password should contain 8 to 16 characters!"
            )
        )
    }

    const existedAdmin = await Admin.findOne({ username: username?.trim() })

    if (existedAdmin) {
        return res
        .status(400)
        .json(
            new HandleError(
                400,
                "Admin already exists!"
            )
        )
    }

    const admin = await Admin.create({
        username: username?.trim(),
        password: password?.trim()
    })

    const isCreatedAdminDocument = await Admin.findById(admin._id)

    if (!isCreatedAdminDocument) {
        return res
        .status(500)
        .json(
            new HandleError(
                500,
                "Something went wrong while creating admin document!"
            )
        )
    }

    return res
    .status(201)
    .json(
        new HandleResponse(
            200,
            isCreatedAdminDocument,
            "Admin Document created successfully!"
        )
    )
})

const login = AsyncHandler(async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res
        .status(400)
        .json(
            new HandleError(
                400,
                "All fields are required!"
            )
        )
    }

    if (username?.trim() === "") {
        return res
        .status(400)
        .json(
            new HandleError(
                400,
                "Username should not be empty!"
            )
        )
    }

    if (password?.trim().length < 8 || password.trim().length > 16) {
        return res
        .status(400)
        .json(
            new HandleError(
                400,
                "Password should contain 8 to 16 characters!"
            )
        )
    }

    const existedAdmin = await Admin.findOne({ username: username?.trim() })

    if (!existedAdmin) {
        return res
        .status(400)
        .json(
            new HandleError(
                400,
                "Admin not exists!"
            )
        )
    }

    const isCorrectPassword = await existedAdmin.comparePassword(password)

    if (!isCorrectPassword) {
        return res
        .status(400)
        .json(
            new HandleError(
                400,
                "Invalid Password!"
            )
        )
    }

    const accessToken = existedAdmin.generateAccessToken()

    const options = {
        httpOnly: true,
        secure: true,
        sameSite: "None"
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(
        new HandleResponse(
            200,
            {
                username: existedAdmin.username,
                isLoggedIn: true
            },
            "Admin logged in successfully!"
        )
    )
})

const currentAdmin = AsyncHandler(async (req, res) => {
    const currentAdmin = await Admin.findById(req.admin._id).select("-password")

    return res
    .status(200)
    .json(
        new HandleResponse(
            200,
            {
                username: currentAdmin.username,
                status: true
            },
            "Current Admin fetched successfully!"
        )
    )
})

const logout = AsyncHandler(async (req, res) => {
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .json(
        new HandleResponse(
            200,
            {},
            "Admin logged out successfully!"
        )
    )
})

export {
    signup,
    login,
    currentAdmin,
    logout
}