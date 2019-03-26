var topics = ["ducks", "cats", "dogs", "mice", "cows", "hampsters", "goat", "bird", "alpaca", "llama", "anteater", "monkeys", "owls", "dolphins", "unicorns", "rabbits", "chinchilla", "badger", "otter", "penguin", "lizard"];

var gifDisplay = $("#gifDisplay");
// var gifs;
// var queryURL;
// function displayGifs(){
    
//      gifs = $(this).attr("data-name");
//      queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifs + "api_key=8b0LeUGaPodQPOpR08scJuSmwZULUz0z&limit=10&offset=0&rating=G&lang=en"

//      .ajax({
//         url: queryURL,
//         method: "GET"
//       })
//       .then(function(response) {
//           console.log(response);
//          results = response.data;
//       });
// };

function generateButtons(){
   
   
    for(var i = 0; i < topics.length; i++){
        var newButton = $("<button>");
        newButton.addClass("gifs");
        newButton.attr("data-name", topics[i]);
        newButton.text(topics[i]);
        $("#buttonDisplay").append(newButton);
        
        
    }
};

generateButtons();

$(".gifs").on("click", function(){
    event.preventDefault();
   var gifs = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifs + "&api_key=8b0LeUGaPodQPOpR08scJuSmwZULUz0z&limit=10&offset=0&rating=G&lang=en"

     $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
          console.log(response);
         results = response.data;

         
         for(var i = 0; i < results.length; i++){
         gifDiv = $("<div>");
         var rating = results[i].rating;
         ratingDisplay = $("<p>").text("rating:" + rating);
         gifImage = $("<img>");
         gifImage.attr("src", results[i].images.fixed_height.url);
         gifDiv.append(gifImage);
         gifDiv.append(ratingDisplay);
         $("#gifDisplay").prepend(gifDiv);
        }
})})
