"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/users/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const lession_route_1 = require("../modules/lessons/lession.route");
const vocabulary_route_1 = require("../modules/vocabulary/vocabulary.route");
const tutorial_route_1 = require("../modules/tutorial/tutorial.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/auth',
        route: user_route_1.userRoute,
    },
    {
        path: '/auth',
        route: auth_route_1.authRoute
    },
    {
        path: '/lession',
        route: lession_route_1.lessionRoute
    },
    {
        path: '/vocabulary',
        route: vocabulary_route_1.vocabularyRoute
    },
    {
        path: '/tutorial',
        route: tutorial_route_1.tutorialRoute
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
