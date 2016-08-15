var sentence = [];
var isLong = function(word){
  return word.length > 3;
}
$(document).ready(function() {

  $("form").submit(function(event) {
    var sentence = $("input#sentence").val().split(" ");
    var sentenceLong = sentence.filter(isLong);
    var sentenceOutput = sentenceLong.join(" ");
    console.log(sentenceOutput);
    $(".output").append("<p>" + sentenceOutput + "</p>");
    event.preventDefault();
  });
});
