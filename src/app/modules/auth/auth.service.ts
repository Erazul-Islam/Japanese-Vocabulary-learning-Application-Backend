import AppError from "../../errors/AppError";

import { TLoginUser } from "./auth.interface";
import config from "../../config";
import { createToken } from "./auth.utils";
import { User } from "../users/user.model";


const loginUser = async (payload: TLoginUser) => {

    const user = await User.isUSerExistByCustomEmial(payload.email)

    if (!user) {
        throw new AppError(404, 'This user is not found')
    }

    if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
        throw new AppError(401, 'Invalid Password')
    }

    const jwtPayload = {
        email: user.email,
        role: user.role
    }

    const accessToken = createToken(jwtPayload, config.jwtAccessSecret as string, config.JWT_ACCESS_EXPIRES_IN as string)
    return {
        accessToken,
        user
    }
}

export const authService = {
    loginUser
}