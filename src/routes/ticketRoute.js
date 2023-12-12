import { Router } from "express";
import * as ticketController from "../controllers/ticketController.js";

const ticketRouter = Router();

ticketRouter.post("/", ticketController.postCreateTicket);
ticketRouter.get("/", ticketController.getTotalPurchase);

export default ticketRouter;
