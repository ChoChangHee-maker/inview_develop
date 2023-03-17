$(document).ready(function () {
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

  /* swiper_P004 */
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

  /* swiper_P005 public */
  var swiper = new Swiper(".public_swiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  /* swiper_P005 strength */
  var swiper = new Swiper(".strength_swiper", {
    slidesPerView: "auto",
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});
