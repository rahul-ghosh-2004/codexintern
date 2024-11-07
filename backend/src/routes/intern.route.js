import {Router} from "express"
import Auth from "../middlewares/auth.middleware.js"
import { uploadData, findDataById } from "../controllers/intern.controller.js"

const router = Router()

router.route("/upload-data").post(Auth, uploadData)
router.route("/find").post(findDataById)

export default router