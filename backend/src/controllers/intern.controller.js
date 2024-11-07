import AsyncHandler from "../utils/AsyncHandler.js";
import HandleResponse from "../utils/HandleResponse.js";
import HandleError from "../utils/HandleError.js";
import Intern from "../models/intern.model.js";

const uploadData = AsyncHandler(async (req, res) => {
    const { fullname, domain, startingDate, endingDate, certificateID, certificateURL } = req.body

    if (!fullname || !domain || !startingDate || !endingDate || !certificateID || !certificateURL) {
        return res
        .status(400)
        .json(
            new HandleError(400, "All fields are required!")
        )
    }

    if (fullname?.trim() === "") {
        return res
        .status(400)
        .json(
            new HandleError(400, "Fullname should not be empty!")
        )
    }

    if (domain?.trim() === "") {
        return res
        .status(400)
        .json(
            new HandleError(400, "Domain should not be empty!")
        )
    }

    if (startingDate?.trim() === "") {
        return res
        .status(400)
        .json(
            new HandleError(400, "Starting date should not be empty!")
        )
    }

    if (endingDate?.trim() === "") {
        return res
        .status(400)
        .json(
            new HandleError(400, "Ending date should not be empty!")
        )
    }

    if (certificateID?.trim() === "") {
        return res
        .status(400)
        .json(
            new HandleError(400, "Certificate ID should not be empty!")
        )
    }

    if (certificateURL?.trim() === "") {
        return res
        .status(400)
        .json(
            new HandleError(400, "Certificate URL should not be empty!")
        )
    }

    const isExistedIntern = await Intern.findOne({ certificateID })

    if (isExistedIntern) {
        return res
        .status(400)
        .json(
            new HandleError(400, "Intern already exists!")
        )
    }

    const intern = await Intern.create({
        fullname: fullname?.trim(),
        domain: domain?.trim(),
        startingDate: startingDate?.trim(),
        endingDate: endingDate?.trim(),
        certificateID: certificateID?.trim(),
        certificateURL: certificateURL?.trim()
    })

    const isCreatedIntern = await Intern.findById(intern._id)

    if (!isCreatedIntern) {
        return res
        .status(500)
        .json(
            new HandleError(
                500,
                "Something went wrong while creating intern document!"
            )
        )
    }

    return res
    .status(201)
    .json(
        new HandleResponse(
            200,
            isCreatedIntern,
            "Record created successfully!!"
        )
    )
})

const findDataById = AsyncHandler(async (req, res) => {
    const { certificateID } = req.body

    if (!certificateID) {
        return res
        .status(400)
        .json(
            new HandleError(400, "Certificate ID is required!")
        )
    }

    if (certificateID?.trim() === "") {
        return res
        .status(400)
        .json(
            new HandleError(400, "Certificate ID should not be empty!")
        )
    }

    const intern = await Intern.findOne({ certificateID })

    if (!intern) {
        return res
        .status(404)
        .json(
            new HandleError(
                404,
                "Intern not found!"
            )
        )
    }

    return res
    .status(200)
    .json(
        new HandleResponse(
            200,
            intern,
            "Intern found successfully!!"
        )
    )
})

export {
    uploadData,
    findDataById
}