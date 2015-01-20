$(document).on('ready', function() {

	$( "#form" ).submit(function(e){
		console.log("Form submitted");

		$("#name").text($("#form-name").val());
		$("#bio").text($("#form-bio").val());
		$("#books").text($("#form-books").val());
		$("#libraries").text($("#form-libraries").val());

		e.preventDefault();
	})
  
});