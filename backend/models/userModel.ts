import isEmail from 'validator/lib/isEmail';
class Usermodel {
    private email: string | null;
    private name: string;
    constructor(email: string, name: string){
        this.email = isEmail(email) ? email : null;
        this.name = name;
    }
    toJSON(){
        return {
            email: this.email,
            name: this.name
        }
    }
}

export default Usermodel;