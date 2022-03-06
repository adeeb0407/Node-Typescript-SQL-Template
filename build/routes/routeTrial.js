"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controlTrial_1 = require("../controller/controlTrial");
const router = express_1.default.Router();
router.post("/", controlTrial_1.controlTrial);
exports.default = router;