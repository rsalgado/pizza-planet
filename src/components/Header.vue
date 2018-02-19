<template>
    <header class="row">
        <nav class="navbar navbar-toggleable-md navbar-light">
            <a class="navbar-brand" href="/">PIZZA PLANET</a>
            <ul class="navbar-nav">
                <router-link to="/" tag="li"> <a class="nav-link">Home</a> </router-link>
                <router-link to="/menu" tag="li"> <a class="nav-link" href="">Menu</a> </router-link>
            </ul>
        </nav>
    </header>
</template>

<style type="text/css">
    header {
        margin-bottom: 20px;
    }

    .navbar-brand {
        font-size: 1.5em;
    }
</style>