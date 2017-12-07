$(".nav").click(function(e){
	$("#mobileMenu").animate({
		right:0
	},500);
});
$("#mobileMenu").click(function(e){
	$("#mobileMenu").animate({
		right: "-100%"
	},500);
});
$(".his").click(function(e){
	$(".middle").animate({
		background-image: "url(../images/Max-2.jpg)"
	},100);
});