<template>
   <section class="ba-section" :class="`ba-section--${type}`">
      <div class="row column ba-container">
         <h2 class="ba-section-title">{{ section.title }}</h2>

         <SpecItem :type="type == 'light' ? 'dark' : 'light'" v-for="(item, index) in specs" v-bind:item="item" :key="index" />

         <div class="text-center ba-load-more-wrap">
            <button v-if="page < specsData.length" class="ba-button ba-button--fill" @click="loadMore">
               Показати більше
            </button>
         </div>
      </div>
      <!-- /.ba-container -->
   </section>
</template>

<script>
import SpecItem from "@/components/SpecItem.vue";

export default {
   props: {
      section: {
         default: null,
      },
      type: {
         default: 'light'
      },
   },
   data() {
      return {
         specs: [],
         specsData: [],
         page: 3,
         perPage: 3,
      };
   },
   components: {
      SpecItem,
   },
   methods: {
      loadMore() {
         console.log("more");
         this.page += this.perPage;
         this.showItem();
      },
      showItem() {
         this.specs = this.specsData.slice(0, this.page);
      },
   },
   created() {
      fetch("data/specs.json")
         .then((result) => result.json())
         .then((data) => {
            this.specsData = data;
            this.showItem();
         });
   },
};
</script>

<style lang="scss">
.ba-load-more-wrap {
   padding-top: 39px;
   @include breakpoint(medium) {
      padding-top: 66px;
   }
}
.ba-section--dark {
   background: $black;
   color: #fff;
   padding: 35px 0 52px;
}
</style>
