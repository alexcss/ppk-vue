<template>
  <div id="app">
    <v-header />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    "v-header": Header,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/main";
</style>
