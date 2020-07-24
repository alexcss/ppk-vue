<template>
   <main v-if="sections" id="main">
      <Intro :type="'center'" :section="sections.intro" />
      <Posts :section="sections.posts" />
   </main>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/home/Intro.vue";
import Posts from "@/components/home/Posts.vue";

export default {
   data() {
      return {
         sections: {
            intro: {
               title: "Блог і новини",
               img: "./img/home-page/intro.jpg",
            },
            posts: {
               title: "Блоги викладачів",
            },
         },
      };
   },
   components: {
      Intro,
      Posts,
   },

   created() {},
   metaInfo () {
      return    {
         title: this.sections.intro.title,
         meta: [
            { name: "description", content: "Вітаємо переможців Всеукраїнського чемпіонату з інформаційних технологій" }
         ],
      }
   }
};
</script>
