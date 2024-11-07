import { Router } from "express"
import {
    signup,
    login,
    currentAdmin,
    logout
} from "../controllers/admin.controller.js"
import Auth from "../middlewares/auth.middleware.js"

const router = Router()

router.route("/signup").post(signup)
router.route("/login").post(login)

router.route("/current-admin").get(Auth, currentAdmin)
router.route("/logout").get(Auth, logout)

export default router