import express from "express";
import {submission} from "../controller/employeeController.js"

const router = express.Router()

router.route("/").post(submission)

export default router