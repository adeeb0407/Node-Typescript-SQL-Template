import express from "express";
import {
  controlTrial
} from "../controller/controlTrial";

const router = express.Router();

router.post("/", controlTrial);


export default router;
