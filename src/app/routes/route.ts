import { Router } from "express";
import { userRoute } from "../modules/users/user.route";
import { authRoute } from "../modules/auth/auth.route";
import { lessionRoute } from "../modules/lessons/lession.route";

const router = Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: userRoute,
    },
    {
        path : '/auth',
        route : authRoute
    },
    {
        path : '/lession',
        route : lessionRoute
    }

]

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;