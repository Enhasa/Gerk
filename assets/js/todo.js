// check off list items with clicks

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click X to remove list item
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(600,function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		//grabbing text box input
		let todoText = $(this).val();
		$(this).val("");
		//creating a new list item to the list
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")

	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
});