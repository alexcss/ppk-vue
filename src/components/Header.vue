<template>
   <header class="ba-header flex-container align-justify align-middle">
      <router-link class="ba-logo" to="/">
         <img src="@/assets/logo.png" alt="ППК">
      </router-link>

      <v-nav />
   </header>
</template>

<script>
import Nav from "@/components/Nav";

export default {
   name: "Header",
   components: {
      "v-nav": Nav,
   },
};
</script>

<style lang="scss">

.ba-logo{
   width: 54px;
   @include breakpoint(medium){
      width: 77px;   
   }
}
.ba-header {

   position: absolute;
   top: 0;
   right: 0;
   left: 0;
   z-index: 1;

   padding: 49px 15px 0;

   @include breakpoint(medium){
      padding: 17px 47px;   
   }
   
}
</style>
