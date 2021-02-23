$(function () {
  $('.top__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
  });

  $('.reviews__slider').slick({
    slidesToShow: 4,
    arrows: false,
    dots: true,
    slidesToScroll: 1,
  });
});
