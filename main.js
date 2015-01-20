$(document).on('ready', function() {

	$( "#form" ).submit(function(e){
		console.log("Form submitted");

		$("#name").text($("#form-name").val());
		$("#bio").text($("#form-bio").val());
		$("#books").text($("#form-books").val());
		$("#libraries").text($("#form-libraries").val());

		e.preventDefault();
	})

	$( "#show-form" ).on("click", function(){
		$("#form-wrapper").toggleClass("visibility");
		var text = $(this).text() == "Show Form" ? "Hide Form" : "Show Form";
		$(this).text(text);

	})
  
});