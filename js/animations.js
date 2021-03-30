$(document).ready(function () {
	var colores = ["#F65EFF", "#B856E8", "#A66BFF", "#6856E8", 										"#5E75FF", "#5779FF", "#57D3FF", "#4FE865",
							"#AFFF57", "#5275FF"];

	for (i = 1; i <= $(".cuadro").length; i++) {
		var num = Math.floor(Math.random() * colores.length),
			fondo = colores[num];

		$(".cuadro#ind-"+i+"").css("background", fondo);
	}

	// ========================================================
	// Funciones
	// ========================================================

	// Animacion Rebote - Bounce ===================
	$(".bounceRight-anim").on("mouseover", function () {
		var valMov = "300px"; 
		$(this).animate({left: "+="+valMov+""}, 5);
		$(this).animate({left: "-="+valMov+""}, "fast");

		var valRebt = "10px";
		$(this).animate({left: "+="+valRebt+""}, 50);
		$(this).animate({left: "-="+valRebt+""}, 50);
	});

	$(".bounceLeft-anim").on("mouseover", function () {
		var valMov = "300px"; 
		$(this).animate({right: "+="+valMov+""}, 5);
		$(this).animate({right: "-="+valMov+""}, "fast");

		var valRebt = "10px";
		$(this).animate({right: "+="+valRebt+""}, 50);
		$(this).animate({right: "-="+valRebt+""}, 50);
	});

	$(".bounceUp-anim").on("mouseover", function () {
		var valMov = "300px"; 
		$(this).animate({bottom: "+="+valMov+""}, 5);
		$(this).animate({bottom: "-="+valMov+""}, "fast");

		var valRebt = "10px";
		$(this).animate({bottom: "+="+valRebt+""}, 50);
		$(this).animate({bottom: "-="+valRebt+""}, 50);
	});

	$(".bounceDown-anim").on("mouseover", function () {
		var valMov = "300px"; 
		$(this).animate({top: "+="+valMov+""}, 5);
		$(this).animate({top: "-="+valMov+""}, "fast");

		var valRebt = "10px";
		$(this).animate({top: "+="+valRebt+""}, 50);
		$(this).animate({top: "-="+valRebt+""}, 50);
	});

	$(".bounceDrop-anim").on("mouseover", function () {
		var valMov = "300px",
				valMov2 = "400px";
		$(this).animate({
			width: "+="+valMov2+"",
			height: "+="+valMov+""
		}, 80);

		$(this).animate({
			width: "-="+valMov2+"",
			height: "-="+valMov+""
		}, 50);

		var valRebt = "10px",
				valRebt2 = "20px";			
		$(this).animate({
			width: "+="+valRebt2+"",
			height: "+="+valRebt+""
		}, 50);

		$(this).animate({
			width: "-="+valRebt2+"",
			height: "-="+valRebt+""
		}, 100);
	});

	$(".bounceScale1-anim").on("mouseover", function () {
		var valMov = $(this).css("height"),
				valMov2 = $(this).css("width");
		$(this).animate({
			width: "-="+valMov2+"",
			height: "-="+valMov+""
		}, 80);

		$(this).animate({
			width: "+="+valMov2+"",
			height: "+="+valMov+""
		}, 50);

		var valRebt = "10px";
		$(this).animate({
			width: "+="+valRebt+"",
			height: "+="+valRebt+""
		}, 50);

		$(this).animate({
			width: "-="+valRebt+"",
			height: "-="+valRebt+""
		}, 100);
	});

	$(".bounceScale2-anim").on("mouseover", function () {
		var valMov = $(this).css("height"),
				valMov2 = $(this).css("width");
		$(this).animate({
			width: "+="+valMov2+"",
			height: "+="+valMov+""
		}, 100);

		$(this).animate({
			width: "-="+valMov2+"",
			height: "-="+valMov+""
		}, "fast");

		var valRebt = "10px";
		$(this).animate({
			width: "+="+valRebt+"",
			height: "+="+valRebt+""
		}, 100);

		$(this).animate({
			width: "-="+valRebt+"",
			height: "-="+valRebt+""
		}, 100);
	});
	//==============================================

	// Animacion Glide - Deslizamiento =============
	$(".glideUp-anim").on("mouseover", function () {
		var valMov = "200px"; 
		$(this).animate({bottom: "+="+valMov+""}, 1);
		$(this).animate({bottom: "-="+valMov+""}, "slow");

		var valRebt = "10px";
		$(this).animate({bottom: "+="+valRebt+""}, 50);
		$(this).animate({bottom: "-="+valRebt+""}, 50);
	});

	$(".glideDown-anim").on("mouseover", function () {
		var valMov = "200px"; 
		$(this).animate({top: "+="+valMov+""}, 1);
		$(this).animate({top: "-="+valMov+""}, "slow");

		var valRebt = "10px";
		$(this).animate({top: "+="+valRebt+""}, 50);
		$(this).animate({top: "-="+valRebt+""}, 50);
	});
	//==============================================

});