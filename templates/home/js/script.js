$(document).ready(function () {
  $(".slider-image-left").owlCarousel({
    items: 1,
    lazyLoad: true,
    navigation: false,
    autoplay: true,
    addClassActive: true,
    afterInit: SetOwlCarouselFirstLast,
    afterAction: SetOwlCarouselFirstLast,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [768, 1],
    itemsTabletSmall: [480, 1],
    itemsMobile: [360, 1],
    pagination: false,
    navigationText: ["", ""],
    lazyEffect: "fade",
  });
  $(".slider-image-right").owlCarousel({
    items: 1,
    lazyLoad: true,
    navigation: true,
    autoplay: true,
    addClassActive: true,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [768, 1],
    itemsTabletSmall: [480, 1],
    itemsMobile: [360, 1],
    navigation: false,
    navigationText: ["", ""],
    lazyEffect: "fade",
  });
  $(".slider-box-prj").owlCarousel({
    items: 4,
    lazyLoad: true,
    navigation: true,
    pagination: false,
    autoplay: true,
    addClassActive: true,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [768, 1],
    itemsTabletSmall: [480, 1],
    itemsMobile: [360, 1],
    navigationText: [
      "<i class='fa fa-long-arrow-left'></i>",
      "<i class='fa fa-long-arrow-right'></i>",
    ],
  });
  function SetOwlCarouselFirstLast(el) {
    el.find(".owl-item").removeClass("first");
    el.find(".owl-item.active").first().addClass("first");
    el.find(".owl-item").removeClass("last");
    el.find(".owl-item.active").last().addClass("last");
  }
  $(".bar-icon-menu").click(function () {
    $(".nav-menu-abs").toggleClass("hidden");
  });
});
