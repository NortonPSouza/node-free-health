type ErrorMessage = {
	status: boolean
	message: string
}

export class UserValidate {
	private static EMPTY_FIELD = "FIELD cannot be empty";

	public static isEmail(value: string): ErrorMessage {
		const email = /\S+@\S+\.\S+/;
		if (!value) {
			return {
				status: false,
				message: this.EMPTY_FIELD.replace("FIELD", "Email")
			};
		}
		if (!email.test(value)) {
			return {
				status: false,
				message: "Email is invalid"
			}
		}
		return { status: true, message: '' };
	}

	public static isName(value: string): Boolean | ErrorMessage {
		const name = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
		if (!value) {
			return {
				status: false,
				message: this.EMPTY_FIELD.replace("FIELD", "Name")
			}
		}
		if(!name.test(value)){
			return {
				status: false,
				message: "Name must be a string"
			}
		}
		if (value.length < 6) {
			return {
				status: false,
				message: "Name must have minimun 6 caracters"
			}
		}
		return { status: true, message: '' };
	}

	public static isPassword(value: string): Boolean | ErrorMessage {
		const password = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!/?\.])[0-9a-zA-Z$*&@!#?\.]{6,}$/;
		if (!value) {
			return {
				status: false,
				message: this.EMPTY_FIELD.replace("FIELD", "password")
			}
		}
		if (!password.test(value)) {
			return {
				status: false,
				message: "Password is not strong enough"
			}
		}
		return { status: true, message: '' };
	}

	public static isBirthday(value: string): Boolean | ErrorMessage {
		// TODO- review this regex validation
		const birthday = /^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$/;

		if (!value) {
			return {
				status: false,
				message: this.EMPTY_FIELD.replace("FIELD", "birthday")
			}
		}
		if (!birthday.test(value)) {
			return {
				status: false,
				message: "Birhtday is invalid"
			}
		}
		return { status: true, message: '' };
	}

	public static isHeight(value: string): Boolean | ErrorMessage {
		// TODO - make a regex for validate person height in centimeter
		if (!value) {
			return {
				status: false,
				message: this.EMPTY_FIELD.replace("FIELD", "height")
			}
		}
		return { status: true, message: '' };
	}
}
