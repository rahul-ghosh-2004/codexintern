import AsyncHandler from "../utils/AsyncHandler.js";
import HandleResponse from "../utils/HandleResponse.js";
import HandleError from "../utils/HandleError.js";
import Task from "../models/task.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

const uploadTask = AsyncHandler(async (req, res) => {
    const {
        fullName,
        email,
        mobile,
        githubTaskLink,
        offerLetterId,
        transactionId
    } = req?.body

    if (!fullName || !email || !mobile || !githubTaskLink || !transactionId) {
        return res
        .status(400)
        .json(
            new HandleError(404, "All fields are required! :(")
        )
    }

    if (fullName?.trim() == "") {
        return res
        .status(400)
        .json(
            new HandleError(400, "Fullname is required! :(")
        )
    }

    if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email?.trim()?.toLowerCase())) {
        return res
        .status(400)
        .json(
            new HandleError(400, "Invalid email or email format! :(")
        )
    }

    if (mobile?.trim()?.length !== 10) {
        return res
        .status(400)
        .json(
            new HandleError(400, "Invalid mobile no! :(")
        )
    }

    if (githubTaskLink?.trim() === "") {
        return res
        .status(400)
        .json(
            new HandleError(400, "Please provide github link! :(")
        )
    }

    if (transactionId?.trim() == "") {
        return res
        .status(400)
        .json(
            new HandleError(400, "Transaction ID is required! :(")
        )
    }

    const file = req.file.path

    console.log(file)

    if (!file) {
        return res
        .status(400)
        .json(
            new HandleError(400, "Please upload payment screenshot! :(")
        )
    }

    const uploadedImageUrl = await uploadOnCloudinary(file)

    if (!uploadedImageUrl) {
        return res
        .status(400)
        .json(
            new HandleError(500, "Something went wrong while uploading image!")
        )
    }

    console.log(uploadedImageUrl)

    const task = await Task.create({
        fullName: fullName?.trim(),
        email: email?.trim()?.toLowerCase(),
        mobile: mobile?.trim(),
        githubTaskLink: githubTaskLink?.trim(),
        offerLetterId: offerLetterId?.trim() === "" ? Date.now() : offerLetterId?.trim(),
        transactionId: transactionId?.trim(),
        paymentScreenShot: uploadedImageUrl
    })

    const status = await Task.findById(task?._id)

    if (!status) {
        return res
        .status(500)
        .json(
            new HandleError(500, "Something went wrong! Please try again later! :(")
        )
    }

    return res
    .status(201)
    .json(
        new HandleResponse(200, status, "Task uploaded successfully! :)")
    )
})

export {
    uploadTask
}