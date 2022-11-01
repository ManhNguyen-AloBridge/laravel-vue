<template>
    <div class="dashboard-page">
        <h1>Hello World</h1>
        <div class="container-fluid row m-0">
            <div class="col-3">
                <div
                    class="bg-danger room"
                    @mouseup="showDetailInfo"
                    @mouseleave="hideDetailInfo"
                >
                    <div class="room__image text-center">
                        <img
                            src="/upload/1665998347.png"
                            alt=""
                            class="room__img"
                        />
                    </div>
                    <div class="room__info text-center pt-3">
                        <p class="room__number">1</p>
                        <p class="room__name-guest">AAAA AAAA AAAA</p>
                    </div>

                    <item-room-detail
                        class="room__detail-info"
                        :is-show="isShow"
                    >
                    </item-room-detail>

                    <!-- <div class="room__detail-info" v-show="isShow">
                        <div class="info row m-0">
                            <div class="col-5">
                                <p>text default</p>
                            </div>
                            <div class="col-7">
                                <p>text default</p>
                            </div>
                        </div>
                        <div class="info row m-0">
                            <div class="col-5">
                                <p>text default</p>
                            </div>
                            <div class="col-7">
                                <p>text default</p>
                            </div>
                        </div>
                        <div class="info row m-0">
                            <div class="col-5">
                                <p>text default</p>
                            </div>
                            <div class="col-7">
                                <p>text default</p>
                            </div>
                        </div>
                        <div class="info row m-0">
                            <div class="col-5">
                                <p>text default</p>
                            </div>
                            <div class="col-7">
                                <p>text default</p>
                            </div>
                        </div>
                        <div class="info row m-0">
                            <div class="col-5">
                                <p>text default</p>
                            </div>
                            <div class="col-7">
                                <p>text default</p>
                            </div>
                        </div>
                        <div class="info row m-0">
                            <div class="col-5">
                                <p>text default</p>
                            </div>
                            <div class="col-7">
                                <p>text default</p>
                            </div>
                        </div>
                        <div class="info row m-0">
                            <div class="col-5">
                                <p>text default</p>
                            </div>
                            <div class="col-7">
                                <p>text default</p>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ItemRoomDetail from "../components/dashboard/item-room-detail-info.vue";

export default {
    components: {
        ItemRoomDetail,
    },
    data() {
        return {
            isShow: false,
        };
    },
    methods: {
        showDetailInfo() {
            this.isShow = !this.isShow;
        },
        hideDetailInfo() {
            this.isShow = !this.isShow;
        },
    },
};
</script>

<style></style>
