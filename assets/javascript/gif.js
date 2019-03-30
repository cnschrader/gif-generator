var topics = ["ducks", "cats", "dogs", "mice", "cows", "hampsters", "goat", "bird", "alpaca", "llama", "anteater", "monkeys", "owls", "dolphins", "unicorns", "rabbits", "chinchilla", "badger", "otter", "penguin", "lizard"];

var gifDisplay = $("#gifDisplay");


function generateButtons() {
    
    $("#buttonDisplay").empty();
    
    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("gifs");
        newButton.attr("data-name", topics[i]);
        newButton.text(topics[i]);
        $("#buttonDisplay").append(newButton);
        
        
    }
};

generateButtons();



$(document).on("click", ".gifs", function () {
    event.preventDefault();
    var gifs = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifs + "&api_key=8b0LeUGaPodQPOpR08scJuSmwZULUz0z&limit=10&offset=0&rating=G&lang=en"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function (response) {
        console.log(response);
        results = response.data;
        
        
        
        for (var i = 0; i < results.length; i++) {
            gifDiv = $("<div>");
            gifDiv.addClass("gifmargin")
            var rating = results[i].rating;
            ratingDisplay = $("<p>").text("rating:" + " " + rating);
            gifImage = $("<img>");
            gifImage.attr("src", results[i].images.fixed_height_still.url);
            gifImage.attr("data-still", results[i].images.fixed_height_still.url);
            gifImage.attr("data-animate", results[i].images.fixed_height.url);
            gifImage.attr("data-state", "still");
            gifImage.addClass("gif-animate");
            gifDiv.append(gifImage);
            gifDiv.append(ratingDisplay);
            $("#gifDisplay").prepend(gifDiv);
        }
        
        
    });
    
    
    $("#submitButton").on("click", function(){
        
        event.preventDefault();
        
        userInput = $("#inlineFormInputName2").val().trim();
        
        topics.push(userInput);
        
        console.log(topics);
        
        generateButtons();
    });
    
    
    
    $(document).on("click", ".gif-animate", function () {
        
        var state = $(this).attr("data-state");
        
        console.log(state);
        
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
        
    });
    
    
    
    
    
    
    
    //  for(var i = 0; i < results.length; i++){
        
        //  var rating = results[i].rating;
        //  ratingDisplay = $("<p>").text("rating:" + rating);
        //  gifImage = $("<img>");
        //  gifImage.attr("src", results[i].images.fixed_height.url);
        //  gifImage.append(ratingDisplay);
        //  $("#gifDisplay").prepend(gifImage)
        //  $(ratingDisplay).insertAfter(gifImage);
        // }
        //  for(var i = 0; i < results.length; i++){
            //  gifDiv = $("<div>");
            //  gifRow = $("<div>");
            //  gifRow.addClass("row");
            //  gifCol = $("<div>");
            //  gifCol.addClass("col-md-4");
            //  var rating = results[i].rating;
            //  ratingDisplay = $("<p>").text("rating:" + rating);
            //  gifImage = $("<img>");
            //  gifImage.attr("src", results[i].images.fixed_height.url);
            //  gifRow.append(gifCol);
            //  gifDiv.append(gifRow);
            //  gifDiv.append(gifImage);
            //  gifDiv.append(ratingDisplay);
            //  $("#gifDisplay").prepend(gifDiv);
            // }
        });