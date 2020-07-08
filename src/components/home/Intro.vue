<template>
   <section class="ba-section-intro" :style="{ backgroundImage: `url(${section.img})` }">
      <div class="row column text-center medium-text-left">
         <h1 class="ba-section-intro__title">{{ section.title }}</h1>
         <div class="ba-section-intro__content">
            <p>{{ section.content }}</p>
         </div>

         <a v-bind:href="section.btn.url" class="ba-button">{{ section.btn.text }}</a>
      </div>
      <!-- /.ba-container -->
   </section>
</template>

<script>
export default {
   props: ["section"],
};
</script>

<style lang="scss">
.ba-section-intro {
   background: #1d1d1d;
   color: #fff;
   min-height: 100vh;
   padding: 130px 0;
   display: flex;
   align-items: center;
   background-size: cover;

   &__title {
      line-height: 1.17;
      margin-bottom: 14px;
   }
   &__content {
      font-size: 18px;
      max-width: 540px;
      margin-bottom: 62px;

      & > :last-child {
         margin-bottom: 0;
      }
   }
}
</style>
