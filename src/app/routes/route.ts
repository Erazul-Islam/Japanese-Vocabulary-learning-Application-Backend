import { Router } from "express";

const router = Router();

const dumy = {
    
}

const moduleRoutes = [

    {
        path: '/auth',
        route: dumy,
    },

]

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;