import { Request, Response } from "express";
import { AuthService } from "../../services/auth";

export class AuthController {

    public static auth(req: Request, res: Response): void {
        AuthService.auth(req)
            .then(({ status_code, result }) => res.status(status_code).send({ result }))
            .catch(({ status_code, result }) => res.status(status_code).send({ err: result }))
    }
}