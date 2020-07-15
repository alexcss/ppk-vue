<template>
   <section class="ba-section">
      <div class="row column ba-container">
         <h2 class="ba-section-title">{{ section.title }}</h2>
      </div>
      <!-- /.ba-container -->

      <div class="ba-gallery" v-if="section.gallery.length">
         <img v-for="(url, i) in section.gallery" :key="i" :src="url" :alt="`Image ${i + 1}`" />
      </div>
      <!-- /.ba-gallery -->
   </section>
</template>

<script>
export default {
   props: ["section"],
};
</script>

<style lang="scss">
.ba-gallery {
   display: grid;
   grid-gap: 2px;
   grid-template-columns: 1fr 1fr;
   grid-auto-rows: 225px;

   @include breakpoint(small down) {
      :nth-child(1),
      :nth-child(4n) {
         grid-column-start: 1;
         grid-column-end: 3;
      }
   }
   @include breakpoint(medium) {
      grid-gap: 8px;
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-rows: 225px;

      :nth-child(5n) {
         grid-column-start: 2;
         grid-column-end: 4;
      }
   }
   img {
      object-fit: cover;
      height: 100%;
      width: 100%;
   }
}
</style>
