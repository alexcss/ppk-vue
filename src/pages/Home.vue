<template>
   <main v-if="sections">
      <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->

      <Intro v-bind:section="sections.intro"  /> 
   </main>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/home/Intro.vue";

export default {
   name: "Home",
   data() {
      return {
         title: "Home page",
         sections: null, 
      };
   },
   components: {
      Intro,
   },

   created() {
      fetch("data/home-page.json")
         .then((result) => result.json())
         .then((data) => {
            console.log(data);

            this.sections = data;
         });
   },
};
</script>
