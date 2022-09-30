type ResponseOperation = {
	status_code: number
	result: string
};


export class UserStorage {

	public static userRegister(): Promise<ResponseOperation> {
		return new Promise((resolve, reject) => {
			resolve({status_code: 204, result: 'user registered'});
			reject({status_code: 400, result: 'any thing that now I not know'});
		})
	}
}
