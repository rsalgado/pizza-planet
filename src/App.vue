<template>
  <div id="app">
    <!-- Header component (comes from `ppHeader`) -->
    <div class="container">
      <pp-header></pp-header>
    </div>

    <!-- Home component (comes from `ppHome`) -->
    <div class="container">
      <router-view></router-view>
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

export default {
  components: {
    ppHeader: Header,
    ppFooter: Footer
  }
}
</script>

<style>

</style>
