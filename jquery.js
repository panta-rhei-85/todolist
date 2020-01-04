

// $(window).keypress(function(event){
	
// 	var keycode = (event.keyCode);
// 	if(keycode == '13'){
// 		alert('You pressed a "enter" key in textbox');	
// 	}

// });


var input = document.getElementById("new-text");
window.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("add").click();
    }
});


function addListItem() {
    var text = $("#new-text").val();
    $("#todolist").append('<li><input type="checkbox" class="done"/> '+text+' <button class="delete"><i class="fas fa-times"></i></li>');
    $("#new-text").val('');
}



function deleteItem() {
    $(this).parent().remove();
}

function finishItem() {
    if ( $(this).parent().css('textDecoration').includes('line-through') ) {
        $(this).parent().css('textDecoration', 'none');
    } else {
        $(this).parent().css('textDecoration', 'line-through');
    }
}



function deleteAll() { 
       $("#todolist").empty(); 
}


$(function() {
    $("#add").on('click' , addListItem); 
    $(document).on('click' , '.delete' , deleteItem);
    $(document).on('click' , '.done' , finishItem);
    $("#delete-all").on('click', deleteAll);
});
