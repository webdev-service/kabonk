(function ($) {
    "use strict";
    $(window).on("load", function () {
        var img = $(".bg-img");
        img.css("background-image", function () {
            var bg = "url(" + $(this).data("background") + ")";
            return bg;
        });
    });
    $(document).ready(function () {
        if ($(".wow").length) {
            var wow = new WOW({
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: false,
                live: true,
            });
            wow.init();
        }
        $(".navbar-toggler").on("click", function () {
            $(this).toggleClass("toggle-active");
            $("#mainNav").addClass("nav-bg-active");
        });
        $(".language-select").niceSelect();
        $(window).on("scroll", function () {
            var scroll = $(window).scrollTop();
            if ((scroll > 30) | (scroll == 30)) {
                $("header").addClass("wow animate__animated animate__fadeInDown box_shadow");
            } else {
                $("header").removeClass("wow animate__animated animate__fadeInDown box_shadow");
            }
        });
        var clientSlider = $(".client__logo__wrapper");
        clientSlider.owlCarousel({
            loop: true,
            margin: 24,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            items: 5,
            responsive: {
                0: {
                    items: 3,
                },
                576: {
                    items: 3,
                },
                768: {
                    items: 5,
                },
            },
        });
        var choiceSlider = $(".choice__slider");
        choiceSlider.owlCarousel({
            loop: true,
            margin: 24,
            center: true,
            stagePadding: 12,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            items: 6,
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 4,
                },
                1400: {
                    items: 5,
                },
                1800: {
                    items: 6,
                },
            },
        });
        var screenSlider = $(".shot__slider");
        screenSlider.owlCarousel({
            loop: true,
            margin: 24,
            center: true,
            stagePadding: 12,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            items: 5,
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 4,
                },
                1400: {
                    items: 5,
                },
            },
        });
        $(".next").click(function () {
            screenSlider.trigger("next.owl.carousel");
        });
        $(".prev").click(function () {
            screenSlider.trigger("prev.owl.carousel");
        });
        var ScrollTop = $(".scrollToTop");
        $(window).on("scroll", function () {
            if ($(this).scrollTop() < 500) {
                ScrollTop.removeClass("active");
            } else {
                ScrollTop.addClass("active");
            }
        });
        $(".scrollToTop").on("click", function () {
            $("html, body").animate({
                scrollTop: 0,
            }, 500);
            return false;
        });
    });
})(jQuery);