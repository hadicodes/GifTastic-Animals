//array of preloaded animals for giphy API
var topics = ['eagle', 'frog', 'gorilla', 'crocodile', 'swordfish', 'lemur', 'cheeta', 'lion', 'lovebird', 'bear'];

// Generic function for creating & displaying animals from array buttons 
function renderButtons() {
    // Deletes the animals prior to adding a new animal (this is necessary otherwise you will have repeat buttons)
    $('#animalButtons').empty();

    //Loop through animal topics array 
    for (var i = 0; i < topics.length; i++) {
        // Then dynamicaly generates buttons for each animal in the array
        var animalBut = $('<button>'); // dynamically created, jquery animal button 
        animalBut.addClass('animal btn btn-info'); //added a class to the dynamically created button for animals
        animalBut.attr('type', 'button');
        animalBut.attr('data-name', topics[i]); //added a data attribute
        animalBut.text(topics[i]); //creates the button's text based on selected animal from array [i]
        $('#animalButtons').append(animalBut); //adds the dynamically made animal buttons to the div with
        //an id of animalButtons in the HTML
    }

}
renderButtons();


// //On button click Ajax request
$(document).on('click', '.animal', function() {

    var animal = $(this).data('name');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10&rating=g&pg";
    $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function(response) {
            //put image results data obtained from response into a var called results
            // Place the reluts of the queryURL into a var called results.
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var animalDiv = $('<div>');
                var animalImage = $('<img>');
                var rating = results[i].rating;
                var ratingDisplay = $('<p>').text('Rating: ' + rating);

                animalImage.attr('src', results[i].images.fixed_height_still.url);
                animalDiv.append(animalImage);
                animalDiv.append(ratingDisplay);

                $('#animal-gifs').prepend(animalDiv);
            }
        });
});
