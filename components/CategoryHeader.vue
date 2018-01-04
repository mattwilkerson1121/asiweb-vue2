<template>
  <div id="asi-category-hero">
  	<img class="img-responsive img-data data-img" v-bind:data-lrg="heroImgLrg" v-bind:data-med="heroImgMed" v-bind:data-sml="heroImgSml" v-bind:src="heroImgSrc" v-bind:alt="heroImgAlt" width="100%"/>
  	<div class="asi-category-headline asi-category-hero">
      <h1 class="asi-display-1 display-1 asi-white text-center text-uppercase asi-text-shadow-1">{{asiCategoryHeadline}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryHeader',
  props: {
    'heroImgSrc': { type: String, required: false, default: 'https://asf.scene7.com/is/image/ASF/asi-category-hero-lr-d.jpg' },
    'heroImgLrg': { type: String, required: false, default: 'https://asf.scene7.com/is/image/ASF/asi-category-hero-lr-d.jpg' },
    'heroImgMed': { type: String, required: false, default: 'https://asf.scene7.com/is/image/ASF/asi-category-hero-lr-m.jpg' },
    'heroImgSml': { type: String, required: false, default: 'https://asf.scene7.com/is/image/ASF/asi-category-hero-lr-m.jpg' },
    'heroImgAlt': { type: String, required: false, default: 'room furniture for less' },
    'asiCategoryHeadline': { type: String, required: false, default: 'room page furniture' },
    'asiCategoryMainCTA': { type: String, required: false, default: 'SHOP ALL ROOM FURNITURE' },
    'asiCategoryMainMobileCTA': { type: String, required: false, default: 'ALL ROOM FURNITURE' },
    'asiCategoryMainHREF': { type: String, required: false, default: '/search/v/living-room' },
    'asiCategoryIntroTXT': { type: String, required: false, default: 'Room intro placeholder text.' }
  }
}
</script>

<style lang="scss">
	@import '../assets/css/asi-styles';
</style>