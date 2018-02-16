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
                                <button class="btn btn-sm" type="button">-</button>
                                <span>{{ item.quantity }}</span>
                                <button class="btn btn-sm" type="button">+</button>
                            </td>
                            <td>{{ item.name }} {{ item.size }}"</td>
                            <td>{{ item.price * item.quantity }}</td>
                        </tr>
                    </tbody>
                </table>
                <p>Order total: </p>
                <button class="btn btn-success btn-block">Place Order</button>
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
    */
    export default {
        data() {
            return {
                getMenuItems: {
                    1: {
                        'name': 'Margherita',
                        'description': 'A delicious tomato based pizza topped with mozzarella',
                        'options': [{
                            'size': 9,
                            'price': 6.95
                        }, {
                            'size': 12,
                            'price': 10.95
                        }]
                    },
                    2: {
                        'name': 'Pepperoni',
                        'description': 'A delicious tomato based pizza topped with mozzarella and pepperoni',
                        'options': [{
                            'size': 9,
                            'price': 7.95
                        }, {
                            'size': 12,
                            'price': 12.95
                        }]
                    },
                    3: {
                        'name': 'Ham and Pineapple',
                        'description': 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
                        'options': [{
                            'size': 9,
                            'price': 7.95
                        }, {
                            'size': 12,
                            'price': 12.95
                        }]
                    }
                },
                basket: [],
                basketText: "Your basket is empty!"
            };
        },

        methods: {
            addToBasket(item, options) {
                this.basket.push({
                    name: item.name,
                    price: options.price,
                    size: options.size,
                    quantity: 1
                });
            }
        }
    }
</script>