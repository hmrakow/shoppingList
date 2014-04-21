// JavaScript Document

$(document).ready(function(){
	
	//if list is empty let alert user
	
	
	//add item to list
	 $("button").on("click", getInput);
	 
	//add item to list triggered on Enter
	$(document).on("keydown", function(e) {
    	if(e.keyCode === 13) {
       	 	getInput();
    	}
	});
 
 
	// Obtaining input and then calling addItem() with the input
	function getInput() {
    	var listInput = $(".listInput");
    	var input = listInput.val();
         	
			addItem(input);
    	
	}

	function addItem() {     
    	var content = "<div class=\"answersArea\">" + " " + "</div>";
   		 $(".answersWrapper").append(content); 
	}
	// getInput function
	function getInput() {
    	var listInput = $(".listInput").val(); //gets value of input
	}
	
	//remove object from list
	$(".answersArea").dblclick(function(){
		$(this).hide();
	});
	
	//cross out item on list
	$(".answersArea").on('click', function(){
		$(this).addClass("lineThrough");		
	});
	
	//clear list
	$(".clearListBtn").on('click', function(){
		$(".answersArea").remove();		
	});
	
	//re-arrange items using jquery ui
	
});