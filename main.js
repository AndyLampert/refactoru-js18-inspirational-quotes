$(document).on('ready', function() {
	$('#submit-button').on('click', function(){
		// take the #input-author
		// take the #input-quote
		// put them into .main-quotes-container
	});
	// checking for a valid input
	var isValid = validateInput($('[data-validation="required"]'));	  
});

// NOTES
// You have some Javascript data (primitive value, array, object, etc)
// var numDocs = 10;

// Use jQuery to create a new DOM element.
// var messageEl = $("<p>You have {0} documents.</p>".supplant([numDocs]));

// Add the DOM element to the page.
// $("body").append(messageEl);