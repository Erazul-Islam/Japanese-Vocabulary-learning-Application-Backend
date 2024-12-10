import { NextFunction, Request, Response } from "express";

import AppError from "../../errors/AppError";
import jwt, { JwtPayload } from 'jsonwebtoken'

import config from "../../config";
import catchAsync from "../../utiils/catchAsync";




const getValidation = () => {
    return catchAsync(async (req: Request, res: Response) => {
        console.log(req.headers.authorization)

        const token = req.headers.authorization

        if (!token) {
            throw new AppError(404, 'You have no token')
        }

        jwt.verify(token, config.jwtAccessSecret as string, function (err, decoded) {
            if (err) {
                throw new AppError(404, 'Token is not varified')
            }

            return decoded

        });


    }
    )

};

export default getValidation;