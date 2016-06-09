$(document).ready(function() {
	var url= "https://api.nytimes.com//svc/search/v2/articlesearch.json" + "?api-key=e5ee74bcf44e40169878577238aaf156";
	$(document).keypress(function(e){
		if (e.keyCode ==13 ) {
			var searched = $("#search-input").val();
			url=url + "&q=" + searched;

			$.ajax ({
				url: url,
				method: "GET",
				success: handleResponse,
				error: function(error) {
					alert("error!");
				}
			});
		}
	});
});

function handleResponse(response) {
	for (var i=0; i<response.response.docs.length; i++) {
		$("#list").append("<div>"+response.response.docs[i].headline.main+"</div>");
		console.log(response.response.docs[i].headline.main)
	}
}

