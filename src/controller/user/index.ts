import express, { Request, Response } from 'express';
import { User } from '../../entity/user';
import { UserService } from "../../services/user";

export class UserController {

	public static register(req: Request, res: Response): void {
		UserService.validateRegister(req)
			.then(({ status_code, result }) => res.status(status_code).send(result))
			.catch(({ status_code, result }) => res.status(status_code).send({ error: result }))
	}

	public static allUsers(req: Request, res: Response): void {
		UserService.validateAllUser(req)
			.then(({ status_code, result }) => res.status(status_code).send({ result }))
			.catch(({ status_code, result }) => res.status(status_code).send({ error: result }))
	}

	public static user(req: Request, res: Response): void {
		UserService.validateUser(req)
			.then(({ status_code, result }) => res.status(status_code).send({ result }))
			.catch(({ status_code, result }) => res.status(status_code).send({ error: result }))
	}

	public static deleteUser(req: Request, res: Response): void {		
		UserService.validateDeleteUser(req)
			.then(({ status_code, result }) => res.status(status_code).send({ result }))
			.catch(({ status_code, result }) => res.status(status_code).send({ error: result }))
	}
}
