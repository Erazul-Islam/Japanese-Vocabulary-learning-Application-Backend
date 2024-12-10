import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";


export interface TUser {
    [_id: string]: any;
    name: string,
    email: string,
    password: string,
    photo : string
    createdAt: Date,
    updatedAt: Date,
    role: 'ADMIN' | 'USER'
};


export interface UserModel extends Model<TUser> {
    // myStaticMethod(): number
    isUSerExistByCustomEmial(email: string): Promise<TUser>
    isPasswordMatched(plainTextPass: string, hashedPass: string): Promise<boolean>
}

export type TUserRole = keyof typeof USER_ROLE