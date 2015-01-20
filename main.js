$(document).on('ready', function() {

	// Set the form to have the current profile values
	$("#form-name").val($("#name").text());
	$("#form-bio").val($("#bio").text());
	$("#form-books").val($("#books").text());
	$("#form-libraries").val($("#libraries").text());


	// Update profile values on submit
	// $( "#form" ).submit(function(e){

	// 	$("#name").text($("#form-name").val());
	// 	$("#bio").text($("#form-bio").val());
	// 	$("#books").text($("#form-books").val());
	// 	$("#libraries").text($("#form-libraries").val());

	// 	// Prevent page from updating on submit
	// 	e.preventDefault();
	// })

	// "Auto-save" functionality
	$("#form-name").blur(function(){
		$("#name").text($("#form-name").val());
	})

	$("#form-bio").blur(function(){
		$("#bio").text($("#form-bio").val());
	})

	$("#form-books").blur(function(){
		$("#books").text($("#form-books").val());
	})

	$("#form-libraries").blur(function(){
		$("#libraries").text($("#form-libraries").val());
	})


	// Toggle visibility
	$( "#show-form" ).on("click", function(){
		$("#form-wrapper").toggleClass("visibility");
		
		// Toggle show/hide button text
		var text = $(this).text() == "Show Form" ? "Hide Form" : "Show Form";
		$(this).text(text);

	})
  
});