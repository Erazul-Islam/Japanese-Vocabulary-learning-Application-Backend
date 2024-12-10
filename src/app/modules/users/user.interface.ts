import { USER_ROLE } from "./user.constant";


export interface TUser {
    [_id: string]: any;
    name: string,
    email: string,
    password: string,
    photo : string
    createdAt: Date,
    updatedAt: Date,
    role: 'admin' | 'user'
};

export type TUserRole = keyof typeof USER_ROLE