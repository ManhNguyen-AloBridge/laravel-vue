import { createRouter, createWebHistory } from "vue-router";

import productIndex from "../components/products/index.vue";
import productCreate from "../components/products/create.vue";
import productEdit from "../components/products/edit.vue";

import notFound from "../notFound.vue";

const routes = [
    {
        path: "/1",
        component: productIndex,
    },
    {
        path: "/product1/create",
        component: productCreate,
    },
    {
        path: "/product1/edit/:id",
        component: productEdit,
        props: true,
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
