import { Router } from "express";
import { uploadTask } from "../controllers/task.controller.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router()

router.route("/upload").post(upload.single("paymentScreenShot"), uploadTask)

export default router