<template>
  <div id="app">
    <!-- Header component (comes from `ppHeader`) -->
    <div class="container">
      <pp-header></pp-header>
    </div>

    <!-- Home component (comes from `ppHome`) -->
    <div class="container">
      <pp-admin></pp-admin>
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
import Admin from './components/Admin.vue';


export default {
  components: {
    ppHeader: Header,
    ppFooter: Footer,
    ppHome: Home,
    ppMenu: Menu,
    ppAdmin: Admin,
  }
}
</script>

<style>

</style>
