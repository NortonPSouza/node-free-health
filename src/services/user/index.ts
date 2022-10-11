import { Request } from 'express';
import { UserValidate } from "../../validate/uservalidate";
import { UserStorage } from "./storage";

type ResponseOperation = {
	status_code: number
	result: string
};

export class UserService {

	public static validateRegister(req: Request): Promise<ResponseOperation> {
		return new Promise((resolve, reject) => {
			const { name, email, password, birthday, height } = req.body;
			const fields = {
				isName: UserValidate.isName(name),
				isEmail: UserValidate.isEmail(email),
				isHeight: UserValidate.isHeight(height),
				isBirthday: UserValidate.isBirthday(birthday),
				isPassword: UserValidate.isPassword(password)
			};

			for (const key in fields) {
				if (!fields[key].status) {
					return reject({ status_code: 400, result: fields[key].message });
				}
			}

			UserStorage.userRegister()
				.then(({ status_code, result }) => resolve({ status_code, result }))
				.catch(({ status_code, result }) => reject({ status_code, result }))
		});
	}

	public static validateAllUser(req: Request): Promise<ResponseOperation> {
		return new Promise((resolve, reject) => {
			UserStorage.allUser()
				.then(({ status_code, result }) => resolve({ status_code, result }))
				.catch(({ status_code, result }) => reject({ status_code, result }))
		});
	}

	public static validateUser(req: Request): Promise<ResponseOperation> {
		return new Promise((resolve, reject) => {
			const idUser = req.params.id;
			const isID = UserValidate.isUserId(String(idUser));

			if (!isID.status) {
				return reject({ status_code: 400, result: isID.message });
			}

			UserStorage.user(Number(idUser))
				.then(({ status_code, result }) => resolve({ status_code, result }))
				.catch(({ status_code, result }) => reject({ status_code, result }))
		});
	}

	public static validateDeleteUser(req: Request): Promise<ResponseOperation> {
		return new Promise((resolve, reject) => {
			const idUser = req.params.id;
			const isID = UserValidate.isUserId(String(idUser));

			if (!isID.status) {
				return reject({ status_code: 400, result: isID.message });
			}

			UserStorage.deleteUser(Number(idUser))
				.then(({ status_code, result }) => resolve({ status_code, result }))
				.catch(({ status_code, result }) => reject({ status_code, result }))
		});
	}

	public static validateUpdateUser(req: Request): Promise<ResponseOperation> {
		return new Promise((resolve, reject) => {
			const { name, email, password } = req.body;
			const isUserId = UserValidate.isUserId(String(req.params.id));
			const fields = {
				isName: UserValidate.isName(name),
				isEmail: UserValidate.isEmail(email),
				isPassword: UserValidate.isPassword(password)
			};

			if (!isUserId.status) {
				return reject({ status_code: 400, result: isUserId.message });
			}

			for (const key in fields) {
				if (!fields[key].status) {
					return reject({ status_code: 400, result: fields[key].message });
				}
			}

			UserStorage.userUpdate(Number(req.params.id))
				.then(({ status_code, result }) => resolve({ status_code, result }))
				.catch(({ status_code, result }) => reject({ status_code, result }))

		});
	}
}
