$(document).on('ready', function() {

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