$(document).ready(function() {

	// Pick a category and secret word

    var categories = [

        ["quarter", "half", "whole", "sixteenth", "dotted", "triplet", "thirtysecond", "eighth"],

        ["treble", "rest", "notes", "measure", "barline", "doublebar", "beats", "staff", "tempo", "metronome", "chord", "repeat"],

        ["rock", "classical", "metal", "country", "blues", "jazz", "dubstep", "popular"]
    ];

    var randomCategoryArray = categories[Math.floor((Math.random() * categories.length))];

    var randomWord = (randomCategoryArray[Math.floor((Math.random() * randomCategoryArray.length))]).toUpperCase();

    console.log(randomWord);

    var randomWordArray = randomWord.split("");


    // Print category name

    if ($.inArray("quarter", randomCategoryArray) > -1) {

        $(".category").text("Category is Note Types");

    } else if ($.inArray("treble", randomCategoryArray) > -1) {

        $(".category").text("Category is General");

    } else {

        $(".category").text("Category is Music Genres");

    }

	// Draw squares for secret word & hide letters
    
    var secret;
//    for (var i = 0; i < randomWord.length; i++){
//        secret += "_ ";
//    }
    function showWord(){
        $('#lineContainer').html(secret);
    }
    showWord();

	for(var i = 0; i < randomWord.length; i++) {

        $('#container').append('<div class="letter ' + i + '"></div>');

        $('#container').find(":nth-child(" + (i + 1) + ")").text(randomWordArray[i]);

        $(".letter").css("color", "#4ABDAC");

    }

	// Button click function

    var wrongGuesses = 0;

    $("button").on("click", function(){

        $(this).addClass("used");

        $(this).prop("disabled", "true");

        var matchFound = false;


        // Check if clicked letter is in secret word

        var userGuess = $(this).text();

        for (var i = 0; i < randomWord.length; i++) {

            if (userGuess === randomWord.charAt(i)) {
              var guess = userGuess.replace(/\"_"+/g, userGuess);
                $('#lineContainer').html(guess);
                //document.write(guess);
                console.log(guess);
                $('#container').find(":nth-child(" + (i + 1) + ")").css("color", "#EFEFEF").addClass("winner");

                matchFound = true;

            }

        }

        //Check for winner

        var goodGuesses = [];

        $(".letter").each(function( index ) {

            if ( $(this).hasClass("winner") ) {

                goodGuesses.push(index);

                if (goodGuesses.length === randomWordArray.length) {

                    $("#container").hide();

                    $("button").prop("disabled", "true");

                    $(".category").text("You guessed the secret word! You Win!");

                    $(".category").append("<br><button enabled class='play-again'>Play again?</button>");

                }
            }

        });

        // If no match, increase count and add appropriate image

        if (matchFound === false) {

            wrongGuesses += 1;

            $("#hangman").attr("src",  + wrongGuesses + ".png");

        }

        // If wrong guesses gets to 6 exit the game

        if (wrongGuesses === 6) {

            $("#container").hide();

            $("button").prop("disabled", "true");

            $(".category").text("Sorry, you lost! The secret word was " + randomWord);

            $(".category").append("<br><button enabled class='play-again'>Play again?</button>");

        }

        // Play again button

        $(".play-again").on("click", function(){

            location.reload();

        });

    }); // End button click

}); // End document.ready