<template>
    <div class="room__detail-info" v-show="isShow">
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
    </div>
</template>

<script>
export default {
    props: {
        isShow: {
            type: Boolean,
            default: false,
        },
        idItem: {
            type: String,
            default: "",
        },
    },
    data() {
        return {};
    },
};
</script>

<style></style>
