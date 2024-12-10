import { NextFunction, Request, Response } from 'express';

import AppError from '../../errors/AppError';

import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../../config';

import catchAsync from '../../utiils/catchAsync';
import { TUserRole } from '../users/user.interface';


const authValidation = (...requiredRoles: TUserRole[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.headers.authorization)

        const token = req.headers.authorization?.split(' ')[1]

        if (!token) {
            throw new AppError(404, 'You have no token')
        }

        jwt.verify(token, config.jwtAccessSecret as string, function (err: any, decoded: any) {
            if (err) {
                throw new AppError(404, 'Token is not varified')
            }

            const role = (decoded as JwtPayload).role

            if (requiredRoles && !requiredRoles.includes(role)) {
                throw new AppError(404, 'You have no access to this route')
            }

            req.user = decoded as JwtPayload
            next()

        });
    }
    )

};

export default authValidation;