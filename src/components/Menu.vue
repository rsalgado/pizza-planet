<template>
    <div class="row">
        <div class="col-sm-12 col-md-6">
            <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Add to basket</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems">
                    <tr>
                        <td><strong>{{item.name}}</strong></td>
                    </tr>
                    <tr v-for="option in item.options">
                        <td>{{option.size}}</td>
                        <td>{{option.price}}</td>
                        <td>
                            <button class="btn btn-sm btn-outline-success" 
                                    type="button"
                                    @click="addToBasket(item, option)">+</button>
                        </td>
                    </tr>
                </tbody>
            </table>            
        </div>

        <!-- Shopping basket -->
        <div class="col-sm-12 col-md-6">
            <div v-if="basket.length > 0">
                <table class="table">
                    <thead class="thead-default">
                        <th>Quantity</th>
                        <th>Item</th>
                        <th>Price</th>
                    </thead>
                    <tbody v-for="item in basket">
                        <tr>
                            <td>
                                <button class="btn btn-sm"
                                        type="button"
                                        @click="decreaseQuantity(item)">-</button>
                                <span>{{ item.quantity }}</span>
                                <button class="btn btn-sm" 
                                        type="button"
                                        @click="increaseQuantity(item)">+</button>
                            </td>
                            <td>{{ item.name }} {{ item.size }}"</td>
                            <td>{{ item.price * item.quantity }}</td>
                        </tr>
                    </tbody>
                </table>
                <p>Order total: {{ total }}</p>
                <button class="btn btn-success btn-block" @click="addNewOrder">Place Order</button>
            </div>

            <!-- Empty basket message -->
            <div v-else>
                <p>{{ basketText }}</p>
            </div>
        </div>
    </div>
</template>


<script type="text/javascript">
    /* TODO: 
        Question: What do I use `export default` for? 
        Question: Why does data have to be a function?
        Question: Why is `getMenuItems` returning a getter function itself instead of its evaluation?
        Question: How does `...mapGetters` work?
    */

    import { mapGetters } from 'vuex';
    import { dbOrdersRef } from '../firebaseConfig.js';

    export default {
        data() {
            return {
                basket: [],
                basketText: "Your basket is empty!"
            };
        },

        computed: {
            ...mapGetters([
                "getMenuItems"
            ]),

            total() {
                return this.basket.reduce((total, item) =>  total + item.quantity * item.price, 0);
            }
        },

        methods: {
            addToBasket(item, options) {
                this.basket.push({
                    name: item.name,
                    price: options.price,
                    size: options.size,
                    quantity: 1
                });
            },

            removeFromBasket(item) {
                this.basket.splice(this.basket.indexOf(item), 1);
            },

            increaseQuantity(item) {
                item.quantity++;
            },

            decreaseQuantity(item) {
                item.quantity--;
                if (item.quantity === 0)
                    this.removeFromBasket(item);
            },

            addNewOrder() {
                //this.$store.commit("addOrder", this.basket);
                dbOrdersRef.push(this.basket);
                this.basket = [];
                this.basketText = "Thank you, your order has been placed :)";
            }
        }
    }
</script>