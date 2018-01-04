<template>
	<section class="asi-section">
		<div id="asi-category-masthead">
			<div class="asi-container-fluid">
				<categorycard v-for="(card, index) in cards" v-bind:key="card.id" v-bind:cattitle="card.cattitle" v-bind:imgsrc="card.imgsrc" v-bind:imgalt="card.imgalt" v-bind:cardlead="card.cardlead" v-bind:cardcta="card.cardcta" v-bind:catlink="card.catlink" v-bind:position="card.position"></categorycard>
			</div>
		</div>
	    <div class="custom-page-maxwidth">
	    	<bddisclaimer asiBigDifferenceDisclaimer="disclaimer text"></bddisclaimer>
	    </div>
	</section>
</template>

<script>
import categoryheader from '~/components/CategoryHeader.vue'
import bddisclaimer from '~/components/Disclaimer.vue'

export default {
  layout: 'category',
  components: {
    categoryheader, bddisclaimer
  }
}
</script>