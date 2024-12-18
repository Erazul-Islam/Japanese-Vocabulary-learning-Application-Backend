import { TUser } from "./user.interface";
import { User } from "./user.model";
import jwt from 'jsonwebtoken'
import config from "../../config";


const signUp = async (payload: TUser) => {
    const result = await User.create(payload)

    return result
}

const getAllProfileFromDB = async () => {
    const result = await User.find()
    return result
}

const getMyProfile = async (token: string) => {
    try {

        const decoded = jwt.verify(token, config.jwtAccessSecret as string)

        if (typeof decoded === 'string' || !('email' in decoded)) {
            throw new Error('Invalid token structure')
        }

        const userEmail = decoded.email

        const user = await User.findOne({ email: userEmail })

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    } catch (error) {
        throw new Error('Invalid token');
    }
};

const getUpdatedUserRoleIntoAdmin = async (id: string) => {
    try {

        const user = await User.findById(id)

        console.log('user id',user)

        if (!user) {
            throw new Error('User not found');
        }

        console.log(user.role)
        
        const updatedProduct = await User.findOneAndUpdate({ _id: id }, { role: 'ADMIN' }, { new: true })

        return updatedProduct
    } catch (error) {
        console.log(error)
    }
}
const getUpdatedUserRoleIntoUser = async (id: string) => {
    try {

        const user = await User.findById(id);

        if (!user) {
            throw new Error('User not found');
        }
        
        const updatedProduct = await User.findOneAndUpdate({ _id: id }, { role: 'USER' }, { new: true })

        return updatedProduct
    } catch (error) {
        console.log(error)
    }
}

const getUpdatedUser = async (token: string, payload: Partial<TUser>) => {
    try {
        const decoded = jwt.verify(token, config.jwtAccessSecret as string)

        if (typeof decoded === 'string' || !('email' in decoded)) {
            throw new Error('Invalid token structure');
        }

        const userEmail = decoded.email
        const updatedUser = await User.findOneAndUpdate({ email: userEmail }, payload, { new: true })

        return updatedUser
    } catch (error) {
        console.log(error)
    }
}

const deletedFromDB = async (id: string) => {
    const result = await User.deleteOne({ _id: id })
    return result
}

export const userService = {
    signUp,
    getMyProfile,
    getUpdatedUser,
    getAllProfileFromDB,
    deletedFromDB,
    getUpdatedUserRoleIntoAdmin,
    getUpdatedUserRoleIntoUser
}