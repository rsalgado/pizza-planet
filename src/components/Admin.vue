<template>
    <div>
        <div class="row">
            <!-- New Pizza component -->
            <div class="col-sm-12 col-md-6">
                <pp-new-pizza></pp-new-pizza>
            </div>

            <!-- Menu items -->
            <div class="col-sm-12 col-md-6">
                <h3>Menu:</h3>
                <table class="table table-hover">
                    <thead class="thead-default">
                        <tr>
                            <th>Item</th>
                            <th>Remove from Menu</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in getMenuItems" :key="item['.key']">
                        <tr>
                            <td>{{ item.name }}</td>
                            <td><button class="btn btn-outline-danger btn-sm"
                                        @click="removeMenuItem(item['.key'])">x</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>        

        <div class="row">
            <div class="col-sm-12">
                <h3>Current orders: {{ numberOfOrders }}</h3>
                <table class="table table-sm" v-for="(orders, index) in getOrders" :key="orders['.key']">
                    <thead class="thead-default">
                        <tr>
                            <th>Item</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <div class="order-number">
                            <strong><em>Order Number: {{ index+1 }}</em></strong>
                            <button class="btn btn-outline-danger btn-sm"
                                    @click="removeOrder(orders['.key'])">x</button>
                        </div>

                        <tr v-for="orderItems in orders['.value']">
                            <td>{{ orderItems.name }}</td>
                            <td>{{ orderItems.size }}</td>
                            <td>{{ orderItems.quantity }}</td>
                            <td>{{ orderItems.price }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <hr/>
        <div class="row">
            <div class="col-sm-12 col-lg-6">
                <pp-login></pp-login>
            </div>
        </div>
    </div>
</template>


<script type="text/javascript">
    import NewPizza from './NewPizza.vue';
    import Login from './Login.vue';
    import { mapGetters } from 'vuex';
    import { dbMenuRef, dbOrdersRef } from '../firebaseConfig.js';

    export default {
        components: {
            ppNewPizza: NewPizza,
            ppLogin: Login
        },

        computed: {
            ...mapGetters([
                "numberOfOrders",
                "getMenuItems",
                "getOrders",
            ]),
        },

        methods: {
            removeMenuItem(itemKey) {
                dbMenuRef.child(itemKey).remove();
            },

            removeOrder(orderKey) {
                dbOrdersRef.child(orderKey).remove();
            }
        },

        beforeRouteLeave: (to, from, next) => {
            if (confirm("Have you remembered to log out?") == true) {
                next();
            }
            else {
                next(false);
            }
        },
    }
</script>