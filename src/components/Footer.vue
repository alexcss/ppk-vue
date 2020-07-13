<template>
   <footer class="ba-footer">
      <div class="row">
         <div class="column small-6">
            <h5>{{col1.title}}</h5>
            <ul class="menu vertical" v-if="routes.length">
               <li v-for="(link, i) in routes" :key="i">
                  <router-link :to="link.path">{{link.name}}</router-link>
               </li>
            </ul>
         </div>
         <!-- /.column -->
      </div>
      <!-- /.row -->

      <svg>
         <defs>
            <symbol
            id="icon-scroll"
               viewBox="0 0 24 24"
               fill="none"

            >
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
import {routes} from "@/router/index.js";
console.log(routes);

export default {
   name: "Footer",
   data() {
      return{
         routes : routes,
         desc : "Ми вам дуже раді!\nЧекаємо у нашому навчальному закладі\nППК НТУ ХПІ!",
         col1 : {
            title: "Колледж",
            menu : null
         },
         col2 : {
            title: "Корисне",
            menu : null
         }
      }
   }
};
</script>

<style></style>
