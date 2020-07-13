<template>
   <article class="ba-specs" >
      <img class="ba-specs__img" v-bind:src="item.img" :alt="item.title" />

      <div class="ba-specs__body">
         <h3 class="ba-specs__title">{{ item.title }}</h3>
         <p v-if="item.content">{{ item.content }}</p>

         <div class="ba-specs__footer">
            <button class="ba-button">
               Податти заявку
            </button>
            <span class="ba-specs__duration">
               {{ item.duration }}
            </span>
            <!-- /.ba-specs__duration -->
            <span class="ba-specs__price">
               <b>{{ item.price }}</b> грн/рік
            </span>
            <!-- /.ba-specs__duration -->
         </div>
         <!-- /.ba-specs__footer -->
      </div>
      <!-- /.ba-specs__body -->
   </article>
   <!-- /.ba-specs -->
</template>

<script>
export default {
   props : ["item"]
};
</script>

<style></style>
