/*function addListItem() {
    var text = $("#newListItem").val().addClass();
    $("#grocery").append('<ul>'+text+'</ul>');
}
$(function(){
   $("#addTask").on('click', addListItem); 
});*/
$("#addTask").click(function(e){
   var TaskName = $("#newListItem").val();
    var listOfChoice = $("#taskList").val();
    $("#"+listOfChoice).append("")
});