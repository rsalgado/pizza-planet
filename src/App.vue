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

    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="ordering-guide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
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
import { dbMenuRef, dbOrdersRef } from './firebaseConfig.js';

export default {
  components: {
    ppHeader: Header,
    ppFooter: Footer
  },

  created() {
    this.$store.dispatch("setMenuRef", dbMenuRef);
    this.$store.dispatch("setOrdersRef", dbOrdersRef);
  }
}
</script>

<style>

</style>
