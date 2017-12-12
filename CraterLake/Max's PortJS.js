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
    $(".middle").css("background" , "url(https://photos.google.com/photo/AF1QipO6361yRKvmI-6BK4kBK2FmHbp1Iywuo0o_feXg)"
                    );
});