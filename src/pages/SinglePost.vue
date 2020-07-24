<template>
   <main v-if="sections" id="main">
      <article>
         <Intro :type="'center'" :section="sections.intro" />
         
         <section class="ba-section" v-if="post">
            <div class="row column" v-html="post.content.rendered">

            </div>
            <!-- /.row -->
         </section>
      </article>
   </main>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/home/Intro.vue";

export default {
   props: ["slug"],
   data() {
      return {
         sections: {
            intro: {
               title: "Сторынка Стаття",
               img: "./img/home-page/intro.jpg",
            },
         },
         post: null
      };
   },
   components: {
      Intro,
   },
   methods: {
      getPost() {
         const postsUrl = `https://www.zavtra.in.ua/wp-json/wp/v2/posts?slug=${this.slug}&_embed`;

         fetch(postsUrl)
            .then((result) => result.json())
            .then((data) => {
               console.log(data);
               this.post = data[0];

               this.sections.intro.title = this.post.title.rendered;

               if(this.post._embedded['wp:featuredmedia']){
                  this.sections.intro.img = this.post._embedded['wp:featuredmedia'][0].source_url;
               }

            });
      },
   },
   created() {
      this.getPost()
   },
   metaInfo() {
      return {
         title: this.sections.intro.title,
         meta: [{ name: "description", content: "Вітаємо переможців Всеукраїнського чемпіонату з інформаційних технологій" }],
      };
   },
};
</script>
