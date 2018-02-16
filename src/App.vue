<template>
  <div id="app">
    <!-- Header component (comes from `ppHeader`) -->
    <div class="container">
      <pp-header></pp-header>
    </div>

    <!-- Home component (comes from `ppHome`) -->
    <div class="container">
      <pp-menu></pp-menu>
    </div>

    <!-- Footer component (comes from `ppFooter`) -->
    <div class="container">
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Home from './components/Home.vue';
import Menu from './components/Menu.vue';

export default {
  components: {
    ppHeader: Header,
    ppFooter: Footer,
    ppHome: Home,
    ppMenu: Menu
  }
}
</script>

<style>

</style>
