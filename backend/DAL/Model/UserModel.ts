import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

interface Iuser {
    name: string;
    email: string;
    isActive: number;
    password: string;
    loginCode: string | undefined,
    loginCodeExpire: Date | undefined
}
interface IUserDoccument extends Iuser {
    comparePassword(enteredPassword: string): Promise<boolean>,
    getLogincode(): String
}

export const userSchema = new mongoose.Schema<IUserDoccument>({
    name: {
        type: String,
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email address']
    },
    isActive: {
        type: Number,
        default: 0, // 0: Pending, 1: Active, 
    },
    password: {
        type: String,
        minlength: [6, 'Your password must be longer than 6 characters'],
        select: false
    },
    loginCode: String,
    loginCodeExpire: Date

}, { timestamps: true })

// Encrypting password before saving user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    this.password = await bcrypt.hash(this.password, 10)
})

// Compare user password
userSchema.methods.comparePassword = async function (enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password)
}
// Generate login code for the firt time
userSchema.methods.getLogincode = function () {
    this.loginCode = (Math.random() + 1).toString(36).substring(6);
    this.loginCodeExpire = Date.now() + 30 * 60 * 1000;
    return this.loginCode;
}

const User = mongoose.model<IUserDoccument>('User', userSchema);
export default User;