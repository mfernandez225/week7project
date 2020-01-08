// This is the Jokes API Call
var queryURL = `https://api.giphy.com/v1/gifs/search?q=${localStorage.getItem("answer_2")}&api_key=dc6zaTOxFJmzC`;

// "https://sv443.net/jokeapi/category/"
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  // console.log(response.data[0].images.fixed_height.url)
  var sportImg = response.data[0].images.fixed_height.url
  $("#sports").append(`<img height="150" width="250" src="${sportImg}" />`)
  // $("#jokeBox").text(response.joke);
  // console.log(response);

});
// This is the Giphy API Call - calls animal gif
var queryURL2 = `https://api.giphy.com/v1/gifs/search?q=${localStorage.getItem("answer_0")}&api_key=dc6zaTOxFJmzC`;


$.ajax({
  url: queryURL2,
  method: "GET"
}).then(function (response) {
 

  var imageUrl = response.data[1].images.fixed_height.url;

  $("#imageBox").append(`<img height="150" width="250" src="${imageUrl}" />`)

  // var giphyImage = $("<img>");
  // giphyImage.attr("src", imageUrl);
  // giphyImage.attr("alt", "giphy");
  // console.log(imageUrl)
  // $("#imageBox").append(giphyImage);

});


// var kanyeURL = `https://api.kanye.rest?format=text`;

// // "https://sv443.net/jokeapi/category/sports"
// $.ajax({
//   url: kanyeURL,
//   method: "GET"
// }).then(function (response) {


//   $("#quote").append(`<p class='lead'>${response}</p>`)

//   // $("#jokeBox").text(response.joke);
//   // console.log(response);

// });




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
if(localStorage.getItem("answer_3") === ('Programming' || 'Miscellaneous' ||'Dark' )) {

var jokeURL = `https://sv443.net/jokeapi/category/${localStorage.getItem("answer_3")}`;

// "https://sv443.net/jokeapi/category/sports"
$.ajax({
  url: jokeURL,
  method: "GET"
}).then(function (response) {
  console.log(response.joke)
  $("#quote").append(`<p class='lead'>${response.joke}</p>`)

  // $("#quote").append(`<p class='lead'>${response}</p>`)


})
}else {
  var kanyeURL = `https://api.kanye.rest?format=text`;

// "https://sv443.net/jokeapi/category/sports"
$.ajax({
  url: kanyeURL,
  method: "GET"
}).then(function (response) {


  $("#quote").append(`<p class='lead'>${response}</p>`)

  // $("#jokeBox").text(response.joke);
  // console.log(response);

});
}

















//PALLAV FRONT PAGE SCRIPT

$(function () {
  $("#helloFont").on('click', function () {
    var user_name = $("#helloBox").val();
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem("user_name", user_name);
    } else {
      alert("Sorry, your browser does not support web storage...");
    }
    // not letting user move forward until there is text inputted
    if (user_name != "" && localStorage.getItem('user_name') != null) {
      location.href = "./index2.html";
    } else if (user_name == "") {
      alert('Please enter your name');
    }
  });

  var question = ["What is your favorite animal?", "What is your favorite color?", "What is your favorite sport?", "What best matches your humor?"];
  var answers = new Array();
  answers[0] = ["cat", "dog", "elephant", "giraffe"];
  answers[1] = ["red", "green", "blue", "yellow"];
  answers[2] = ["football", "basketball", "volleyball", "table tennis"];
  answers[3] = ['Programming', 'Political', 'Dark', 'Kanye'];
  var answers_img = new Array();
  answers_img[0] = ["cat.jpg", "dog.jpg", "elephant.jpg", "giraffe.jpg"];
  answers_img[1] = ["red", "green", "blue", "yellow"];
  answers_img[2] = ["sportsoccer.jpg", "sportbasketball.jpg", "sportvolleyball.jpg", "sporttabletennis.jpg"];
  answers_img[3] = ['humornerdy.jpg', 'humorpolitical.jpg', 'humordirty.jpg', 'humorkanye.jpg'];

  $(".choose_btn").on("click", function () {
    var answer_number = $(this).attr("chooseid");
    // console.log("this is" + answer_number)
    if (typeof (Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
      } else {
        localStorage.clickcount = 1;
      }
      var question_number = localStorage.clickcount;
      var answer_reg_num = question_number - 1;
      console.log(`qnum : ${question_number} answernum: ${answer_reg_num}`)
      if (question_number == 4) {
        localStorage.setItem("answer_3", answers[3][answer_number - 1]);
        var alert_content = "Your Name is " + localStorage.getItem("user_name") + "\r\n" +
          localStorage.getItem("question_0") + "=>" + localStorage.getItem("answer_0") + "\r\n" +
          localStorage.getItem("question_1") + "=>" + localStorage.getItem("answer_1") + "\r\n" +
          localStorage.getItem("question_2") + "=>" + localStorage.getItem("answer_2") + "\r\n" +
          localStorage.getItem("question_3") + "=>" + localStorage.getItem("answer_3");
        alert(alert_content);
        localStorage.clickcount = 0;
        location.href = "./display.html";
      } else {
        $("#question_p").text(question[question_number]);
        for (var i = 0; i < 4; i++) {
          var k = i + 1;
          $("#answer_" + k).text(answers[question_number][i]);
          if (question_number == 1) {

            $("#flip_card_front_" + k).css("background-image", "none");
            $("#flip_card_front_" + k).css("background-color", answers_img[question_number][i]);
          } else {
            $("#flip_card_front_" + k).css("background-image", "url('./images/" + answers_img[question_number][i] + "')");
          }

        }
        localStorage.setItem("question_" + question_number, question[question_number]);
        localStorage.setItem("answer_" + answer_reg_num, answers[answer_reg_num][answer_number - 1]);
      }
    } else {
      alert("Sorry, your browser does not support web storage...");
    }

  });
});
