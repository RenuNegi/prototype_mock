$(document).ready(function() {
  //tab panel functionality
  $("li[role='tab']").click(function() {
    $("li[role='tab']").attr("aria-selected", "false");
    $(this).attr("aria-selected", "true");
    var tabpanid = $(this).attr("aria-controls");
    var tabpan = $("#" + tabpanid);
    $("div[role='tabpanel']").attr("aria-hidden", "true");
    tabpan.attr("aria-hidden", "false");
  });

  //maga_Nav hamburger functionality

  var $button = $(".btn__hamburger");
  var isMenuOpen = false;
  var elementToToggle = $(".header--collapsible");
  var isHidden = $(".header__logoBox");

  $button.on("click", function() {
    isMenuOpen = !isMenuOpen;

    $button.attr("aria-expanded", isMenuOpen);
    elementToToggle.toggle();
  });

  $(window).resize(function() {
    globalResize();
  });

  var globalResize = function() {
    var windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
      elementToToggle.hide();
      isHidden.addClass("hidden");
    } else {
      elementToToggle.show();
      isHidden.removeClass("hidden");
    }
  };

  globalResize();
});
