$(document).mousemove(function(e){
    $('.box').offset({
       left:  e.pageX + 20,
       top:   e.pageY
    });
});

$(document).keypress(function(e){
	if (e.keyCode ==103 ) {
		$('#text').css('color', 'green')
	}
	else if (e.keyCode ==98 ) {
		$('#text').css('color', 'blue')
	}
});

$(document).ready(function() {
	var clickCount=0;

	$(document).click(function(e) {
		clickCount++;
		$("#number").html(clickCount)
	});
});
