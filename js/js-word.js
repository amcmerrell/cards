var sentence = [];

$(document).ready(function() {
  $("form").submit(function(event) {
    var sentence = $("input#sentence").val().split(" ");

    // var sentenceLong = sentence.map(function(word) {
    //   if (word.length > 3) {
    //     return word;
    //   } else {
    //     sentenceLong.splice(word);
    //   }
    // });
    // debugger;
    var sentenceLong = sentence.forEach(function(word) {
      return word.length > 3;
    });
    console.log(sentenceLong);
    event.preventDefault();
  });
});
