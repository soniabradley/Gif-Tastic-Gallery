$(function () {
	populateButtons(searchArray, 'searchButton', '#buttonsArea')
	console.log("hi");
})

var searchArray = ['Cat', 'Dog', 'Bird'];

function populateButtons(searchArray, classToAdd, areaToAddTo) {
	// need to empty area or else will create copies
	$(areaToAddTo).empty();
	// for loop 
	for (var i = 0; i < searchArray.length; i++) {
		// var a  = modify button element
		var a = $('<button>');
		a.addClass(classToAdd);
		a.attr('data-type', searchArray[i]);
		// text of our button is going to be dog, cat, bird
		a.text(searchArray[i]);
		$(areaToAddTo).append(a);

	}
}

$(document).on('click', '.searchButton', function () {
	$('#searches').empty();
	var type = $(this).data('type');
	var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + type + '&api_key=dc6zaTOxFJmzC&limit=10';
	// This is our AJAX request, type of method GET
	$.ajax({
			url: queryURL,
			method: 'GET'
		})
		// After we get a response from the server, we run a function which returns a response
		.done(function(response) {
		// exactly like our 6.3 exercise
		for(var i=0;i<response.data.length; i++){
			var searchDiv = $('<div class="search-item">');
			var rating = response.data[i].rating;
			var p = $('<p>').text('Rating: '+rating);
			var animated = response.data[i].images.fixed_height.url;
			var still = response.data[i].images.fixed_height_still.url;
			var image = $('<img>');
			image.attr('src',still);
			image.attr('data-still',still);
			image.attr('data-animated',animated);
			image.attr('data-state','still');
			image.addClass("searchImage");
			searchDiv.append(p);
			searchDiv.append(image);
			$('#searches').prepend(searchDiv);
		}
	})
})

// $(document).on('click','.searchImage',function(){
// 	var state= $(this).data('state');
// 	if(state =="still"){
// 		$(this).attr('scr',$(this).data('animated'));
// 		$(this).attr('data-state','animated');
// 	} else {
// 			$(this).attr('src',$(this).data('still'));
// 			$(this).attr('data-state','still');
// 	}
// })

$('#addSearch').on('click',function(){
	var newSearch = $('search-input').eq(0).val();
	console.log(newSearch);
	// searchArray.push(newSearch);
	// populateButtons(searchArray,'searchButton','#buttonsArea');
	// return false;
})