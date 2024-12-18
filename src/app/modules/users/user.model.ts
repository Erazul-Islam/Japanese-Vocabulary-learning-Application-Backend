import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./user.interface";
import bcrypt from 'bcrypt'
import config from "../../config";

const userSchema = new Schema<TUser, UserModel>(
    {
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['USER', 'ADMIN'],
            default : "USER"
        },
        email: {
            type: String,
            required: true
        },
        photo : {
            type : String,
            required : true
        }
    },
    {
        timestamps: true,
    },
);

userSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this; // doc
    // hashing password and save into DB

    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds),
    );

    next();
});

userSchema.statics.isUSerExistByCustomEmial = async function (email: string) {
    return await User.findOne({ email }).select('+password')
}

userSchema.statics.isPasswordMatched = async function (plainTextPass: string, hashedPass: string) {
    return await bcrypt.compare(plainTextPass, hashedPass)
}

export const User = model<TUser, UserModel>('japanese_user', userSchema);