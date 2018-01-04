<template>
	<section class='asi-section'>
		<div id='asi-category-masthead'>
			<div class='asi-container-fluid'>
				<categoryheader asiCategoryHeadline='living room furniture' heroImgLrg='https://asf.scene7.com/is/image/ASF/asi-category-hero-lr-d.jpg' heroImgMed='https://asf.scene7.com/is/image/ASF/asi-category-hero-lr-d.jpg' heroImgSml='https://asf.scene7.com/is/image/ASF/asi-category-hero-lr-m.jpg' heroImgSrc='https://asf.scene7.com/is/image/ASF/asi-category-hero-lr-d.jpg' heroImgAlt='living-room-furniture' asiCategoryMainCTA='shop all living room furniture' asiCategoryMainMobileCTA='shop all living rooms' asiCategoryMainHREF='/search/v/living-room-furniture' asiCategoryIntroTXT='Whether its a loveseat for two or a sectional for the whole family, our amazing selection of living room furniture is sure to have the perfect size and style to fit your familys needs.'></categoryheader>
			</div>
		</div>
		<categorycards v-bind:cards='cards'></categorycards>
	    <div class='custom-page-maxwidth'>
	    	<bddisclaimer asiBigDifferenceDisclaimer='*Our “Compare at”, “Save” and “Their Price” prices reflect the current selling price of comparable merchandise sold by others in the ASF/VCF trade area, which is a national trade area that includes online retailers. As a result, advertised “Compare at”, “Save” and “Their Price” prices may or may not necessarily be the prices at which such merchandise is sold by traditional retail outlets in the local area. These prices also do not take into account shipping, handling, delivery, warranties and other fees and charges typically applied to furniture sales by local and online retailers.'></bddisclaimer>
	    </div>
	</section>
</template>

<script>
import categoryheader from '~/components/CategoryHeader.vue'
import bddisclaimer from '~/components/Disclaimer.vue'
import categorycards from '~/components/CategoryCard.vue'

export default {
  layout: 'category',
  components: {
    categoryheader, bddisclaimer, categorycards
  },
  data () {
    return {
      cards: [
        {
          id: 1,
          imgsrc: 'https://asf.scene7.com/is/image/ASF/asi-category-living-sofas-m.jpg',
          imgalt: 'image alt text 1',
          cardtitle: 'sofas'
        },
        {
          id: 2,
          imgsrc: 'https://asf.scene7.com/is/image/ASF/asi-category-living-sofas-m.jpg',
          imgalt: 'image alt text 2',
          cardtitle: 'sectionals'
        },
        {
          id: 3,
          imgsrc: 'https://asf.scene7.com/is/image/ASF/asi-category-living-sofas-m.jpg',
          imgalt: 'image alt text 3',
          cardtitle: 'chairs'
        }
      ]
    }
  }
}
</script>
<style lang='scss'>
	#asi-category-hero .asi-category-headline h1.asi-display-1{
		color: #ffffff;
	}
</style>