$(document).ready(function() {

  var path_theme = "bootswatch/3.0.3/";

  $("#theme").attr("href", path_theme + "default/bootstrap.min.css");
  $("body").attr("class", theme);

  $("#navbar-main .themes li").click(function() {
    var theme = $(this).attr("data-theme");

    if ($("body").hasClass(theme)) return;

    $("#navbar-main .themes li").removeClass("active");
    $(this).addClass("active");

    $("#theme").attr("href", path_theme + theme + "/bootstrap.min.css");
    $("body").attr("class", theme);
    $("#header-theme").text(theme);
  });

});
