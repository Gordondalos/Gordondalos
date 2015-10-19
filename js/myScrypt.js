$(document).ready(function () {
    var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
    var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;
    var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;

    $("a#I").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $('.'+elementClick).offset().top-100;
        if (is_safari) {
            $('body').animate({ scrollTop: destination }, 5000); //1100 - ñêîðîñòü
        } else {
            $('html').animate({ scrollTop: destination }, 5000);
        }
        return false;
    });

    $("a#skills").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $('.'+elementClick).offset().top-100;


        if (is_safari) {
            $('body').animate({ scrollTop: destination }, 5000); //1100 - ñêîðîñòü
        } else {
            $('html').animate({ scrollTop: destination }, 5000);
        }
        return false;
    });

    $("a#portfolio").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $('.'+elementClick).offset().top-100;
        if (is_safari) {
            $('body').animate({ scrollTop: destination }, 5000); //1100 - ñêîðîñòü
        } else {
            $('html').animate({ scrollTop: destination }, 5000);
        }
        return false;
    });

    $("a#experience").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $('.'+elementClick).offset().top-100;
        if (is_safari) {
            $('body').animate({ scrollTop: destination }, 5000); //1100 - ñêîðîñòü
        } else {
            $('html').animate({ scrollTop: destination }, 5000);
        }
        return false;
    });

    $("a#tech").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $('.'+elementClick).offset().top-1200;
        if (is_safari) {
            $('body').animate({ scrollTop: destination }, 5000); //1100 - ñêîðîñòü
        } else {
            $('html').animate({ scrollTop: destination }, 5100);
        }
        return false;
    });

    $("a#contact").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $('.'+elementClick).offset().top-100;
        if (is_safari) {
            $('body').animate({ scrollTop: destination }, 10000); //1100 - ñêîðîñòü
        } else {
            $('html').animate({ scrollTop: destination }, 10000);
        }
        return false;
    });



    //new WOW().init();

    // $('.lamp').addClass('wow bounceInLeft');
    // $('.myfoto').addClass('wow bounceInRight');
    // $('.skill').addClass('wow zoomIn');
    //
    //// $('.lamp').addClass('wow bounceInRight');
    // $('.green').addClass('wow rollIn');
    // $('.work').addClass('wow RotateInDownRight');
    // $('.contact').addClass('wow bounceInRight');


});