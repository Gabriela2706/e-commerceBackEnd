import { Router } from "express";
import * as paymentController from "../controllers/paymentController.js";

const paymentRoute = Router();

export default paymentRoute.post("/intents", paymentController.postIntents);
