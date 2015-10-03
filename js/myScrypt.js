$(document).ready(function () {

    // Кликаю по ссылкам до перехода на блоки
    $("a#I").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $('.'+elementClick).offset().top-100;
        if ($.browser.safari) {
            $('body').animate({ scrollTop: destination }, 5000); //1100 - скорость
        } else {
            $('html').animate({ scrollTop: destination }, 5000);
        }
        return false;
    });
// что я делаю
    $("a#do").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $('.'+elementClick).offset().top-100;
        if ($.browser.safari) {
            $('body').animate({ scrollTop: destination }, 5000); //1100 - скорость
        } else {
            $('html').animate({ scrollTop: destination }, 5000);
        }
        return false;
    });
// уменя навыки
    $("a#skill").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $('.'+elementClick).offset().top-100;
        if ($.browser.safari) {
            $('body').animate({ scrollTop: destination }, 5000); //1100 - скорость
        } else {
            $('html').animate({ scrollTop: destination }, 5000);
        }
        return false;
    });
// опыт
    $("a#experience").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $('.'+elementClick).offset().top-100;
        if ($.browser.safari) {
            $('body').animate({ scrollTop: destination }, 5000); //1100 - скорость
        } else {
            $('html').animate({ scrollTop: destination }, 5000);
        }
        return false;
    });
// работы
    $("a#work").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $('.'+elementClick).offset().top-100;
        if ($.browser.safari) {
            $('body').animate({ scrollTop: destination }, 1100); //1100 - скорость
        } else {
            $('html').animate({ scrollTop: destination }, 1100);
        }
        return false;
    });
// контакты
    $("a#contact").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $('.'+elementClick).offset().top-100;
        if ($.browser.safari) {
            $('body').animate({ scrollTop: destination }, 10000); //1100 - скорость
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