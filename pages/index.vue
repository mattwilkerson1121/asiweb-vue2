<template>
  <section class="container-fluid">
    <div>
      <div class="page-header">
        <div class="custom-page-maxwidth">
          <h1 class="text-left">ASI WEB - VUE</h1>
        </div>
      </div>
      <div class="custom-page-maxwidth text-left">
        <h2 class="text-left">PAGES</h2>
        <ul class="list-unstyled text-left">
          <li><router-link to="decwk5hp">Home Page - 12WK5Y17</router-link></li>
          <li><router-link to="living-room-furniture">Living Room - Category page</router-link></li>
        </ul>
      </div>
      <div class="custom-page-maxwidth text-left">
        <div>
          <h3 class="asi-display-3 text-left">NUXT DOCUMENTATION</h3>
          <div class="links text-left">
            <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
            <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  data: () => {
    return {
      headline: 'ASI Web - Vue'
    }
  }
}
</script>
<style scoped>
html, body, ul, li, a{
  font-size:16px;
}
.page-header{
  border-bottom:2px solid #ddd;
  margin-bottom:15px;
  margin-top:15px;
}

ul, li { text-align:left;}
h2, ul{padding:0;margin:0;}
li{ margin:8px; font-size:18px; }

.links{
  margin-top:15px;
}
.custom-page-maxwidth:nth-child(2){
  margin-bottom:30px;
}
.custom-page-maxwidth:nth-child(3){
  background:#f0f0f1;
  border-top:1px solid #ddd;
}
.custom-page-maxwidth:nth-child(3) > div {
  padding:10px 25px 45px;
}
a[class^="button--"] {
  border-radius:0;
}
</style>