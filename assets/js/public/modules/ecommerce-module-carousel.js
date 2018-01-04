$(function() {

  $('.asi-ecommerce-module-carousel-items').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    focusOnSelect: true,
    infinite: true,
    speed: 200,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
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
