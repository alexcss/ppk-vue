<template>
   <main v-if="sections" id="main">
      <Intro :type="'center'" :section="sections.intro"  /> 
   </main>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/home/Intro.vue";

export default {
   data() {
      return {
         sections: null, 
      };
   },
   components: {
      Intro
   },

   created() {
      fetch("data/teachers-page.json")
         .then((result) => result.json())
         .then((data) => {
            this.sections = data;
         });
   },
   metaInfo: {
      title: "Викладачі",
      meta: [{ name: "description", content: "Вітаємо переможців Всеукраїнського чемпіонату з інформаційних технологій" }],
   },
};
</script>
