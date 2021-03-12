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
  var elementToToggle = $(".header--topNav");
  var elementToToggle1 = $(".header--nav_container");
  var elementToToggle2 = $(".header--searchInput");

  $button.on("click", function() {
    isMenuOpen = !isMenuOpen;

    $button.attr("aria-expanded", isMenuOpen);
    elementToToggle.toggle();
    elementToToggle1.toggle();
    elementToToggle2.toggle();
  });

  $(window).resize(function() {
    var windowWidth = $(window).width();
    if (windowWidth <= 768) {
      elementToToggle.hide();
      elementToToggle1.hide();
      elementToToggle2.hide();
    } else {
      elementToToggle.show();
      elementToToggle1.show();
      elementToToggle2.show();
    }
  });
});
