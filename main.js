// step 1
// make a function that takes an object (quote object)
// that creates a quote div
// creates an author div
// using the values in the quote object
// add to the DOM

// biggest change is instead of retriving from input fields
// to retrieve from the data object

// step 2
// extract the functionality of creating quotes and adding them to the DOM
// and call that func for each quote in data object.

var data = [{
		author: 'Bronn',
		quote: 'You waste time trying to get people to love you, you’ll end up the most popular dead man in town.'
	},
	{
		author: 'Yggrit',
		quote: 'You\'re mine as I am yours. And if we die, we die. But first, we’ll live.'
	},
	{
		author: 'Tyrion',
		quote: 'Even a stunted, twisted, ugly little boy can look down over the world when he\'s seated on a dragon\'s back.'
	}
]



$(document).on('ready', function() {
	// delete icon
	$('.fa').on('click', function(){
		// delete the .single-quote-container associated with this icon
		$('.single-quote-container').remove();
	});
	// submit button
	$('#submit-button').on('click', function(){
		// take the #input-quote
		var quoteVal = $('#input-quote').val();
		// create new .quote div
		var newQuoteDiv = $('<div class="quote"></div>');
		// set its text to #input-quote
		var newDeleteIcon = $('<i class="fa fa-camera-retro"></i>');
		newQuoteDiv.text(quoteVal);
		$('.main-quotes-container').append(newQuoteDiv);
		$('.single-quote-container').append(newDeleteIcon);

		$('body').append(newDeleteIcon);

		// make sure #input-quote, #input-author is filled in
		if(quoteVal.length === 0){
			console.log("didn't input in quote field");
		} 

		// take the #input-author
		var authorVal = $('#input-author').val();
		// create new .author div
		var newAuthorDiv = $('<div class="author"></div>');
		// set text of new .author to #input-author input
		newAuthorDiv.text(authorVal);
		$('.main-quotes-container').append(newAuthorDiv);

		return false;
	});


// This list should update in real-time when quotes are added, 
// deleted, or rated.

	// checking for a valid input
	// var isValid = validateInput($('[data-validation="required"]'));	  
});

// Next step - validate input fields

// step 4
// User can click on the author of a quote to go to a separate 
// page/sceeen that shows all quotes from that person.

// var validateInput = function(input) {
// 		var allValid = true;
// 		input.each(function() {
// 			var inputValid = $(this).val() !== '';
// 			$(this).closest('.form-group').addClass(inputValid ? 'valid' : 'invalid');
// 			allValid &= inputValid;
// 		})
// 		return !!allValid;
// 	};