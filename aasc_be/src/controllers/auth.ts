import axios from "axios";
import HttpUtils from "../utils/http";
import { Request, Response } from "express";
import { LoginResponse } from "../dto/response/auth";

export class AuthController {
    private httpUitls: HttpUtils;

    constructor() {
        this.httpUitls = new HttpUtils();

        this.Login = this.Login.bind(this);
    }

    async Login(req: Request, res: Response) {
        try {
            const { app_id } = req.query as { app_id: string };
            const result = await axios.get(`${process.env.AASC_URL}/bx/oauth2_token/${app_id}`);
            this.httpUitls.SuccessResponse(res, result.data as LoginResponse);
        } catch (error) {
            this.httpUitls.ErrorResponse(res, new Error(`${error}`));
        }
    }
}

export const authController = new AuthController();