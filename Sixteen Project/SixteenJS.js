//on click of nav
$(".nav").click(function(e){
// We want to select the mobile menu 
//Animate it on screen
    $("#mobileMenu").animate({
       right:0 
    },500);
});

//On click of any of the mobile nav links
$(".mobilenavbar").click(function(e){
    //hide the mobileMenu
    $("#mobileMenu").animate({
        right:"-100%"
    },500);
});

