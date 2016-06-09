$(document).ready(function() {
	$("#todo-input").keyup(function(e) {
		if (e.keyCode ===13) {
			addToList()

		}
		

	});

});

function addToList (value) {
	var li=$("<li></li>").html(value);

}

