import { Router } from "express";
import { userController } from "../controllers/user";

const userRouter = Router();

userRouter.get("/all-employee", userController.GetAllEmployee);

export default userRouter;