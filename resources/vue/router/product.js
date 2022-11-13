import productIndex from "../pages/product/index.vue";
import productCreate from "../pages/product/create.vue";
import productEdit from "../pages/product/edit.vue";

const resource = "product";

export default [
    {
        path: `/${resource}/`,
        component: productIndex,
    },
    {
        path: `/${resource}/create`,
        component: productCreate,
    },
    {
        path: `/${resource}/edit/:id`,
        component: productEdit,
        props: true,
    },
];
