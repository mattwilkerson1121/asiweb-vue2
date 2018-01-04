$(function() {
  var mobileFoooterAccordionPanels = ["asi-mobile-footer-shop-footer-item", "asi-mobile-footer-care-footer-item", "asi-mobile-footer-familiarize-footer-item"];

  $(".asi-mobile-footer-accordion-header").on("click", function(){
    var className = "asi-mobile-footer-accordion-expanded";
    var id = $(this).parent().attr("id");
    var $panel = $("#"+id);
    var open = $panel.find("ul").hasClass(className);
    var panelH = $panel.find("ul").height();
    if(open) {
      $panel.find("ul").removeClass(className).slideUp(panelH);
      $panel.find(".asi-arrow").removeClass(className);
    }else{
      mobileFoooterAccordionPanels.forEach(function(el,index){
        if(mobileFoooterAccordionPanels.indexOf(id) == index) {
          $("#"+id).find("ul").addClass(className).slideDown(panelH);
          $("#"+id).find(".asi-arrow").addClass(className);
        }else{
          $("#"+mobileFoooterAccordionPanels[index]).find("ul").removeClass(className).slideUp(panelH);
          $("#"+mobileFoooterAccordionPanels[index]).find(".asi-arrow").removeClass(className);
        }
      });
    }
  });

});
