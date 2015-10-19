$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	//$("img, a").on("dragstart", function(event) { event.preventDefault(); });


    $(".slider").owlCarousel({
        items : 1,
        nav : true,
        navText : "",
        loop : true,
        autoplay : true,
        autoplayHoverPause : true,
        fluidSpeed : 600,
        autoplaySpeed : 600,
        navSpeed : 600,
        dotsSpeed : 600,
        dragEndSpeed : 600
    });



	$(".parallax").myParallax({
		"speed" : "30"
	});

// tooltip
	$('.tooltip').tooltipster();



	//прокрутка страницы

	// hide #back-top first
	$("#back-top").hide();
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 5000);
			return false;
		});
	});

	// прокрутка страницы
	//<!--Скрипт привязки меню к верху при прокрутке-->

	var $menu = $("#menu");
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 90 && $menu.hasClass("default") ){
			$menu.removeClass("default").addClass("fixed");
		} else if($(this).scrollTop() <= 90 && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed").addClass("default");
		}
	});//scroll
//<!--Скрипт привязки меню к верху при прокрутке-->
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
