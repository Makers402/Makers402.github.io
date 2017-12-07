//have the computer come up with random number 1-100
var computerNumber = randomNumber(1,100);
var counter = 0;
var gameOver = false;
//have some click button 
$("#tryNumber").click(function(e){
	if(!gameOver){
	//read in whatever number the user guessed
	var userNumber = $("#guess").val();
	var diff = Math.abs(computerNumber - userNumber);
	//compare their guess with the computer number
	if(computerNumber == userNumber){
		//display text if correct or incorrect
		$("#result").text("You guessed the number correctly");
		gameOver = true;
	}else if(diff <= 5){
		$("#result").text("You're So HOT!!");
	}else if(diff <= 15){
    	$("#result").text("You're warmming up!!");
	} else {
		//display text if correct or incorrect
		$("#result").text("COLD!");
	}
	counter++;
	$("#counter").text("You've guessed "+counter+" time(s)");
	} else {
		$("#result").text("Already Won!!");
	}
});

$("#reset").click(function(e){
	 var min = $("#min").val();
	 var max = $("#max").val();
	 computerNumber = randomNumber(1,100);
	 counter = 0;
	 gameOver = false;
	 $("#counter").text("");
	 $("#result").text("");
	 $("#guess").val("");
}),
