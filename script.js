// This will create a random value so we can get a different giph everytime.
var ran = Math.floor(Math.random() * 15);
var ran2 = Math.floor(Math.random() * 15);

// This is the Sports API Call
var queryURL = `https://api.giphy.com/v1/gifs/search?q=${localStorage.getItem("answer_2")}&api_key=dc6zaTOxFJmzC`;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  var sportImg = response.data[ran].images.fixed_height.url
  $("#sports").append(`<img height="150" width="250" src="${sportImg}" class="rounded" />`)


});
// This is the Animal API Call - calls animal gif
var queryURL2 = `https://api.giphy.com/v1/gifs/search?q=${localStorage.getItem("answer_0")}&api_key=dc6zaTOxFJmzC`;


$.ajax({
  url: queryURL2,
  method: "GET"
}).then(function (response) {


  var imageUrl = response.data[ran2].images.fixed_height.url;

  $("#imageBox").append(`<img height="150" width="250" src="${imageUrl}" class="rounded" />`)

});

// Joke API call
if (localStorage.getItem("answer_3") === 'Programming' || localStorage.getItem("answer_3") === 'Miscellaneous' || localStorage.getItem("answer_3") === 'Dark') {
  var jokeURL = `https://sv443.net/jokeapi/category/${localStorage.getItem("answer_3")}`;

  $.ajax({
    url: jokeURL,
    method: "GET"
  }).then(function (response) {

    if (response.type == "twopart") {
      $("#quote").append(`<p class='lead'>${response.setup}</p>`)
      $("#quote").append(`<p class='lead'>${response.delivery}</p>`)
    } else {
      $("#quote").append(`<p class='lead'>${response.joke}</p>`)
    }
  })
} else {
  // This is the Kanye Quote API Call
  var kanyeURL = `https://api.kanye.rest?format=text`;

  $.ajax({
    url: kanyeURL,
    method: "GET"
  }).then(function (response) {


    $("#quote").append(`<p class='lead'>${response}</p>`)

  });
}

//PALLAV FRONT PAGE SCRIPT
// On click event to grab and store variables into local storage
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

  var question = ["What animal mood do you feel you relate to today?", "Find out your favorite color of the day based on your mood", "What is your favorite sport?", "Based on your mood, what best matches your humor today?"];
  var answers = new Array();
  answers[0] = ["Cat wefjowiefjowef", "Dog", "Elephant", "Girrafe"];
  answers[1] = ["Red", "Green", "Blue", "Yellow"];
  answers[2] = ["Soccer", "Basketball", "Volleyball", "Table Tennis"];
  answers[3] = ['Programming', 'Political', 'Dark', 'Kanye'];
  var answers_img = new Array();
  answers_img[0] = ["cat.jpg", "dog.jpg", "elephant.jpg", "giraffe.jpg"];
  answers_img[1] = ["red", "green", "blue", "yellow"];
  answers_img[2] = ["sportsoccer.jpg", "sportbasketball.jpg", "sportvolleyball.jpg", "sporttabletennis.jpg"];
  answers_img[3] = ['humornerdy.jpg', 'humorpolitical.jpg', 'humordirty.jpg', 'humorkanye.jpg'];
  // Assigning variables into local storage.
  $(".choose_btn").on("click", function () {
    var answer_number = $(this).attr("chooseid");
    if (typeof (Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
      } else {
        localStorage.clickcount = 1;
      }
      var question_number = localStorage.clickcount;
      var answer_reg_num = question_number - 1;

      if (question_number == 4) {
        localStorage.setItem("answer_3", answers[3][answer_number - 1]);
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
