$(document).ready(function () {
    $(".colorSelected").attr('style', `background-color: ${localStorage.getItem("answer_1")}`)
    $('.nameDrop').append(localStorage.getItem("user_name"))
})

$("#yes").on("click", function () {
    confetti.start()
})
$("#no").on("click", function () {
    window.location.href = "index1.html"
})
