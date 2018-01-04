$(function() {

  $('.asi-social-module-carousel-items').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    infinite: false,
    speed: 300,
    centerMode: false,
    centerPadding: 0,
    variableWidth: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          dots: true
        }
      }
    ]
  });

});
