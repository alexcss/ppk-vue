<template>
   <section class="ba-section ba-section--dark">
      <div class="row column ba-container">
         <h2 class="ba-section-title">{{ section.title }}</h2>

         <SpecItem v-for="(item, index) in specs" v-bind:item="item" :key="index" />

      </div>
      <!-- /.ba-container -->
   </section>
</template>

<script>
import SpecItem from "@/components/SpecItem.vue";

export default {
   props: ["section"],
   data() {
      return {
         specs: null,
      };
   },
   components:{
     SpecItem 
   },
   created() {
      fetch("data/specs.json")
         .then((result) => result.json())
         .then((data) => {
            console.log(data);
            
            this.specs = data;
         });
   },
};
</script>

<style lang="scss" >
.ba-section--dark {
   background: $black;
   color: #fff;
   padding: 35px 0 52px;
}
.ba-specs{
   @include breakpoint(medium){
      display: flex;
   }
   & + &{
      margin-top: 22px;
      @include breakpoint(medium){
         margin-top: 60px;
      }
   }
   &__img{
      width: 100%;
      @include breakpoint(medium){
         width: 33.3%;
      }
   }
   &__title{
      font-size: 20px;
      font-weight: 500;
      color: $black;
      margin-bottom: 5px;
      @include breakpoint(medium){
         font-size: 28px;
      }
      @include breakpoint(large){
         margin-bottom: 49px;
      }
   }
   &__body{
      background: #fff;
      color: $black;
      color: #646464;
      padding: 28px 16px;
      @include breakpoint(medium){
         padding: 38px 76px 38px 53px;

         display: flex;
         flex-direction: column;
      }
   }
   &__footer{
      display: flex;
      flex-direction: column;
      align-items: center;

      @include breakpoint(medium){
         flex-direction: row;
         justify-content: space-between;
         flex-wrap: wrap;

         margin-top: auto;
      }
      @include breakpoint(large){
         flex-wrap: nowrap;
      }
   }
   &__duration{
      font-size: 12px;
      padding: 15px 0 0;
      margin-bottom: 12px;
      @include breakpoint(medium){
         padding: 0 40px 0 21px;
         margin: 0;
      }
   }
   &__price{
      color: $black;
      font-size: 12px;
      white-space: nowrap; 
      b{
         color: $primary-color;
         font-size: 24px;

         @include breakpoint(medium){
            font-size: 26px;
         }
      }
   }

   @include breakpoint(medium only){

      &__duration{
         order: -1;
         padding: 15px 20px 15px 0;
         margin-bottom: 10px;
      }
      &__price{
         order: -1;
      }
   }
}
</style>
