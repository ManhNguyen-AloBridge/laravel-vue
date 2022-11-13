import roomShow from "../pages/room/show.vue";

const resource = "room";

export default [
    {
        path: `/${resource}/:id`,
        name: "room_detail",
        component: roomShow,
    },
];
