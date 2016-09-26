$(document).ready(function() {
	
	$("p").hide();
	$("#bookPic").hide();
	
	$("h1").click(function() {

		$(this).next().fadeToggle(1000);

	});
	
	/* start of jq02 how to use buttons and selectors */
	
	$("#testbutton").click(function() {
		/* $("#jq02").css("bakground-color","#0000FF"); */
		
	$("strong").css("background-color","#0000FF" );

});
});