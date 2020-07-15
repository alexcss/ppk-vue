<template>
   <footer class="ba-footer">
      <div class="row">
         <div class="column small-6 medium-4 large-order-1 large-offset-3 large-2"> 
            <h4>{{ col1.title }}</h4>
            <ul class="menu vertical ba-footer-menu" v-if="routes.length">
               <li v-for="(link, i) in routes" :key="i">
                  <router-link :to="link.path">{{ link.name }}</router-link>
               </li>
            </ul>
         </div>
         <!-- /.column -->
         <div class="column small-6 medium-4 large-order-1 large-2">
            <h4>{{ col2.title }}</h4>
            <ul class="menu vertical ba-footer-menu" v-if="routes.length">
               <li v-for="(link, i) in routes" :key="i">
                  <router-link :to="link.path">{{ link.name }}</router-link>
               </li>
            </ul>
         </div>
         <!-- /.column -->
         <div class="column small-6 show-for-medium medium-4 large-order-1 large-3">
            <h4>{{ col3.title }}</h4>
            <ul class="menu vertical ba-footer-menu" v-if="col3.menu.length">
               <li v-for="(link, i) in col3.menu" :key="i">
                  <a :href="`tel:${link}`">{{ link }}</a>
               </li>
            </ul>
         </div>
         <!-- /.column -->
         <div class="text-center column small-12 large-2">
            <router-link class="ba-footer-logo" to="/">
               <img src="@/assets/logo.png" alt="ППК" />
            </router-link>
            <p class="ba-footer__desc" :inner-html.prop="desc | tobr"></p>
         </div>
         <!-- /.column -->
      </div>
      <!-- /.row -->
      <p class="ba-copy text-right">
         {{ copy }}
      </p>
      <svg hidden>
         <defs>
            <symbol id="icon-scroll" viewBox="0 0 24 24" fill="none">
               <path
                  d="M13 1.06995V8.99995H20C20 4.91995 16.95 1.55995 13 1.06995ZM4 14.9999C4 19.4199 7.58 22.9999 12 22.9999C16.42 22.9999 20 19.4199 20 14.9999V10.9999H4V14.9999ZM11 1.06995C7.05 1.55995 4 4.91995 4 8.99995H11V1.06995Z"
                  fill="#33D930"
               />
            </symbol>
         </defs>
      </svg>
   </footer>
</template>

<script>
import { routes } from "@/router/index.js";

export default {
   name: "Footer",
   filters: {
      tobr: function(value) {
         return value.replace(/(?:\r\n|\r|\n)/g, "<br>");
      },
   },
   data() {
      return {
         routes: routes,
         desc: "Ми вам дуже раді!\nЧекаємо у нашому навчальному закладі\nППК НТУ ХПІ!",
         copy: "(с) Copyright 2020",
         col1: {
            title: "Колледж",
            menu: null,
         },
         col2: {
            title: "Корисне",
            menu: null,
         },
         col3: {
            title: "Зворотній зв’язок",
            menu: ["+380 030 383 83", "+380 898 999 34"],
         },
      };
   },
};
</script>

<style lang="scss">
.ba-footer {
   background: $black;
   color: #fff;
   padding-top: 58px;
   @include breakpoint(medium){
      padding-top: 50px;
   }
   a {
      color: #fff;
      &:hover,
      &:focus {
         color: $primary-color;
      }
   }

   &__desc {
      font-size: 12px;
      max-width: 131px;
      margin: 0 auto 20px;
      line-height: 1.2;
   }

   .menu {
      margin-bottom: 48px;
      font-size: 14px;
      @include breakpoint(medium){
         font-size: 16px;
      }
      li + li{
         margin-top: 9px;
      }
   }
}
.ba-footer-logo {
   width: 67px;
   display: inline-block;
   margin-bottom: 14px;
   @include breakpoint(medium) {
      width: 90px;
   }
}
.ba-copy {
   color: #d7d7d7;
   font-size: 10px;
   padding:  0 13px 13px;
   margin: 0;
   @include breakpoint(medium) {
      font-size: 12px;
      padding: 26px 40px;
   }
}
</style>
