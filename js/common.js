$(window).scroll(function(){
    var st = $(this).scrollTop();
   $(".heder_text").css({
       "transform" : "translate(0%,"+ st/1.3 +"%)"
   });
});