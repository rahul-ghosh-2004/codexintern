import {Router} from "express"
import {
    signup
} from "../controllers/student.controller.js"

const router = Router()

router.route("/signup").post(signup)

export default router