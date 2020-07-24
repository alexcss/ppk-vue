<template>
   <nav class="ba-nav">
      <ul class="menu show-for-large">
         <li v-for="(link, i) in routes" :key="i">
            <router-link :to="link.path">{{ link.name }}</router-link>
         </li>
      </ul>

      <button class="menu-icon hide-for-large" v-on:click="toggleMenu"></button>
   </nav>
</template>

<script>
import { eventBus } from '@/main.js';
import { routes } from "@/router/index.js";

export default {
   name: "Nav",
   data() {
      return {
         routes: routes,
         isMenuOpen: true,
      };
   },
   methods:{
      toggleMenu(){      
          
         eventBus.$emit('toggleMenu');
      }
   }
};
</script>

<style lang="scss">
.ba-nav {
   .menu-icon {
      width: 33px;
      height: 22px;

      &:after {
         height: 3px;
      }
   }

   a {
      font-size: 16px;
      font-weight: 500;
      color: #fff;
      position: relative;

      &:hover,
      &:focus {
         color: $primary-color;
      }

      &.router-link-exact-active {
         &:after {
            content: "";
            position: absolute;
            height: 3px;
            left: 0;
            right: -15px;
            top: 100%;
            margin-top: 7px;
            background: $primary-color;
         }
      }
   }
   li + li {
      margin-left: 54px;
   }
}
</style>
