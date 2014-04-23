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
	// delete icon removes .single-quote-container
	$(document).on('click','.fa',function(){
		// delete the .single-quote-container associated with this icon
		$(this).closest('.single-quote-container').remove();
	});
	$('#submit-button').on('click', function(){
		// variable declarations
		var quoteVal = $('#input-quote').val();
		var authorVal = $('#input-author').val();
		var mainQuoteContainer = $('.main-quotes-container');
		var singleQuoteContainer = $('<div class="single-quote-container"></div>');
		var newQuoteDiv = $('<div class="quote"></div>');
		var newAuthorDiv = $('<div class="author"></div>');
		var newDeleteIcon = $('<i class="fa fa-times"></i>');
		
		// text changing
		newAuthorDiv.text(authorVal);
		newQuoteDiv.text(quoteVal);

		// how to debug this?
		mainQuoteContainer.append(singleQuoteContainer);
		singleQuoteContainer.append(newQuoteDiv);
		singleQuoteContainer.append(newAuthorDiv);
		singleQuoteContainer.append(newDeleteIcon);

		// include validation
		if(quoteVal.length === 0){
		} 
		return false;
	});
});