<template>
   <main v-if="sections" id="main">
      <Intro :type="'center'" :section="sections.intro" />
      <Specs v-bind:section="sections.specs" />
      <Process v-bind:section="sections.process" />
   </main>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/home/Intro.vue";
import Specs from "@/components/home/Specs.vue";
import Process from "@/components/specs/Process.vue";

export default {
   data() {
      return {
         sections: null,
      };
   },
   components: {
      Intro,
      Specs,
      Process,
   },

   created() {
      fetch("data/specs-page.json")
         .then((result) => result.json())
         .then((data) => {
            this.sections = data;
         });
   },
   metaInfo: {
      title: "Всі спеціалізації",
      meta: [{ name: "description", content: "Вітаємо переможців Всеукраїнського чемпіонату з інформаційних технологій" }],
   },
};
</script>
