//specify HTML id for first name
//specify HTML id for last name
//print first and last name to console

$(document).ready(function(){

	// var $("#first").click(GetFormValues);
	// var $("#last").click(GetF)

	// This was the way from class
	$("#firstbutton").click(function() {
		console.log($("#first").val());
		console.log($("#last").val());
	})


// This is another way...we probably won't use this anymore
// var getFormValues = function() {
	
// }

//specify HTML id that we want to change color
//say the color you want to change it to

	$("#secondbutton").click(function() {
		$("#color-div").css({'color':'red',})
	})


});