function addListItem() {
    var text = $("#newListItem").val();
    $("#grocery").append('<ul>'+text+'</ul>');
}
$(function(){
   $("#addTask").on('click', addListItem); 
});