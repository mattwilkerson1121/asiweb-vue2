<template>
  <section>
    <component :key="story.content._uid" :blok="story.content" :is="story.content.component"></component>
    <script src="//app.storyblok.com/f/storyblok-latest.js?t=OQOGo1QgEyFPfuY3VRtItAtt" type="text/javascript"></script>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      story: {
        content: {
          body: []
        }
      },
      draft: false
    }
  },
  asyncData (context) {
    let version = 'published'

    if (context.isDev) {
      version = 'draft'
    }

    return axios.get(`https://api.storyblok.com/v1/cdn/stories/${context.params.slug}?version=${version}&token=${process.env.storyblok.token}`)
      .then((result) => {
        return { story: result.data.story, draft: context.isDev }
      })
      .catch((error) => {
        context.error({ statusCode: 404, message: 'Page not found' + (context.isDev ? error : '') })
      })
  },
  mounted () {
    window.storyblok.on('change', function () {
      window.location.reload()
    })
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Lato');

.root {
  max-width: 960px;
  margin: 0 auto;
  font-family: 'Lato', sans-serif;
  margin-top: 120px;
}

.teaser {
  text-align: center;
}

.grid {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;

  max-width: 1200px;
  margin: 0 auto;
}

.column {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;

  width: 50%;
  
  box-shadow: 0px 1px 10px 0px #ccc;
  border: 1px solid #ddd;
  margin: 20px;
  padding: 20px;
}

body { 
  font-family: 'Lato', sans-serif; 
} 

.rebuilding { 
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  text-align: center;
  background: green;
  padding: 10px;
  color: #fff;
} 

footer { 
  text-align: center; 
}
</style>