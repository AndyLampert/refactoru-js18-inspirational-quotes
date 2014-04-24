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

var addQuote = function(quoteObj) {
	var mainQuoteContainer = $('.main-quotes-container');
	var singleQuoteContainer = $('<div class="single-quote-container"></div>');
	var newQuoteDiv = $('<div class="quote"></div>');
	var newAuthorDiv = $('<div class="author"></div>');
	var newDeleteIcon = $('<i class="fa fa-times fa-2x"></i>');

	// text changing
	newAuthorDiv.text(quoteObj.author);
	newQuoteDiv.text(quoteObj.quote);

	// DOM appends
	mainQuoteContainer.append(singleQuoteContainer);
	singleQuoteContainer.append(newQuoteDiv);
	singleQuoteContainer.append(newAuthorDiv);
	singleQuoteContainer.append(newDeleteIcon);
}

$(document).on('ready', function() {
	// next step is to make this a loop so that it works for any number of items in the array
	addQuote(data[0]);
	addQuote(data[1]);
	addQuote(data[2]);

	// delete icon removes .single-quote-container
	$(document).on('click','.fa',function(){
		// delete the .single-quote-container associated with this icon
		$(this).closest('.single-quote-container').remove();
	});

	// delegated event click handler for authors
	$(document).on('click', '.author', function(){
		// hide .author's that have a different value
		var currentAuthor = $(this).text();
		var filterVar = $('.single-quote-container').toArray().filter(function(item){
				// if the author matches the one we're searching for, return true
				var checkAuthor = $(item).find('.author').text()
				if(currentAuthor !== checkAuthor ){
					return true;
				}
				return false;
			});
		console.log(filterVar);

		for(var i=0;i<filterVar.length;i++){
			console.log($ (filterVar[i]) );
			$(filterVar[i]).hide();
		}
	});

	$('#submit-button').on('click', function(){
		// variable declarations
		var quoteVal = $('#input-quote').val();
		var authorVal = $('#input-author').val();

		// function callback
		addQuote({
			quote: quoteVal,
			author: authorVal 
		});

		// form validation
		if(quoteVal.length === 0 && authorVal === 0){
			console.log('you didn\'t enter anything!');
		} 
		return false;
	});
});