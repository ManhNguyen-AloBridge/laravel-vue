<template>
    <div class="product-page">
        <div class="products__create">
            <div
                class="
                    products__create__titlebar
                    dflex
                    justify-content-between
                    align-items-center
                "
            >
                <div class="products__create__titlebar--item">
                    <h1 class="my-1">Add Product</h1>
                </div>
                <div class="products__create__titlebar--item">
                    <button
                        class="btn btn-secondary ml-1"
                        @click="saveProduct()"
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
                            v-model="formData.name"
                        />

                        <p class="my-1">Description (optional)</p>
                        <textarea
                            cols="10"
                            rows="5"
                            class="textarea"
                            v-model="formData.description"
                        ></textarea>

                        <div class="products__create__main--media--images mt-2">
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
                                            alt=""
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
                                v-model="formData.type"
                            />
                        </div>
                        <hr />

                        <!-- Product invrntory -->
                        <div class="my-3">
                            <p>Inventory</p>
                            <input
                                type="text"
                                class="input"
                                v-model="formData.quatity"
                            />
                        </div>
                        <hr />

                        <!-- Product Price -->
                        <div class="my-3">
                            <p>Price</p>
                            <input
                                type="text"
                                class="input"
                                v-model="formData.price"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer Bar -->
            <div class="dflex justify-content-between align-items-center my-3">
                <p></p>
                <button class="btn btn-secondary" @click="saveProduct()">
                    Save
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            formData: {
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
        getPhoto() {
            let photo = "/upload/image.png";
            if (this.formData.photo) {
                if (this.formData.photo.indexOf("base64") != -1) {
                    photo = formData.photo;
                } else {
                    photo = "/upload/" + this.formData.photo;
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
                this.formData.photo = reader.result;
            };

            reader.readAsDataURL(file);
        },
        saveProduct() {
            const form = new FormData();
            form.append("name", this.formData.name);
            form.append("description", this.formData.description);
            form.append("photo", this.formData.photo);
            form.append("type", this.formData.type);
            form.append("quantity", this.formData.quantity);
            form.append("price", this.formData.price);

            axios
                .post("/api/product/create", formData)
                .then((response) => {
                    (this.formData.name = ""),
                        (this.formData.description = ""),
                        (this.formData.photo = ""),
                        (this.formData.type = ""),
                        (this.formData.quantity = ""),
                        (this.formData.price = ""),
                        this.$router.push("/");

                    toast.fire({
                        icon: "success",
                        title: "Product add successfully!",
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>

<style></style>
