import axios from "axios";
import HttpUtils from "../utils/http";
import { Request, Response } from "express";
import { EmployeeResponse } from "../dto/response/user";

export class UserController {
    private httpUitls: HttpUtils;

    constructor() {
        this.httpUitls = new HttpUtils();

        this.GetAllEmployee = this.GetAllEmployee.bind(this);
    }

    async GetAllEmployee(req: Request, res: Response) {
        try {
            const { token } = req.query as { token: string };
            const result = await axios.get(`${process.env.B24_URL}/rest/user.get.json?auth=${token}`);
            this.httpUitls.SuccessResponse(res, result.data as EmployeeResponse);
        } catch (error) {
            this.httpUitls.ErrorResponse(res, new Error(`${error}`));
        }
    }
}

export const userController = new UserController();