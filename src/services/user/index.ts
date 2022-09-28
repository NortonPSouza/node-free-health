import {Request} from 'express';
import {UserValidate} from "../../validate/uservalidate";
import {UserStorage} from "./storage";

type ResponseOperation = {
	status_code: number
	result: string
};

export class UserService {

	public static validateRegister(req: Request): Promise<ResponseOperation> {
		return new Promise((resolve, reject) => {
			const {name, email, password, birthday, height} = req.body;
			const fields = {
				isName: UserValidate.isName(name),
				isEmail: UserValidate.isEmail(email),
				isHeight: UserValidate.isHeight(height),
				isBirthday: UserValidate.isBirthday(birthday),
				isPassword: UserValidate.isPassword(password)
			};

			for(const key in fields) {
				if(!fields[key].status){
					reject({status_code: 400, result: fields[key].message})
				}
			}

			UserStorage.userRegister()
				.then(({status_code, result}) => resolve({status_code, result}))
				.catch(({status_code, result}) => reject({status_code, result}))
		});
	}
}
