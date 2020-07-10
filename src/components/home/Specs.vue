<template>
   <section class="ba-section ba-section--dark">
      <div class="row column ba-container">
         <h2 class="ba-section-title">{{ section.title }}</h2>

         <article class="ba-specs" v-for="item in specs" :key="item.title">
            
            <img class="ba-specs__img" :src="item.img" :alt="item.title" />

            <div class="ba-specs__body">
               <h3 class="ba-specs__title">{{ item.title }}</h3>
               <p>{{ item.content }}</p>

               <div class="ba-specs__footer">
                  <span class="ba-specs__duration">
                     {{ item.duration }}
                  </span>
                  <!-- /.ba-specs__duration -->
                  <span class="ba-specs__price">
                     {{ item.price }} грн/рік
                  </span>
                  <!-- /.ba-specs__duration -->

               </div>
               <!-- /.ba-specs__footer -->

            </div>
            <!-- /.ba-specs__body -->

         </article>
         <!-- /.ba-specs -->
      </div>
      <!-- /.ba-container -->
   </section>
</template>

<script>
export default {
   props: ["section"],
   data() {
      return {
         specs: null,
      };
   },
   created() {
      fetch("data/specs.json")
         .then((result) => result.json())
         .then((data) => {
            this.specs = data;
         });
   },
};
</script>

<style lang="scss">
.ba-section--dark {
   background: $black;
   color: #fff;
}
</style>
