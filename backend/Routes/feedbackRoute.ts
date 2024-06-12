import { Router } from "express";
import { getAllfeedbackHandler,addFeedbackHandler } from "../controllers/feedbackController";


const feedbackRouter = Router();

feedbackRouter.get("/get",getAllfeedbackHandler);
feedbackRouter.post('/add', addFeedbackHandler);

export default feedbackRouter;
