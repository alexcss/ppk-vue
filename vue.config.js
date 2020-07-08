module.exports = {
   lintOnSave: false,
   publicPath: process.env.NODE_ENV === 'production' ? '/ppk-vue/' : '/',
   css: {
      loaderOptions: {
         sass: {
            prependData: `@import "@/assets/scss/_foundation.scss";`
         }
      }
   }
}
