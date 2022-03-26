class Validation {
    static isValidEmail(email: string) {
        const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return re.test(String(email).toLowerCase());
    }
    static isValidPassword(password) {
        return password.length >= 6;
    }
    static isValidRegisterCode(code) {
        return code.length >= 16;
    }
}

//const validation = new Validation();

export default Validation;