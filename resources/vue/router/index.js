import { createRouter, createWebHistory } from "vue-router";

import product from "./product.js";
import room from "./room.js";

import dashboard from "../pages/dashboard.vue";
import notFound from "../notFound.vue";

const routes = [
    ...product,
    ...room,
    {
        path: "/",
        component: dashboard,
    },
    {
        path: "/:pathMath(.*)*",
        component: notFound,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;
