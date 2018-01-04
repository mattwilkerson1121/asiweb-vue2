$(function() {
  var isIe9 = false,
      menuIsOpen = false,
      cartMenuIsOpen = false,
      locatorMenuIsOpen = false,
      searchResultsIsOpen = false,
      $body = $('body'),
      $asiLocatorInput = $(".asi-locator-input"),
      $asiSearchInput = $(".asi-search-input"),
      $asiCartDropdown = $(".asi-cart-dropdown"),
      $asiSearchEnterButton = $(".asi-search-enter-btn"),
      $asiSearchCloseButton = $(".asi-search-close"),
      $asiLocatorDropdown = $(".asi-locator-dropdown"),
      $asiLocator = $(".asi-locator"),
      $asiSearchOpen = $(".asi-search-open"),
      $asiSearchResults = $(".asi-search-results"),
      $asiSearchPanel = $(".asi-search-panel"),
      $asiSearchResultsEndcap = $(".asi-search-results-endcap"),
      $asiDropdownSaveFooter = $(".asi-dropdown-save-footer"),
      $asiEmailSignUp = $(".asi-footer-container").find(".asi-email-input"),
      $asiEmailSignUpMobile = $(".asi-mobile-footer").find(".asi-email-input"),
      $overlayMenuModal = $('#overlay-menu-modal'),
      $overlayMenuButtons = { cart: $(".asi-search-and-cart-menu").find("#asi-cart-icon"),locator: $("#asi-locator-button")};

  var overlayMenuModalToggle = function(toggleState) {
    $overlayMenuModal[toggleState]();
    if (toggleState==='show') {
      var showOverlayMenuModal = function(e) {
        if (e.type==='keyup' && e.keyCode!==27) return;
        if ($asiCartDropdown[0].style.display==='block') $overlayMenuButtons.cart.click();
        if ($asiLocatorDropdown[0].style.display==='block') $overlayMenuButtons.locator.click();
        overlayMenuModalToggle('hide');
      };
      $overlayMenuModal.on('click',showOverlayMenuModal);
      $(document).keyup(showOverlayMenuModal);
    } else {
      if ($asiCartDropdown[0].style.display==='block') $overlayMenuButtons.cart.click();
      if ($asiLocatorDropdown[0].style.display==='block') $overlayMenuButtons.locator.click();
      $overlayMenuModal.off('click');
    }
  };

  var hideMainMenuDropdown = function() {
    var $mainMenuDropdown = $('.asi-main-menu-dropdown');
    $mainMenuDropdown.hide();
    setTimeout(function(){ $mainMenuDropdown.css({display:''}); }, 500);
  }

  //add an event to the cart icon in main menu to open or close the cart on click
  $overlayMenuButtons.cart.on("click", function(e) {
    if(cartMenuIsOpen) {
      $(".last").removeClass("clicked");
      $asiCartDropdown.hide();
      overlayMenuModalToggle('hide');
      cartMenuIsOpen = false;
    }else{
      hideResetSearch();
      $(".last").addClass("clicked");
      $asiCartDropdown.show();
      overlayMenuModalToggle('show');
      cartMenuIsOpen = true;
    }
  });

  //Add an event to asi store locator button for drop down
  $overlayMenuButtons.locator.on("click", function(e) {
    if(locatorMenuIsOpen) {
      $asiLocator.removeClass("clicked");
      $asiLocatorDropdown.hide();
      overlayMenuModalToggle('hide');
      locatorMenuIsOpen = false;
    }else{
      hideResetSearch();
      $asiLocator.addClass("clicked");
      $asiLocatorDropdown.show();
      if(!isIe9) $asiLocatorInput.focus();
      overlayMenuModalToggle('show');
      locatorMenuIsOpen = true;
    }
  });

  $asiLocatorInput.on("input",function(e) {
    if($asiLocatorInput.val().length > 0) {
      $asiLocatorInput.addClass("asi-field-in-use");
    }else{
      $asiLocatorInput.removeClass("asi-field-in-use");
    }
  });

  $asiEmailSignUp.on("input",function(e) {
    if($asiEmailSignUp.val().length > 0) {
      $asiEmailSignUp.addClass("asi-field-in-use");
    }else{
      $asiEmailSignUp.removeClass("asi-field-in-use");
    }
  });

  $asiEmailSignUpMobile.on("input",function(e) {
    if($asiEmailSignUpMobile.val().length > 0) {
      $asiEmailSignUpMobile.addClass("asi-field-in-use");
    }else{
      $asiEmailSignUpMobile.removeClass("asi-field-in-use");
    }
  });

  //add event to search icon in main menu to open the search panel
  $asiSearchOpen.find("#asi-search-icon").on("click", function(e) {
    $asiSearchCloseButton.show();
    $asiSearchOpen.hide();
    $asiSearchPanel.show();
    if(!isIe9) $asiSearchInput.focus();
    $(document).keyup(function(e) {
      if (e.keyCode == 27) hideResetSearch();
    });
  });

  //add an event on the close icon in search panel to close search panel
  $asiSearchCloseButton.find("#asi-close-icon").on("click", function(e) {
    $asiSearchCloseButton.hide();
    $asiSearchOpen.show();
    hideResetSearch();
  });

  var enterKeyListener = function(){
    $(document).keyup(function(e) {
      if(e.keyCode == 13) {
        hideResetSearch();
      }
    });
  }

  //add an event to sense input typing in search field for autosuggest
  $asiSearchInput.on("input",function(e) {
    $asiSearchResults.show();
    $asiSearchResultsEndcap.show();
    $body.addClass("asi-scroll-disabled");
    $asiSearchEnterButton.show();
    if($asiSearchInput.val().length > 0) {
      $asiSearchInput.addClass("asi-field-in-use");
      document.addEventListener('keyup', enterKeyListener);
    }else{
      $asiSearchInput.removeClass("asi-field-in-use");
    }
  });

  function hideResetSearch() {
    document.removeEventListener('keyup', enterKeyListener);
    $asiSearchResults.hide();
    $asiSearchCloseButton.hide();
    $asiSearchOpen.show();
    $asiSearchPanel.hide();
    $asiSearchEnterButton.hide();
    $asiSearchInput.val("");
    $body.removeClass("asi-scroll-disabled");
    $asiSearchInput.removeClass("asi-field-in-use");
    $asiSearchResultsEndcap.hide();
  }

  // Header collapse
  (function(){
    var $windowEl = $(window),
        $navEl = $('.asi-main-menu-outline'),
        $mainNavEl = $('#main-navigation'),
        $logoEl = $navEl.find(".asi-logo"),
        $headerEl = $('#top'),
        $promoEl = $('#asi-header-promo'),
        $utilNav = $('.asi-utility-menu'),
        $navDropdownEls = $('.asi-main-menu-dropdown, .asi-cart-dropdown'),
        lastScroll = 0,
        headerCollapsed = false,
        scrollTop = function() { return $(window).scrollTop(); },
        menuY = function() {
          if (headerCollapsed) {
            return $mainNavEl.height();
          } else {
            return $mainNavEl.position().top + $mainNavEl.height() + $utilNav.position().top + $utilNav.height() - scrollTop();
          }
        },
        windowWidth = function() {
          return $windowEl.width();
        },
        collapseHeader = function(dir) {
          if (dir==='down') {
            if (scrollTop()<=$headerEl.height()) {
              $navEl.addClass("no-transition");
              $utilNav.addClass("no-transition");
              return;
            }
            headerCollapsed = true;
            $logoEl.addClass("asi-collapsed-logo");
            $navEl.addClass("collapsed");
            $utilNav.addClass("collapsed");
            $navEl.removeClass("show");
            $utilNav.removeClass("show");
            if (scrollTop()>=$headerEl.height()+$promoEl.height()+$utilNav.height()) {
              $navEl.removeClass("no-transition");
              $utilNav.removeClass("no-transition");
            }
            overlayMenuModalToggle('hide');
            hideMainMenuDropdown();
          } else {
            if (scrollTop()<=$promoEl.height()) {
              headerCollapsed = false;
              $logoEl.removeClass("asi-collapsed-logo");
              $utilNav.removeClass("collapsed show");
              $navEl.removeClass("collapsed show");
            } else {
              $navEl.addClass("show");
            }
          }
        },
        scrollHandler = function(evt) {
          if(windowWidth() >= 850) {
            var dir = (scrollTop() > lastScroll) ? 'down' : 'up';
            collapseHeader(dir);
            $navDropdownEls.css('top',menuY()+'px');
            lastScroll = scrollTop();
          }
        };
    $(window).on('scroll',scrollHandler);
    if($promoEl.length > 0) {
      $("#main-navigation").addClass("asi-promo-visible");
    }
  }());

  /*
  This adds an event handler to every main menu dropdown,
  so that when a menu opens, the inner contents is measured for max height,
  and the menu's content container is resized to accomodate that height.
  This is necessary because the contents of the main menus are abs positioned
  for design accuracy. so the container is not able to adjust its height on its own.
  */
  function setMainMenuInnerHeight(el) {
    var $targetDropdown = $(el).parent().find(".asi-main-menu-dropdown");
    var heights = [];
    var maxHeight;
    $targetDropdown.find(".asi-dropdown-menu-section-list").each(function(){
      if ($(this).is(':visible'))
        heights.push($(this).height());
    });
    if(heights.length > 0) {
      maxHeight = Math.max.apply(Math, heights);
      if($asiDropdownSaveFooter.is(':visible')) maxHeight += $asiDropdownSaveFooter.height();
      $targetDropdown.find(".menu-content").height(maxHeight+"px");
    }
  }
  $(".asi-main-menu-list-item").on("mouseenter touch", function(e) {
    //var thisLink = $(this).first('a');
    //setMainMenuInnerHeight(thisLink);
  });

  function showAimMenu(row) {
    $(row).find('.asi-main-menu-dropdown').show(0, function() {
      var thisLink = $(row).find('a');
      setMainMenuInnerHeight(thisLink);
    });
  };

  function hideAimMenu(row) {
    $(row).find('.asi-main-menu-dropdown').hide();
  };

  $('.asi-main-menu-left, .asi-main-menu-right').menuAim({
    activate: showAimMenu,
    deactivate: hideAimMenu,
    exitMenu: function() { return true; },
    submenuDirection: "below"
  });


  //this section sets up the jQuery Menu Aim plugin, which enhances the way drop down menus
  //show and hide. This helps prevent flickering, making the menu appear to persist
  //when inside of any menu in the nav.
  var $leftMenu = $(".asi-main-menu-left");
  var $rightMenu = $(".asi-main-menu-right");
  var lastLeftMenu;
  var lastRightMenu;

  //must declare both sides, there are two, L and R
  $(".asi-main-menu-left").menuAim({
    activate: activateLeftSubmenu,
    deactivate: deactivateSubmenu,
    exitMenu: deactivateAllSubmenus,
    rowSelector: "> li",
    submenuSelector: "*",
    submenuDirection: "below"
   });

   $(".asi-main-menu-right").menuAim({
     activate: activateRightSubmenu,
     deactivate: deactivateSubmenu,
     exitMenu: deactivateAllSubmenus,
     rowSelector: "> li",
     submenuSelector: "*",
     submenuDirection: "below"
    });

    //fired off when submenu is activate.
    function activateLeftSubmenu(row) {
     var $row = $(row),
         submenuId = $row.data("submenuId"),
         $submenu = $("#" + submenuId),
         height = $leftMenu.outerHeight(),
         width = $leftMenu.outerWidth();
     lastLeftMenu = row;
     $submenu.css({display: "block"});
    }

    function activateRightSubmenu(row) {
     var $row = $(row),
         submenuId = $row.data("submenuId"),
         $submenu = $("#" + submenuId),
         height = $rightMenu.outerHeight(),
         width = $rightMenu.outerWidth();
     lastRightMenu = row;
     $submenu.css({display: "block"});
    }

   function deactivateSubmenu(row) {
       var $row = $(row),
           submenuId = $row.data("submenuId"),
           $submenu = $("#" + submenuId);
       $submenu.css("display", "none");
   }

   function deactivateAllSubmenus() {
      $.each($(".asi-main-menu-dropdown"), function(index,item) {
        $(item).css("display", "none");
      });
   }

   //due to the overlap of the logo decativate and activate do not work well with this overlap.
   //so on both left and right menus, this deactivates both the last left and right menus that were active
   $(".asi-logo").on('mouseenter', function() {
    deactivateSubmenu(lastLeftMenu);
    deactivateSubmenu(lastRightMenu);
   })

   //due to the overlap of the logo decativate and activate do not work well with this overlap.
   //so on both left and right menus, this detects the mouse offsetX when the user leaves to logo,
   //and activates the appropriate left or right menu.
   $(".asi-logo").on('mouseleave', function(e) {
     if(e.offsetX<=0) {
      activateLeftSubmenu(lastLeftMenu);
    }else if(e.offsetX>0) {
      activateRightSubmenu(lastRightMenu);
    }
   });

});
