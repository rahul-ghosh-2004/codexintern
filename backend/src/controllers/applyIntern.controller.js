import ApplyIntern from "../models/applyIntern.model.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import HandleError from "../utils/HandleError.js";
import HandleResponse from "../utils/HandleResponse.js";

const apply = AsyncHandler(async (req, res) => {
    const { fullname, email, mobile, gender, domain, college } = req.body

    if (!fullname || !email || !mobile || !gender || !domain || !college) {
        return res
        .status(400)
        .json(
            new HandleError(400, "All fields are required")
        )
    }

    if (fullname?.trim() === "") {
        return res
        .status(400)
        .json(
            new HandleError(400, "Fullname should not be empty")
        )
    }

    if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email?.trim())) {
        return res
        .status(400)
        .json(
            new HandleError(400, "Invalid email")
        )
    }

    if (mobile?.trim() === "") {
        return res
        .status(400)
        .json(
            new HandleError(400, "Mobile number should not be empty")
        )
    }

    if (mobile?.length !== 10) {
        return res
        .status(400)
        .json(
            new HandleError(400, "Mobile number should be 10 digits")
        )        
    }

    if (gender?.trim() === "") {
        return res
        .status(400)
        .json(
            new HandleError(400, "Gender should not be empty")
        )
    }

    if (domain?.trim() === "") {
        return res
        .status(400)
        .json(
            new HandleError(400, "Domain name should not be empty")
        )
    }

    if (college?.trim() === "") {
        return res
        .status(400)
        .json(
            new HandleError(400, "College name should not be empty")
        )
    }

    const isApplied = await ApplyIntern.findOne({
        $and: [ {email: email?.trim()?.toLowerCase()}, {mobile: mobile?.trim()}, {domain: domain?.trim()} ]
    })

    if (isApplied) {
        return res
        .status(400)
        .json(
            new HandleError(400, "Application already submitted!")
        )
    }

    const document = await ApplyIntern.create({
        fullname,
        email,
        mobile,
        gender,
        domain,
        college
    })

    const isCreatedDocument = await ApplyIntern.findById(document._id)

    if (!isCreatedDocument) {
        return res
        .status(500)
        .json(
            new HandleError(500, "Failed to apply")
        )
    }

    return res
    .status(200)
    .json(
        new HandleResponse(200, isCreatedDocument, "Successfully applied")
    )
})

export {
    apply
}