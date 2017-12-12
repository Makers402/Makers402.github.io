/*
To use this function, pass in the entire text string from your calculator
    ex: var result = calculate(textStringHere);
It will return the math result for you to display
*/


var resetNumber = 0;
var setValue = 0;

$(".clear").click(function(){
   resetNumber(0); 
});
$(".calcButton calculatorNumber").click(function(e){
 var pressedButton = $(this).val().append();
    if (pressedButton === 0 + 1){
        setValue = 0;
    } else {
        $(this).val(pressedButton).append(".calcText").text();
    }
    
});







function calculate(input){
    var result = "";
    try{
        input = input.replace(" ", "").replace("--", "+");
        result = eval(input).toString();
        var decimalPos = result.indexOf(".");
        if (decimalPos > 11 && result.length > 11){
            result = result.substr(0, decimalPos);
        }else if (decimalPos > 0 ){
            result = result.substr(0, decimalPos) + result.substr(decimalPos, 11-decimalPos);
        }
    }catch(e){
        console.log(e);
        result = "ERROR";
    }
    return result;
}
// On click of any of the .calculatorNumber or .calculatorOperator buttons

/*

1. On click of any of the .calculatorNumber or .calculatorOperator buttons you need
to check if the current #calcText span's text is equal to 0.
    If the text is equal to 0, set the text equal to the clicked button's text.
    Otherwise if the text is NOT equal to 0, add the clicked button's text to the display after the existing text.
2. On click of the .calculatorClear button you should set the #calcText span's text to 0.
3. On click of the .calculatorEquals button, call the calculate function as described above the function definition and display the returned result

*/



