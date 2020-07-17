<template>
   <section class="ba-section-intro text-center medium-text-left" :class="type" :style="{ backgroundImage: `url(${section.img})` }">
      <div class="row column">
         <h1 class="ba-section-intro__title">{{ section.title }}</h1>
         <div class="ba-section-intro__content" :class="type" v-if="section.content">
            <p>{{ section.content }}</p>
         </div>

         <a v-if="section.btn" v-bind:href="section.btn.url" class="ba-button">{{ section.btn.text }}</a>
      </div>
      <!-- /.ba-container -->
   </section>
</template>

<script>
export default {
   props: ["section", "type"],
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

   &.center {
      text-align: center;
      min-height: initial;
      padding: 190px 0 146px;
   }

   &__title {
      line-height: 1.17;
      margin-bottom: 14px;
   }
   &__content {
      font-size: 18px;
      max-width: 540px;
      margin-bottom: 62px;

      &.center {
         margin-left: auto;
         margin-right: auto;
      }
      & > :last-child {
         margin-bottom: 0;
      }
   }
}
</style>
