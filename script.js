  // This is the Jokes API Call
  var queryURL = "https://sv443.net/jokeapi/category/Programming";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  });
  // This is the Giphy API Call
  var queryURL2 = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  });
  // This is the Quotes API Call
  var queryURL3 = "";

  $.ajax({
    url: queryURL3,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  });
