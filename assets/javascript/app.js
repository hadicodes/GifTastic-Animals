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
        animalBut.text(topics[i]); //creates the button's text based on selected animal from array
        $('#animalButtons').append(animalBut); //adds the dynamically made animal buttons to the div with
        //an id of animalButtons in the HTML
    }
}

$(document).on('click', '.animal', function() {
            var animal = $(this).data('animal');
        }

        renderButtons();
