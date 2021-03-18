$(window).resize(function() {
	$(".main").css("padding-top", $(".navegador").css("height"));
})

// General
$(document).ready(function () {
	$(".main").css("padding-top", $(".navegador").css("height"));
});

// Funcion Slider
$(document).ready(function() {
	var imgItem = $(".slider li").length;
	var	imgPos = 1;

	for (i = 1; i <= imgItem; i++) {
		$(".selectores").append("<li><span class='fas fa-circle'></span></li>");
	}

	$(".slider > li").hide();
	$(".slider > li:first").show();

	$(".selectores li").css("color", "rgba(10, 59, 91, .8)");
	$(".selectores li:first").css("color", "#fff");

	$(".selectores li").click(paginacion);
	$(".right").click(nextPag);
	$(".left").click(PrevPag);

	// Funciones

	function paginacion() {
		var numero_pag = $(this).index() + 1;
		console.log(numero_pag)

		$(".slider > li").hide();
		$(".slider > li:nth-child("+numero_pag+")").fadeIn(800);

		$(".selectores li").css("color", "rgba(10, 59, 91, .8)");
		$(this).css("color", "#fff");
	};

	function nextPag() {
		if (imgPos <= imgItem) {
			imgPos++
		}

		if (imgPos > imgItem) {
			imgPos = 1;
		}
		selectores = imgPos;

		$(".slider > li").hide();
		$(".slider > li:nth-child("+imgPos+")").fadeIn(800);

		$(".selectores li").css("color", "rgba(10, 59, 91, .8)");
		$(".selectores li:nth-child("+selectores+")").css("color", "#fff");
	}

	function PrevPag() {
		if (imgPos <= imgItem) {
			imgPos--
		}

		if (imgPos == 0) {
			imgPos = imgItem;
		}
		selectores = imgPos;

		$(".slider > li").hide();
		$(".slider > li:nth-child("+imgPos+")").fadeIn("fast");

		$(".selectores li").css("color", "rgba(10, 59, 91, .8)");
		$(".selectores li:nth-child("+selectores+")").css("color", "#fff");
	}

	setInterval(function() {
		nextPag()
	}, 10000);
});

