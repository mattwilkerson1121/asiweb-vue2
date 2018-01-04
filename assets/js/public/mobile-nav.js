$(function() {

	var mobileNavToggle = function(force){

		var nav = function(){
			var group = localStorage.getItem('mobile-nav-target') || 'root';
			var iOS = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) >= 0;

			$('.asi-mobile-nav').toggleClass('open');
			$('.asi-mobile-nav-container').toggleClass('open');
			$('#top').toggleClass('open');
			$('.overlay').toggleClass('open');
			$('#asi-mobile-nav-toggle').toggleClass('is-active');

			showGroup(group, 1);
			$('.asi-mobile-nav').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
				if (!$('.asi-mobile-nav').hasClass('open')){
					$('.tier-1').css('left', '0');
					$('.tier-2').css('left', '275px');
					$('.tier-3').css('left', '275px');
					$('.tier-2').css('height', '0');
					$('.tier-3').css('height', '0');
					if(isLocalStorageNameSupported()) {
						localStorage.removeItem('mobile-nav-target');
					}
					$('body').css("overflow","auto");
					$('body').css('position', 'relative');
					$('.asi-mobile-nav').removeClass('results');
				}else{
					$('body').css("overflow","hidden");
					$('body').css('position', 'fixed');

					$("#asi-mobile-nav-toggle").addClass('conceal')
          $("#asi-mobile-nav-close-btn").addClass("reveal");
        }
			});
		}

		if (force){
			clear();
			nav();
		}else if ($('.asi-mobile-nav header').hasClass('search')) {
			clear();
		}else{
			nav();
		}
    toggleSearchField();
	};

	var showGroup = function(targetGroup, targetTier){
		$("body").css("overflow-y","hidden");
		var groupItems = $('[data-mobile-nav-group="' + targetGroup + '"]').find('li');

		/* adjusting the height of the container to account for absolutely poitioned child elements */
		var height = (groupItems.length * 50) + 224;

		if (height < ($(window).height() - 58)){
			//console.log('using viewport height');
			height = ($(window).height() - 58);
		}

		$('.asi-mobile-nav').css('height', height);

		$('.tier-' + targetTier + ' .group').css('display', 'none');
		$('.tier-' + targetTier + ' [data-mobile-nav-group="' + targetGroup + '"]').css('display', 'block');
	};

	var advanceTier = function(event){
		$('.asi-mobile-search').val(null);
		var targetGroup = $(event.currentTarget).data('mobile-nav-target');
		var currentTier = $(event.currentTarget.parentElement).data('mobile-nav-parent-tier');
		var targetTier = currentTier + 1;
		$('.tier-'+targetTier).css('height', 'auto');
		// console.log('currentTier: ' + currentTier);
		// console.log('targetTier: ' + targetTier);
		// console.log('targetGroup: ' + targetGroup);
		if((targetTier <= 3) && (targetGroup != null && targetGroup != "dummy")){
			$('.tier-' + currentTier).css('left', '-275px');
			$('.tier-' + targetTier).css('left', 0);
			if(isLocalStorageNameSupported()) {
				localStorage.setItem('mobile-nav-target', targetGroup);
			}
			showGroup(targetGroup, targetTier);
		}else{
			console.warn('This submenu does not exist');
		}
	};

  var clear = function(){
    $('.asi-mobile-nav header').removeClass('search');
    $('.asi-mobile-nav header').removeClass('clear');
    $('.asi-mobile-nav').removeClass('search');
    $('#top').removeClass('search');
    $('.tt-dataset').html('');
    $('.asi-mobile-search').val(null);
  }

	var reverseTier = function(event){
		var targetGroup = $(event.currentTarget).data('mobile-nav-target');
		var currentTier = $(event.currentTarget.parentElement).data('mobile-nav-parent-tier');
		var targetTier = currentTier - 1;
		// console.log('currentTier: ' + currentTier);
		// console.log('targetTier: ' + targetTier);
		// console.log('targetGroup: ' + targetGroup);
		$('.tier-' + currentTier).css('left', '275px');
		$('.tier-' + targetTier).css('left', 0);
		if(isLocalStorageNameSupported()) {
			localStorage.setItem('mobile-nav-target', targetGroup);
		}
		showGroup(targetGroup, targetTier);
	};

	var substringMatcher = function(strs) {
	  return function findMatches(q, cb) {
	    var matches, substringRegex;

	    // an array that will be populated with substring matches
	    matches = [];

	    // regex used to determine if a string contains the substring `q`
	    substrRegex = new RegExp(q, 'i');

	    // iterate through the pool of strings and for any string that
	    // contains the substring `q`, add it to the `matches` array
	    $.each(strs, function(i, str) {
	      if (substrRegex.test(str)) {
	        matches.push(str);
	      }
	    });

	    cb(matches);
	  };
	};

	var furniture = ['Chair', 'Lift chair', 'Bean bag', 'Chaise lounge', 'Fauteuil', 'Ottoman', 'Recliner', 'Stool', 'Bar Stool', 'Footstool or ottoman', 'Tuffet', 'Fainting couch', 'Rocking chair', 'Bench', 'Couch, also known as a sofa or settee', 'Accubita', 'Canapé', 'Davenport', 'Klinai', 'Divan', 'Love seat', 'Bed', 'Bunk bed', 'Canopy bed', 'Four-poster bed', 'Murphy bed', 'Platform bed', 'Sleigh bed', 'Waterbed', 'Daybed', 'Futon', 'Hammock', 'Headboard', 'Infant bed (crib, cradle)', 'Mattress', 'Sofa bed', 'Billiard table', 'Chess table', 'Entertainment center', 'Gramophone', 'Hi fi', 'Jukebox', 'Pinball machine', 'Radiogram', 'Television set', 'Radio receiver', 'Video game console', 'Chabudai', 'Changing table', 'Desk', 'Davenport desk', 'Drawing board', 'Computer desk', 'Writing desk', 'Kotatsu', 'Korsi', 'Lowboy', 'Monks bench', 'Pedestal', 'Table', 'Coffee table', 'Dining table', 'Refectory table', 'Drop-leaf table', 'End table', 'Folding table', 'Gateleg table', 'Poker table', 'Trestle table', 'TV tray table', 'Wine table', 'Washstand', 'Workbench', 'Baker\'s rack', 'Bookcase', 'Cabinetry', 'Bathroom cabinet', 'Chifforobe', 'Closet', 'Cupboard', 'Curio cabinet', 'Hutch', 'Hoosier cabinet', 'Kitchen cabinet', 'Pantry', 'Pie safe', 'Chest of drawers or dresser', 'Chest', 'Cellarette', 'Hope chest', 'Coat rack', 'Hall tree', 'Hatstand', 'Filing cabinet', 'Floating shelf', 'Nightstand', 'Ottoman', 'Plan chest', 'Plant Stand', 'Shelving', 'Sideboard or buffet', 'Safe', 'Umbrella stand', 'Wardrobe or armoire', 'Wine rack'];

  $(".asi-mobile-search").on("input", function() {
    if($(this).val().length > 0) {
      $(".asi-mobile-nav").addClass("results");
    }else{
      $(".asi-mobile-nav").removeClass("results");
    }
  });

	$('#asi-mobile-nav-toggle').click(function(){
    if(!$('.asi-mobile-nav').hasClass('open')) {
      mobileNavToggle(true);
    }else{
      mobileNavToggle(true);
      clear();
			$('#asi-mobile-nav-toggle').removeClass('conceal');

    }
	});

	$('.overlay').click(function(){
		mobileNavToggle(true);
    clear();
    $("#asi-mobile-nav-toggle").removeClass('is-active').removeClass('conceal');
	});

  function toggleSearchField() {
		$('.asi-mobile-nav header').toggleClass('search');
		$('.asi-mobile-nav').toggleClass('search');
		$('#top').toggleClass('search');

		if($('.asi-mobile-nav').hasClass('search')){
			$(document).keyup(function(e) {
	      if (e.keyCode === 27) {
					$('.asi-mobile-nav header').removeClass('clear');
					$('.asi-mobile-search').val(null);
					$('.asi-mobile-nav').removeClass('results');
				}
	    });
		}
  }

	$('.asi-mobile-nav li:not(.tier)').click(function(event){
		if($(event.currentTarget).hasClass('asi-mobile-nav-title')){
			reverseTier(event);
		}else{
			advanceTier(event);
		}
	});

	//block touchmove events to .overlay on mobile search field focus.
	$('.asi-mobile-search').on('focus', function() {
		console.log("block");
		$('.overlay').bind('touchmove', false);
	});

	//remove block on touchmove events to .overlay, on mobile search field blur.
	$('.asi-mobile-search').on('blur', function() {
		console.log("unblock");
		$('.overlay').off('touchmove');
	});

	$('.asi-mobile-search-clear').click(function(event){
		event.preventDefault;
		$('.asi-mobile-nav header').removeClass('clear');
		//$('.asi-mobile-search').focus();
		$('.tt-dataset').html('');
		$('.asi-mobile-search').val(null);
		$('.asi-mobile-nav').removeClass('results');
	});

	$('.asi-mobile-search').keyup(function(event) {
		var value = event.currentTarget.value;
		if (value){
			$('.asi-mobile-nav header').addClass('clear');
		}else{
			$('.asi-mobile-nav header').removeClass('clear');
		}
	});

	$('.asi-mobile-search').typeahead(
		{
			hint: true,
			highlight: true,
			minLength: 1
		},
		{
			name: 'furniture',
			source: substringMatcher(furniture)
		}
	);

	var navContainerHeight = $(window).height() - $("header#top").height();
	$(".asi-mobile-nav-container").css("height",navContainerHeight);

  $("#asi-mobile-nav-close-btn").on("click", function(){
    mobileNavToggle(true);
    clear();
    $('#asi-mobile-nav-toggle').removeClass('conceal');
  });

	function isLocalStorageNameSupported() {
	  var testKey = 'test-local-storage', storage = window.localStorage;
	  try {
	    storage.setItem(testKey, '1');
	    storage.removeItem(testKey);
	    return true;
	  } catch (error) {
	    return false;
	  }
	}

});
