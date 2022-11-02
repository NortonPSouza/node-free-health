import { DataSource } from "typeorm";
import { Login } from "../../../entity/login";
import { User } from "../../../entity/user";
import { ResponseOperation } from "../../../types/typeStorage";

type RegisterProps = {
	name: string
	email: string
	height: string
	birthday: string
	password: string
}
export class UserStorage {

	public static async userRegister(dataSource: DataSource, fields: RegisterProps): Promise<ResponseOperation> {

		const [day, month, year] = fields.birthday.split("/");

		//TODO - validacao de status code 409

		const user = new User();
		user.name = fields.name;
		user.birthday = new Date(+year, +month - 1, +day);
		user.heigth = Number(fields.height);

		const login = new Login();
		login.email = fields.email;
		login.password = fields.password;
		login.user = user;

		const userRepository = dataSource.getRepository(User);
		const loginRepository = dataSource.getRepository(Login);

		try {
			await userRepository.save(user);
			await loginRepository.save(login);
			return { status_code: 204, result: 'user registered' }
		} catch (error) {
			return { status_code: 400, result: error }
		}
	}

	public static allUser(): Promise<ResponseOperation> {
		return new Promise((resolve, reject) => {
			resolve({ status_code: 200, result: 'list of user' });
			reject({ status_code: 400, result: 'any thing that now I not know' });
		});
	}

	public static user(id: number): Promise<ResponseOperation> {
		return new Promise((resolve, reject) => {
			resolve({ status_code: 200, result: `user with id = ${id}` });
			reject({ status_code: 404, result: 'not found' });
		});
	}

	public static deleteUser(id: number): Promise<ResponseOperation> {
		return new Promise((resolve, reject) => {
			resolve({ status_code: 200, result: `user deleted with id = ${id}` });
			reject({ status_code: 404, result: 'not found' });
		});
	}

	public static userUpdate(id: number): Promise<ResponseOperation> {
		return new Promise((resolve, reject) => {
			resolve({ status_code: 200, result: `user updated with id = ${id}` });
			reject({ status_code: 400, result: 'any thing that now I not know' });
		});
	}
}
