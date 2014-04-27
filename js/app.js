// JavaScript Document

$(document).ready(function(){
	$("#addItemBtn").click (function(){
		var content = $("#listInput").val();
		var addItem = $('<div class="answersArea"></div>').text(my_text);
		//add line through
		addItem.on('click', function(){
			$(this).toggleClass("lineThrough");
		});
		//remove item
		addItem.on('dblclick', function(){
			$(this).fadeOut('fast');
		});
		
		//clear list
		$(".clearListBtn").on('click', function(){
			$(".answersArea").remove();		
		});


		if (my_text!=""){
			$("#answersWrapper").append(content);
			$("#listInput").val("");
		}

		else{alert("Type an item in before you add it.")}
	});
  
  $(document).keypress(function(e){
    if(e.which == 13){
    	var content = $("#listInput").val();
		var addItem = $('<div class="answersArea"></div>').text(my_text);
			//add line through
			addItem.on('click', function(){
				$(this).toggleClass("lineThrough");
			});
			//remove item
			addItem.on('dblclick', function(){
				$(this).fadeOut('fast');
			});
			
			//clear list
			$(".clearListBtn").on('click', function(){
				$(".answersArea").remove();		
			});


			if (my_text!="")
			{
				$("#answersWrapper").append(content);
				$("#listInput").val("");
			}
			//warning to enter in content
			else 
			{
				alert("Type an item in before you add it.")
			}
    }
	});
});

