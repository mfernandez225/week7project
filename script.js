  var queryURL = "https://sv443.net/jokeapi/category/Programming";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  });
