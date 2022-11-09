$(document).ready(function() {
  $("#tweet-text").on("keyup", function (a) {
    let charCounter = $(this).val().length;
    let counterElement = $(this).parent().children(".below-tweet").children(".counter");
    let charsLeft = 140 - charCounter;

    counterElement.text(charsLeft);

    if (charsLeft < 0) {
      counterElement.css("color", "red");
    } else {
      counterElement.css("color", "blue");
    }
  });
});