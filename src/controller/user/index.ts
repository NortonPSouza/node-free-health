import express, {Request, Response} from 'express';
import {UserService} from "../../services/user";

export class UserController {

	static register(req: Request, res: Response): void {
		UserService.validateRegister(req)
			.then(({status_code, result}) => res.status(status_code).send(result))
			.catch(({status_code, result}) => res.status(status_code).send({error: result }))
	}

}
