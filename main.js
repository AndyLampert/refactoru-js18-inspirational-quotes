$(document).on('ready', function() {
	$('#submit-button').on('click', function(){
		// take the #input-quote
		var quoteVal = $('#input-quote').val();
		// create new .quote div
		var newQuoteDiv = $('<div class="quote"></div>');
		// set its text to #input-quote
		newQuoteDiv.text('hi2')
		$('.main-quotes-container').append(newQuoteDiv);

		// take the #input-author
		var authorVal = $('#input-author').val();
		// create new .author div
		var newAuthorDiv = $('<div class="author"></div>');
		// set text of new .author to #input-author input
		newAuthorDiv.text('hi');
		$('.main-quotes-container').append(newAuthorDiv);

		return false;
	});
	// checking for a valid input
	// var isValid = validateInput($('[data-validation="required"]'));	  
});

// NOTES
// You have some Javascript data (primitive value, array, object, etc)
// var numDocs = 10;

// Use jQuery to create a new DOM element.
// var messageEl = $("<p>You have {0} documents.</p>".supplant([numDocs]));

// Add the DOM element to the page.
// $("body").append(messageEl);