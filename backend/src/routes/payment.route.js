import { Router } from "express"
import { order, status } from "../controllers/payment.controller.js"

const router = Router()

router.route("/order").post(order)
router.route("/status").post(status)

export default router