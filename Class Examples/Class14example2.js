//On click of submit button
$("#submitAnswers").click(function(e){
	var counter = 0;
	//Get all the .questionAnswer inputs
	$(".questionAnswer").each(function(){
	//get the user answer
		var userAnswer = $(this).val();
	//get the correct user answer
		var correctAnswer = $(this).attr("answer");
	//compare values
		if(userAnswer == correctAnswer){
			counter++;
			$(this).prev().removeClass("wrong").addClass("correct");
	//if they got it correct make label green 
		}else{
			$(this).prev().removeClass("correct").addClass("wrong");
	//if the go it wrong make label red			
		}
})
	if(counter < $(".questionAnswer").length){
		$("#displayText").text("You got "+counter+" answer(s) right!");
	}else{
		$("#displayText").text("you got all of them right!");

	}
	
	});



