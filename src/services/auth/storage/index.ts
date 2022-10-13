import { ResponseOperation } from "../../../types/typeStorage";

export class AuthStorage {

    public static auth(): Promise<ResponseOperation>{
        return new Promise((resolve, reject) => {
			resolve({ status_code: 200, result: 'user logged' });
			reject({ status_code: 400, result: 'any thing that now I not know' });
		});
    }
}