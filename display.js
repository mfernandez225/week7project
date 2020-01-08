// $(".backdrop").attr('style', `background-color: ${localStorage.getItem("answer_1")}` )

$(document).ready(function () {
    $("#backdrop").attr('style', `background-color: ${localStorage.getItem("answer_1")}`)
    $('#nameDrop').append(localStorage.getItem("user_name"))

})

$("#yes").on("click", function () {

})
