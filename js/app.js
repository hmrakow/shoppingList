// JavaScript Document

$(document).ready(function(){
	
	//if list is empty let alert user
	
	
	//add item to list
	$(".listInput").val();
	
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