$(document).ready(function () {
    $('.menu .menu-item-has-child .toggle').click(function () {
        $(this).toggleClass('show');

        if ($(this).hasClass('show')) {
            $(this).next('.sub-menu').slideDown(300);
        } else {
            $(this).next('.sub-menu').slideUp(300);
        }
    });
    if ($(window).width() < 1024) {
        $('.menu-bars').click(function () {
            $('.mobile-sidebar').toggleClass('mobile-sidebar-toggle');
            $('.menu-bars-close').toggleClass('menu-bars-close--toggle');
        });

        $('.menu-bars-close,.mobile-sidebar-close').click(function () {
            $('.mobile-sidebar').removeClass('mobile-sidebar-toggle');
            $('.menu-bars-close').removeClass('menu-bars-close--toggle');
        });
        $(window).scroll(function () {
            var pos_body = $('html,body').scrollTop();
            if (pos_body > 80) {
                $('.header').addClass('stuck');
            } else if (pos_body <= 0) {
                $('.header').removeClass('stuck');
            }
        });
    }
    if ($(window).width() > 1024) {
        $(window).scroll(function () {
            var pos_body = $('html,body').scrollTop();
            if (pos_body > 170) {
                $('.header').addClass('stuck');
            } else if (pos_body <= 0) {
                $('.header').removeClass('stuck');
            }
        });
        $('.box-product-media .box-product-media__image').hover(
            function () {
                $(this).next('.box-product-media__tooltip').addClass('toggle');
            },
            function () {
                $(this).next('.box-product-media__tooltip').removeClass('toggle');
            }
        );
        $('.box-product-media__tooltip').hover(
            function () {
                $(this).addClass('toggle');
            },
            function () {
                $(this).removeClass('toggle');
            }
        );
    }
    $('.slider-home,.customer-review-list').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        stagePadding: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        navText: [
            "<i class='fal fa-angle-left'></i>",
            "<i class='fal fa-angle-right'></i>",
        ],
        responsive: {
            0: {
                nav: false,
            },
            768: {},
        },
    });
    $('.product-lists.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        stagePadding: 15,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        navText: [
            "<i class='fal fa-angle-left'></i>",
            "<i class='fal fa-angle-right'></i>",
        ],
        responsive: {
            0: {
                items: 2,
                nav: false,
                margin: 10,
                stagePadding: 10,
            },
            768: {
                items: 3,
                nav: true,
            },
            992: {
                items: 3,
                nav: true,
            },
            1200: {
                items: 3,
                nav: true,
            },
        },
    });
    $('.customer-brand-list').owlCarousel({
        items: 6,
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        stagePadding: 15,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        navText: [
            "<i class='fal fa-angle-left'></i>",
            "<i class='fal fa-angle-right'></i>",
        ],
        responsive: {
            0: {
                items: 2,
                nav: false,
                margin: 15,
            },
            768: {
                items: 4,
                margin: 15,
                nav: false,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6,
            },
        },
    });
    $('.news-fashion-list').owlCarousel({
        items: 3,
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        stagePadding: 15,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        navText: [
            "<i class='fal fa-angle-left'></i>",
            "<i class='fal fa-angle-right'></i>",
        ],
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 15,
            },
            768: {
                items: 2,
                margin: 15,
                nav: false,
            },
            992: {},
        },
    });
});
