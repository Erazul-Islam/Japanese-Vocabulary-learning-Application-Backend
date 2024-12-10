import catchAsync from "../../utiils/catchAsync";
import { authService } from "./auth.service";

const loginUser = catchAsync(async (req, res) => {
    const result = await authService.loginUser(req.body);

    const User = {
        _id: result.user._id,
        name: result.user.name,
        email: result.user.email,
        photo: result.user.photo,
        role: result.user.role,
    };

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "User logged in successfully",
        token: result.accessToken,
        data: User
    })
})

export const authController = {
    loginUser
}