import { Request } from 'express';
import { UserValidate } from '../../validate/uservalidate';
import { AuthStorage } from './storage';

type ResponseOperation = {
    status_code: number
    result: string
};

export class AuthService {

    public static auth(req: Request): Promise<ResponseOperation> {
        return new Promise((resolve, reject) => {
            const { email, password } = req.body;

            const fields = {
                email: UserValidate.isEmail(email),
                password: UserValidate.isPassword(password)
            }

            for (const key in fields) {
                if (!fields[key].status) {
                    return reject({ status_code: 400, result: fields[key].message });
                }
            }

            AuthStorage.auth()
                .then(({ status_code, result }) => resolve({ status_code, result }))
                .catch(({ status_code, result }) => reject({ status_code, result }))
        });
    }
}