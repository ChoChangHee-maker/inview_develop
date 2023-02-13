$(document).ready(function(){

  $(".vir_cont").hide();
  $(".vir_cont").first().show();
  $(".viral_tabs li").first().addClass("select");

  $(".viral_tabs li").on("click", function () {
    var active = $(this).find("a").attr("href");

    $(".vir_cont").hide();
    $(active).show();
    $(".viral_tabs li").removeClass("select");
    $(this).addClass("select");
  });

  /*swiper*/
  var swiper = new Swiper(".viral_swiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

});