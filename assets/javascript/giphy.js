alert("conect");
var topics = ["dogs", "cats", "birds"];
var gifcount = 0;
// var gifLocation;
var clickCount = 0;

var buttonFactory = function() {
	$(".buttonGallery").empty();

	for (i = 0; i < topics.lenght; i++) {
		var personImage = $('<button>');
		personImage.addClass("buttons");
		personImage.attr("data-name", topics[i]);
		personImage.text(topics[i]);
		$(".buttonGallery").append(personImage);

	}};

	buttonFactory();

	$("#anotherButton").on("click", function(event){
		event.preventDefault();
		// this line takes the input from the textbox
		var onemorebutton = $("#user-input").val().trim();
		// adding gif from the textbook to array
		topics.push(onemorebutton);
		// calling renderButtons which handle the processing of gif array
		buttonFactory();
	});

	$(".buttons").on("click", function(){
		// $("#gif-Gallery").empty();
		// var searchTermUpdate;
		var searchTerm = $(this).attr("data-name");
		// // removing white space between two-word strings, replacing with "+"
		// searchTermUpdate = searchTerm.replace(/ +/g, "+");
// from class exercise notes
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";
      // Performing our AJAX GET request
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        // After the data comes back from the API
        .done(function(response) {
          // Storing an array of results in the results variable
        var results = response.data;
          // Looping over every result item
        for (var i = 0; i < results.length; i++) {
// end of class notes


			// gifcount = gifLocation;
		   // Only taking action if the photo has an appropriate rating
          if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
           // Creating a div with the class "item"
        	var gifDiv = $("<div class='item'>");
              // Storing the result item's rating
        	var rating = results[i].rating;
              // Creating a paragraph tag with the result item's rating
        	var p = $("<p>").text("Rating: " + rating);
              // Creating an image tag
        	var personImage = $("<img>");
              // Giving the image tag an src attribute of a proprty pulled off the
              // result item
        	personImage.attr("src", results[i].images.fixed_height.url);
              // Appending the paragraph and personImage we created to the "gifDiv" div we created
        	gifDiv.append(p);
        	gifcountifDiv.append(personImage);
              // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
        	$("#gifs-appear-here").prepend(gifDiv); 	

            }
          }
        });
    });

   

		





	