import { resolve } from "path";

type ResponseOperation = {
	status_code: number
	result: string
};


export class UserStorage {

	public static userRegister(): Promise<ResponseOperation> {
		return new Promise((resolve, reject) => {
			resolve({ status_code: 204, result: 'user registered' });
			reject({ status_code: 400, result: 'any thing that now I not know' });
		});
	}

	public static allUser(): Promise<ResponseOperation> {
		return new Promise((resolve, reject) => {
			resolve({ status_code: 200, result: 'list of user' });
			reject({ status_code: 400, result: 'any thing that now I not know' });
		});
	}

	public static user(id: number): Promise<ResponseOperation> {
		return new Promise((resolve, reject) => {
			resolve({ status_code: 200, result: `user with id = ${id}`});
			reject({ status_code: 404, result: 'not found' });
		});
	}

	public static  deleteUser(id: number): Promise<ResponseOperation> {		
		return new Promise((resolve, reject) => {
			resolve({ status_code: 200, result: `user deleted with id = ${id}`});
			reject({ status_code: 404, result: 'not found' });
		});
	}
}
