// $(".backdrop").attr('style', `background-color: ${localStorage.getItem("answer_1")}` )

$(document).ready(function () {
    $(".backdrop").attr('style', `background-color: ${localStorage.getItem("answer_1")}`)
    $('#nameDrop').append(localStorage.getItem("user_name"))

})

//button click to play audio based off genre. most popular
