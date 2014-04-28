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
	},
	{
		author: 'Cersei',
		quote: 'When you play the game of thrones, you win or you die. There is no middle ground.'
	}
]

var addQuote = function(quoteObj) {
	var mainQuoteContainer = $('.main-quotes-container');
	var singleQuoteContainer = $('<div class="single-quote-container"></div>');
	var newQuoteDiv = $('<div class="quote"></div>');
	var newAuthorDiv = $('<div class="author"></div>');
	var newDeleteIcon = $('<i class="fa fa-times delete fa-2x"></i>');

	// create star ratings
	var starRating = $('<div class="rating"><span class="star"><i class="fa fa-star"></i></span><span class="star"><i class="fa fa-star"></i></span><span class="star"><i class="fa fa-star"></i></span><span class="star"><i class="fa fa-star"></i></span><span class="star"><i class="fa fa-star"></i></span></div>');

	// append stars to each quote
	singleQuoteContainer.append(starRating);

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
	for(var i=0;i<data.length;i++){
		addQuote(data[i]);
	}

	// delete icon removes .single-quote-container
	$(document).on('click','.delete',function(){
		// delete the .single-quote-container associated with this icon
		$(this).closest('.single-quote-container').remove();
		// add in an undo option
		
	});

	// delegated event click handler for authors
	$(document).on('click', '.author', function(){
		// hide .author's that have a different value
		var currentAuthor = $(this).text();
		var filterVar = $('.single-quote-container').toArray().filter(function(item){
				// if the author matches the one we're searching for, return true
				var checkAuthor = $(item).find('.author').text();
				if(currentAuthor !== checkAuthor ){
					return true;
				}
				return false;
			});

		// prints out the single-quote-container's that don't have the same author (as the one clicked on)
		console.log(filterVar);

		// hide the containers that don't have the same author as the one clicked on
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
	$(document).on('click', '.star', function() {
		// grabs the index of the star clicked on
		var clickedStar = $(this).index();
		
		// removes the golden star (.addedStar) from all .star's when a .star is clicked
		$( this )
			.closest('.single-quote-container')
			.find('.star')
			.removeClass('addedStar');

		// adds golden star to the clicked star
		// PLUS all the .star's less than the clicked one
		// AND adds one more (to include current)
		$( this )
			.closest('.single-quote-container')
			.find('.star:lt(' + clickedStar + ')')
			.add( $(this) )
			.addClass('addedStar');
	});
	// click handler for ascending sort
	$(document).on('click','#asc-btn',function(){
		// sort the quotes based on highest rating 
			var sortAsc = $('.single-quote-container')
				.toArray()
				.sort(function(a,b){
					// finds the number of golden stars in a given container
					var aStars = $(a).find('.addedStar').length;
					var bStars = $(b).find('.addedStar').length;
					// highest to lowest
					return bStars - aStars; 
				});  // takes compare function, a to b
				// logs the order of added stars (greatest to least)
				console.log(sortAsc);
				for (var i = 0; i < sortAsc.length; i++) {
					$('.main-quotes-container').append(sortAsc[i]);
				};

	});
	// click handler for descending sort
	$(document).on('click','#dsc-btn',function(){
		// sort the quotes based on lowest rating
		var sortDesc = $('.single-quote-container')
			.toArray()
			.sort(function(a,b){
				var aStars = $(a).find('.addedStar').length;
				var bStars = $(b).find('.addedStar').length;
				return aStars - bStars;
			});
			
			console.log(sortDesc);
			for (var i = 0; i < sortDesc.length; i++) {
				$('.main-quotes-container').append(sortDesc[i]);
			};
	});

	// click handler to open the lightbox (random quote)
	$(document).on('click','#random-quote-btn',function(){
		$('.lightbox-container').css('display','block');

		// variable declarations for lightbox
		var randomQuote = $('.single-quote-container').length-1;
		var randomCalc = Math.round(Math.random()*randomQuote);
		var grabRandomQuote = $('.single-quote-container').eq(randomCalc);
		var randomQuoteText = grabRandomQuote.find('.quote').text();
		var randomAuthorText = grabRandomQuote.find('.author').text();

		// logs the author and quote text values of a random quote container
		console.log(randomAuthorText);
		console.log(randomQuoteText);

		// print out the random number
		console.log(randomCalc);

		$('.lightbox-container').find('.author').append(randomAuthorText);
		$('.lightbox-container').find('.quote').append(randomQuoteText);
		
		// randomQuoteText
		console.log('======================');
		console.log(grabRandomQuote, (grabRandomQuote).find('.quote').text());

		// append quote elements to the lightbox

		$('.lightbox-container').find('.quote').text();
		$('.lightbox-container').find('.author').text();
	});

	// click handler to close the lightbox
	$(document).on('click','.close-lightbox-btn',function(){
		// bring up a lightbox when user clicks on random quote
		$(this).closest('.lightbox-container').css('display','none');
		
		// clear the lightbox text
		$('.lightbox-container').find('.author').text('');
		$('.lightbox-container').find('.quote').text('');

	});

});

// PROBLEMS
// sometimes the random quote shows nothing
// if I click an author's name inside the lightbox, it formats the data on the page
// also need to remove the hover state on the author in the lightbox

