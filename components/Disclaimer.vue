<template>
	<div class="asi-disclaimer-section">
	    <div class="asi-container-fluid">
	        <div class="asi-content-body">
	            <div class="asi-container">
	                <p class="asi-disclaimer" id="asi-bd-disclaimer text-center">{{asiBigDifferenceDisclaimer}}</p>
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
export default {
  name: 'BDDisclaimer',
  props: {
    'asiBigDifferenceDisclaimer': {
      type: String, required: false, default: 'Big Difference disclaimer text goes here' }
  }
}
</script>