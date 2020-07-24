<template>
   <section class="ba-section">
      <div class="row column">
         <h2 class="ba-section-title">{{ section.title }}</h2>
      </div>
      <!-- /.row -->

      <div class="row" v-if="posts.length > 0">
         <div class="column small-12 medium-6 large-6" v-for="(post, index) in posts" :key="index">
            <article class="ba-post">
               <router-link :to="`/blog/${post.slug}`" class="ba-post__img-link" >
                  <img 
                     :src="post._embedded['wp:featuredmedia'][0].source_url" 
                     v-if="post._embedded['wp:featuredmedia']"
                     :alt="post.title.rendered"
                  />
                  <img v-else :src="'./img/home-page/intro.jpg'" :alt="post.title.rendered">
               </router-link> 

               <div class="ba-post__body">
                  <h3 class="ba-post__title">
                     <a :href="post.link" class="ba-post__img-link" target="_blank">
                        {{post.title.rendered}}
                     </a>
                  </h3>
                  <div class="ba-post__excerpt" v-html="post.excerpt.rendered">                     
                  </div>
                  <!-- /.ba-post__excerpt -->

                  <div class="ba-post__footer">
                     <a :href="post.link" class="ba-button ba-button--on-dark" target="_blank">
                        Читати все
                     </a>
                     <div class="ba-post__meta">
                        <span>
                           <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M12.6132 2C7.18781 2 2.79443 6.48 2.79443 12C2.79443 17.52 7.18781 22 12.6132 22C18.0484 22 22.4516 17.52 22.4516 12C22.4516 6.48 18.0484 2 12.6132 2ZM12.623 20C8.27878 20 4.76015 16.42 4.76015 12C4.76015 7.58 8.27878 4 12.623 4C16.9672 4 20.4859 7.58 20.4859 12C20.4859 16.42 16.9672 20 12.623 20Z"
                                 fill="#D7D7D7"
                              />
                              <path d="M13.1144 7H11.6401V13L16.8001 16.15L17.5373 14.92L13.1144 12.25V7Z" fill="#D7D7D7" />
                           </svg>

                           <time>{{post.date}}</time>
                        </span>
                        <span>
                           <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0)">
                                 <path
                                    d="M12.6229 12C14.795 12 16.5543 10.21 16.5543 8C16.5543 5.79 14.795 4 12.6229 4C10.4508 4 8.69144 5.79 8.69144 8C8.69144 10.21 10.4508 12 12.6229 12ZM12.6229 14C9.99864 14 4.76001 15.34 4.76001 18V20H20.4857V18C20.4857 15.34 15.2471 14 12.6229 14Z"
                                    fill="#D7D7D7"
                                 />
                              </g>
                              <defs>
                                 <clipPath id="clip0">
                                    <rect width="23.5886" height="24" fill="white" transform="translate(0.828613)" />
                                 </clipPath>
                              </defs>
                           </svg>

                           {{post._embedded.author[0].name}}
                        </span>
                     </div>
                     <!-- /.ba-post__meta -->
                  </div>
                  <!-- /.ba-post__meta -->
               </div>
               <!-- /.ba-post__body -->
            </article>
            <!-- /.ba-post -->
         </div>
         <!-- /.column -->
      </div>
      <!-- /.row -->

      <div class="text-center ba-load-more-wrap">
         <button v-if="page < 10" class="ba-button ba-button--fill" @click="loadMore">
            Показати більше
         </button>
      </div>
   </section>
   <!-- /.ba-section -->
</template>

<script>
export default {
   props: ["section"],
   data() {
      return {
         page:1,
         perPage:4,
         posts: [],
      };
   },
   methods:{
      getPosts(){
         const postsUrl = `https://www.zavtra.in.ua/wp-json/wp/v2/posts?filter[cat]=you-camp&_embed&per_page=${this.perPage}&page=${this.page}`;

         fetch(postsUrl)
            .then((result) => result.json())
            .then((data) => {
               console.log(data);
   
               this.posts.push(...data);
            });
      },
      loadMore(){
         this.page++;
         this.getPosts();
      }
   },
   mounted() {
      this.getPosts();
   },
};
</script>

<style lang="scss">
.ba-post {
   margin-bottom: 30px;
   &__img-link {
      display: block;
      overflow: hidden;
      img {
         display: block;
         width: 100%;
         transition: transform 0.8s;
      }

      &:hover {
         img {
            transform: scale(1.1) rotate(2deg);
         }
      }
   }
   &__body {
      background: $black;
      color: #d7d7d7;
      padding: 20px;

      @media screen and (min-width: 640px) {
         padding: 30px 20px;
      }
   }
   &__title {
      color: #fff;
      a {
         color: inherit;

         &:hover,
         &:focus {
            color: $primary-color;
         }
      }
   }
   &__excerpt {
      margin-bottom: 26px;
   }
   &__footer {
      display: flex;
      flex-direction: column;
      align-items: center;

      @include breakpoint(large) {
         flex-direction: row;
         justify-content: space-between;
      }
   }
   &__meta {
      padding-top: 24px;
      display: flex;
      width: 100%;
      justify-content: space-between;

      @include breakpoint(large) {
         flex-direction: column;
         padding: 0 0 0 20px;

         & > span + span {
            margin-top: 10px;
         }
      }

      & > span {
         display: flex;
         align-items: center;
         svg {
            margin-right: 10px;
         }
      }
   }
}
</style>
