<template>
   <main v-if="sections" id="main">
      <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->

      <Intro v-bind:section="sections.intro" />
      <ABout v-bind:section="sections.about" />
      <Specs :type="'dark'" v-bind:section="sections.specs" />
      <Gallery v-bind:section="sections.gallery" />
   </main>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/home/Intro.vue";
import ABout from "@/components/home/ABout.vue";
import Specs from "@/components/home/Specs.vue";
import Gallery from "@/components/home/Gallery.vue";

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
      ABout,
      Specs,
      Gallery,
   },

   created() {
      fetch("data/home-page.json")
         .then((result) => result.json())
         .then((data) => {
            console.log(data);

            this.sections = data;
         });
   },
   metaInfo: {
      title : 'Головна',
      meta: [{ name: "description", content: "Більше 20 тисяч висококваліфікованих фахівців для різних галузей господарства України" }],
   },
   
};
</script>
