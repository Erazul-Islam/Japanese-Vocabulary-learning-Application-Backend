import { Router } from "express";
import { userRoute } from "../modules/users/user.route";
import { authRoute } from "../modules/auth/auth.route";
import { lessionRoute } from "../modules/lessons/lession.route";
import { vocabularyRoute } from "../modules/vocabulary/vocabulary.route";
import { tutorialRoute } from "../modules/tutorial/tutorial.route";

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
    },
    {
        path : '/vocabulary',
        route : vocabularyRoute
    },
    {
        path : '/tutorial',
        route : tutorialRoute
    }

]

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;