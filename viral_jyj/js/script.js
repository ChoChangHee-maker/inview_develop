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

});