$(document).ready(function(){

  $(".owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    items: 1,
    dots: true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
  });
});

$(function () {
  'use strict'

  $("[data-trigger]").on("click", function () {
      var trigger_id = $(this).attr('data-trigger');
      $(trigger_id).toggleClass("show");
      $('body').toggleClass("offcanvas-active");
  });

  $(document).on('keydown', function (event) {
      if (event.keyCode === 27) {
          $(".navbar-collapse").removeClass("show");
          $("body").removeClass("overlay-active");
      }
  });

  $(".btn-close").click(function (e) {
      $(".navbar-collapse").removeClass("show");
      $("body").removeClass("offcanvas-active");
  });


 });
