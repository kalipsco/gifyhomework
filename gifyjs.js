// Array of GIFs
var gifs = [];

// This functions renders info in HTML
function showGifs() {

    var gif = $(this).attr("data-name");
    var queryURL = "api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=YOUR_API_KEY&limit=5"; 

	// Ajax call for clicked movie
	ajax({
	    url: queryURL,
        method: "GET"
    }).done(function(response) {

		gifDiv = $("<div></div>");
		gifDiv.append("<img src= '"+ response.Poster+"'/>" );
		$("#gifs-dump").prepend(movieDiv);

	});
    }


function buttonMaker() {

        // Deletes the GIFs prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();
        // Loops through the GIFs array
    for (var i = 0; i < gifs.length; i++) {

          // Then dynamicaly generates buttons for each GIF in the array
   		var make = $("<button>");
          // Adds a class of gif to our button
        make.addClass("gif");
          // Added a data-attribute
        make.attr("data-name", movies[i]);
          // Provided the initial button text
        make.text(gifs[i]);
          // Added the button to the buttons-view div
        $("#buttons-view").append(a);
    }
}

 // This function handles events where the add gif button is clicked
$("#add-gif").on("click", function(event) {
    event.preventDefault();
        // This line of code will grab the input from the textbox
    var gif = $("#gif-input").val().trim();

        // The GIF from the textbox is then added to our array
        gifs.push(gif);

        // Calling buttonMaker which handles the processing of our GIF array
        buttonMaker();
      });

      // Adding click event listeners to all elements with a class of "gif"
    $(document).on("click", ".gif", displayGifInfo);

      // Calling the buttonMaker function to display the intial buttons
    buttonMaker();