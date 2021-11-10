$(function () {
  $('.slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  $('.stock__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false
  });
});
