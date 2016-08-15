var items = [];

$(document).ready(function() {
  var inputs = ["item1", "item2", "item3", "item4", "item5"];

  $("form").submit(function(event) {
    inputs.forEach(function(input) {
      var item = $("input#" + input).val().toUpperCase();
      items.push(item);
    });
    items.sort();

    var capitalItems = items.map(function(item) {
      $("ul").append("<li>" + item + "</li>");
    });

    $("form").addClass("hidden");

    event.preventDefault();
  });
});
