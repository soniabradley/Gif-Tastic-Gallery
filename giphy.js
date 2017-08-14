
$(function(){
	populateButtons(searchArray,'searchButton','#buttonsArea')
	console.log("hi");
})

var searchArray = ['cats','dogs','birds'];

function populateButtons(searchArray,classToAdd,areaToAdd){
// need to empty area or else will create copies
	$(areaToAdd).empty();
	for (var i=0; i < searchArray.lenght; i++) {
// modify button element
		var a = $('<button>');
		a.addClass(classToAdd);
		a.attr('data-type', searchArray[i]);
		// text of our button is going to be dog, cat, bird
		a.text("searchArray[i]");
		$(areaToAddTo).append(a);

	}
}

$(document).on('click','.searchButton',function(){
	$('#searches').empty();
	var type = $(this).data('type');
	// enter api key
	var queryURL = 'http://api.giphy.com/v1/gifs/search?q='+type+'&api_key=8d40e358880641d8b15efdadfafdf16e&limit=10';
	// make api call
	$.ajax({
		url:queryURL,method:'GET'})
	.done(function(response){
		// console.log(response);
		// exactly like our 6.3 exercise
		for(var i=0;i<response.data.length; i++){
			var searchDiv = $('<div class="search-item">');
			var rating = response.date[i].rating;
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
			$('#searches').append(searchDiv);
		}
	})
})

$(document).on('click','.searchImage',function(){
	var state= $(this).attr('data-state');
	if(state =="still"){
		$(this).attr('scr',$(this).data('animated'));
		$(this).attr('data-state','animated');
	} else {
			$(this).attr('src',$(this).data('still'));
			$(this).attr('data-state','still');
	}
})

$('#addSearch').on('click',function(){
	 var newSearch = $('input').eq(0).val();
	 searchArray.push(newSearch);
	 populateButtons(searchArray,'searchButton','#buttonsArea');
	 return false;
})
