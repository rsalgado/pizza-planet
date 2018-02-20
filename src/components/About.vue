<template>
    <div>        
        <p>Click the links below for more info:</p>
        <nav class="navbar navbar-toggleable-md navbar-light">
            <ul class="navbar-nav">
                <router-link to="/history" tag="li"> <a class="nav-link">Our History</a> </router-link>
                <router-link to="/contact" tag="li"> <a class="nav-link">Contact Us</a> </router-link>
                <router-link to="/ordering-guide" tag="li"> <a class="nav-link">Ordering Guide</a> </router-link>
                <router-link to="/delivery" tag="li"> <a class="nav-link">Delivery</a> </router-link>
            </ul>
        </nav>

        <router-view></router-view>
    </div>
</template>