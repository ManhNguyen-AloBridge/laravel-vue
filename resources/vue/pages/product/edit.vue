<template>
    <div class="product-page">
        <div class="container">
            <div class="products__edit">
                <div
                    class="
                        products__create__titlebar
                        dflex
                        justify-content-between
                        align-items-center
                    "
                >
                    <div class="products__create__titlebar--item">
                        <h1 class="my-1">Edit Product</h1>
                    </div>
                    <div class="products__create__titlebar--item">
                        <button
                            class="btn btn-secondary ml-1"
                            @click="updateProduct()"
                        >
                            Save
                        </button>
                    </div>
                </div>

                <div class="products__create__cardWrapper mt-2">
                    <div class="products__create__main">
                        <div
                            class="
                                products__create__main--addInfo
                                card
                                py-2
                                px-2
                                bg-white
                            "
                        >
                            <p class="mb-1">Name</p>
                            <input
                                type="text"
                                class="input"
                                v-model="dataRecord.name"
                            />

                            <p class="my-1">Description (optional)</p>
                            <textarea
                                cols="10"
                                rows="5"
                                class="textarea"
                                v-model="dataRecord.description"
                            >
                            </textarea>

                            <div
                                class="
                                    products__create__main--media--images
                                    mt-2
                                "
                            >
                                <ul
                                    class="
                                        products__create__main--media--images--list
                                        list-unstyled
                                    "
                                >
                                    <li
                                        class="
                                            products__create__main--media--images--item
                                        "
                                    >
                                        <div
                                            class="
                                                products__create__main--media--images--item--imgWrapper
                                            "
                                        >
                                            <img
                                                class="
                                                    products__create__main--media--images--item--img
                                                "
                                                :src="getPhoto()"
                                            />
                                        </div>
                                    </li>

                                    <!-- upload image small -->
                                    <li
                                        class="
                                            products__create__main--media--images--item
                                        "
                                    >
                                        <form
                                            class="
                                                products__create__main--media--images--item--form
                                            "
                                        >
                                            <label
                                                class="
                                                    products__create__main--media--images--item--form--label
                                                "
                                                for="myfile"
                                                >Add Image</label
                                            >
                                            <input
                                                class="
                                                    products__create__main--media--images--item--form--input
                                                "
                                                type="file"
                                                id="myfile"
                                                @change="updatePhoto"
                                            />
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="products__create__sidebar">
                        <!-- Product Organization -->
                        <div class="card py-2 px-2 bg-white">
                            <!-- Product unit -->
                            <div class="my-3">
                                <p>Product type</p>
                                <input
                                    type="text"
                                    class="input"
                                    v-model="dataRecord.type"
                                />
                            </div>
                            <hr />

                            <!-- Product invrntory -->
                            <div class="my-3">
                                <p>Inventory</p>
                                <input
                                    type="text"
                                    class="input"
                                    v-model="dataRecord.quantity"
                                />
                            </div>
                            <hr />

                            <!-- Product Price -->
                            <div class="my-3">
                                <p>Price</p>
                                <input
                                    type="text"
                                    class="input"
                                    v-model="dataRecord.price"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Footer Bar -->
                <div
                    class="
                        dflex
                        justify-content-between
                        align-items-center
                        my-3
                    "
                >
                    <p></p>
                    <button class="btn btn-secondary" @click="updateProduct()">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            dataRecord: {
                name: "",
                description: "",
                photo: "",
                type: "",
                quantity: "",
                price: "",
            },
        };
    },
    methods: {
        async getsingleProduct() {
            let response = await axios.get(`/api/product/${this.id}`);

            console.log(response.data.product);

            this.dataRecord = response.data.product;
        },
        getPhoto() {
            let photo = "/upload/image.png";
            if (this.dataRecord.photo) {
                if (this.dataRecord.photo.indexOf("base64") != -1) {
                    photo = this.dataRecord.photo;
                } else {
                    photo = "/upload/" + this.dataRecord.photo;
                }
            }

            return photo;
        },
        updatePhoto(e) {
            let file = e.target.files[0];
            let reader = new FileReader();
            let limit = 1024 * 1024 * 2;
            if (file["size"] > limit) {
                return false;
            }

            reader.onloadend = (file) => {
                this.dataRecord.value.photo = reader.result;
            };

            reader.readAsDataURL(file);
        },
        updateProduct() {
            console.log("this.dataRecord");
            console.log(this.dataRecord);

            axios
                .post(`/api/product/${this.id}`, this.dataRecord)
                .then((response) => {
                    this.$router.push("/");

                    toast.fire({
                        icon: "success",
                        title: "Product update successfully!",
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    async created() {
        await this.getsingleProduct();
    },
};
</script>

<style></style>
