import { Router } from "express";
import { authController } from "../controllers/auth";

const authRouter = Router();

authRouter.get("/login", authController.Login);

export default authRouter;