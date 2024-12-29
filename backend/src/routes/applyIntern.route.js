import { Router } from "express"
import { apply } from "../controllers/applyIntern.controller.js"

const router = Router()

router.route("/apply").post(apply)

export default router