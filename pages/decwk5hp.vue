<template>
  <section class="container">
    <div>
      <h1 class="title">{{ headline }}</h1>
      <h2 class="subtitle">{{ headlinetwo }}</h2>
      <p class="asi-lead">{{ leadtext }}</p>
      <bddisclaimer asiBigDifferenceDisclaimer="*Our “Compare at”, “Save” and “Their Price” prices reflect the current selling price of comparable merchandise sold by others in the ASF/VCF trade area, which is a national trade area that includes online retailers. As a result, advertised “Compare at”, “Save” and “Their Price” prices may or may not necessarily be the prices at which such merchandise is sold by traditional retail outlets in the local area. These prices also do not take into account shipping, handling, delivery, warranties and other fees and charges typically applied to furniture sales by local and online retailers."></bddisclaimer>
    </div>
  </section>
</template>

<script>
import bddisclaimer from '~/components/Disclaimer.vue'

export default {
  components: {
    bddisclaimer
  },
  data: () => {
    return {
      headline: 'Page H1 Headline',
      headlinetwo: 'Page H2 Headline',
      leadtext: 'This is just sample paragraph text... whether it\'s a loveseat for two or a sectional for the whole family, our amazing selection of living room furniture is to be the perfect size and style to fit your family\'s needs.'
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
