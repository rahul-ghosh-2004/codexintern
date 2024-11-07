import jwt from "jsonwebtoken"
import Admin from "../models/admin.model.js"
import HandleError from "../utils/HandleError.js"

const Auth = async (req, res, next) => {
    try {
        const token = req.cookies.accessToken

        if (!token) {
            return res
            .status(400)
            .json(
                new HandleError(
                    400,
                    "Token missing! Or, Expired!"
                )
            )
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        if (!decodedToken) {
            return res
            .status(400)
            .json(
                new HandleError(
                    400,
                    "Invalid Token!"
                )
            )
        }

        const admin = await Admin.findById(decodedToken._id).select("-password")

        req.admin = admin

        next()
    } catch (error) {
        console.error(error?.message)
        process.exit(1)
    }
}

export default Auth