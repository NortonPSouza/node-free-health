import express, { Request, Response } from 'express';
import { NewRequest } from '../../main/app';
import { UserService } from "../../services/user";

export class UserController {

	public static register(req: NewRequest, res: Response): void {
		UserService.validateRegister(req)
			.then(({ status_code, result }) => res.status(status_code).send(result))
			.catch(({ status_code, result }) => res.status(status_code).send({ error: result }))
	}

	public static allUsers(req: NewRequest, res: Response): void {
		UserService.validateAllUser(req)
			.then(({ status_code, result }) => res.status(status_code).send({ result }))
			.catch(({ status_code, result }) => res.status(status_code).send({ error: result }))
	}

	public static user(req: NewRequest, res: Response): void {
		UserService.validateUser(req)
			.then(({ status_code, result }) => res.status(status_code).send({ result }))
			.catch(({ status_code, result }) => res.status(status_code).send({ error: result }))
	}

	public static delete(req: NewRequest, res: Response): void {		
		UserService.validateDeleteUser(req)
			.then(({ status_code, result }) => res.status(status_code).send({ result }))
			.catch(({ status_code, result }) => res.status(status_code).send({ error: result }))
	}

	public static update(req: NewRequest, res: Response): void {
		UserService.validateUpdateUser(req)
			.then(({ status_code, result }) => res.status(status_code).send({ result }))
			.catch(({ status_code, result }) => res.status(status_code).send({ error: result }))
	}
}
