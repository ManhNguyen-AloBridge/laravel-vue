<script>
export default {
    data() {
        return {
            products: [],
        };
    },
    methods: {
        newProduct() {
            this.$router.push("/product/create");
        },
        async getProducts() {
            const response = await axios.get("/api/product/get-list");
            this.products = response.data.products;
        },
        ourImage(img) {
            return "/upload/" + img;
        },
        onEdit(id) {
            this.$router.push(`/product/edit/${id}`);
        },
        deleteProduct(id) {
            Swal.fire({
                title: "Are you sure ?",
                text: "You can't go back",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonText: "Cancel",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.value) {
                    axios
                        .get(`/api/product/delete/${id}`)
                        .then(() => {
                            Swal.fire(
                                "Delete",
                                "Product delete successfully",
                                "Success"
                            );

                            getProducts();
                        })
                        .catch((error) => {
                            Swal.fire(
                                "Failed!",
                                "There was something wrong.",
                                "Warning"
                            );
                        });
                }
            });
        },
    },
    mounted() {},
    async created() {
        await this.getProducts();
    },
};
</script>
<template>
    <div class="product-page">
        <div class="container">
            <div class="products__list table my-3">
                <div
                    class="
                        customers__titlebar
                        dflex
                        justify-content-between
                        align-items-center
                    "
                >
                    <div class="customers__titlebar--item">
                        <h1 class="my-1">Products</h1>
                    </div>
                    <div class="customers__titlebar--item">
                        <button
                            class="btn btn-secondary my-1"
                            @click="newProduct()"
                        >
                            Add Product
                        </button>
                    </div>
                </div>

                <div
                    class="table--heading mt-2 products__list__heading"
                    style="padding-top: 20px; background: #fff"
                >
                    <!-- <p class="table--heading--col1">&#32;</p> -->
                    <p class="table--heading--col1">image</p>
                    <p class="table--heading--col2">Product</p>
                    <p class="table--heading--col4">Type</p>
                    <p class="table--heading--col3">Inventory</p>
                    <!-- <p class="table--heading--col5">&#32;</p> -->
                    <p class="table--heading--col5">actions</p>
                </div>

                <!-- product 1 -->
                <div
                    class="table--items products__list__item"
                    v-for="item in products"
                    :key="item.id"
                    v-if="products.length > 0"
                >
                    <div class="products__list__item--imgWrapper">
                        <img
                            class="products__list__item--img"
                            :src="ourImage(item.photo)"
                            style="height: 40px"
                            v-if="item.photo"
                        />
                    </div>
                    <a href="# " class="table--items--col2">
                        {{ item.name }}
                    </a>
                    <p class="table--items--col2">{{ item.type }}</p>
                    <p class="table--items--col3">{{ item.quatity }}</p>
                    <div>
                        <button
                            class="btn-icon btn-icon-success"
                            @click="onEdit(item.id)"
                        >
                            <i class="fas fa-pencil-alt"></i>
                        </button>
                        <button
                            class="btn-icon btn-icon-danger"
                            @click="deleteProduct(item.id)"
                        >
                            <i class="far fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
                <div v-else class="table--items products__list__item">
                    <p>Product not found</p>
                </div>
            </div>
        </div>
    </div>
</template>
