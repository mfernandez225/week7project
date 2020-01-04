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

  // This is the Quotes API Call (This is functioning I just disabled to not pull quotes all the time.gi)

  // var getQuote = {
  //   "async": true,
  //   "crossDomain": true,
  //   "url": "https://quotable-quotes.p.rapidapi.com/randomQuotes",
  //   "method": "GET",
  //   "headers": {
  //     "x-rapidapi-host": "quotable-quotes.p.rapidapi.com",
  //     "x-rapidapi-key": "8dba9d69a1msh6c225bacd1ec6ecp1d626cjsn9856a04e02e3"
  //   }
  // }

  // $.ajax(getQuote).done(function (response) {
  //   console.log(response);
  // });
