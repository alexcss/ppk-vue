<template>
   <nav class="ba-nav-mob">
      <button class="ba-nav-mob__close" @click="toggleMenu">
         <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
               d="M21.9997 7.33301L19.4147 9.91801L29.6447 20.1663H7.33301V23.833H29.6447L19.4147 34.0813L21.9997 36.6663L36.6663 21.9997L21.9997 7.33301Z"
               fill="#D7D7D7"
            />
         </svg>
      </button>

      <p class="ba-nav-mob__title">{{ title }}</p>

      <ul class="menu vertical">
         <li v-for="(link, i) in routes" :key="i">
            <router-link :to="link.path">{{ link.name }}</router-link>
         </li>
      </ul>
   </nav>
</template>

<script>
import { eventBus } from "@/main.js";
import { routes } from "@/router/index.js";

export default {
   data() {
      return {
         routes: routes,

         title: "Меню",
      };
   },
   methods: {
      toggleMenu() {
         eventBus.$emit("toggleMenu");
      },
   },
};
</script>

<style lang="scss">
.ba-nav-mob {
   padding: 124px 43px 43px;

   &__close {
      position: absolute;
      top: 43px;
      right: 16px;
      cursor: pointer;
      outline: none;
   }
   &__title {
      color: #d7d7d7;
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 60px;
   }
   a {
      font-size: 20px;
      font-weight: 500;
      color: #fff;
      position: relative;

      &:hover,
      &:focus {
         color: $primary-color;
      }

      &.router-link-exact-active {
         color: $primary-color;
      }
   }
   li + li {
      margin-top: 43px;
   }
}
</style>
