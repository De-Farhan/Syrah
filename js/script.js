// navbar fixed js start
$(window).on("scroll", function () {
  let scrollamount = $(window).scrollTop();
  if (scrollamount > 100) {
    $("#navbar").addClass("nav-fixed");
  } else {
    $("#navbar").removeClass("nav-fixed");
  }
});
// navbar fixed js end

// // Add scrollspy to <body> start
let scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbar",
});
// // Add scrollspy to <body> end

// navbar collapse js start
$("#navbar ul li a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});
// navbar collapse js end
