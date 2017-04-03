
//business logic
function Place (place, dialect) {
  this.place = place;
  this.dialect = dialect;
}

//user interface logic
$(function(){
  $("form#place-form").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#place-input").val();
    var inputteddialect = $("input#dialect").val();

    var newPlace = new Place (inputtedPlace, inputteddialect);

    $("ul#places").append("<li><span class='place'>" + newPlace.place + "</span></li>");

    $("input#place-input").val("")
    $("input#dialect").val("")

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.place);
      $(".place-display").text(newPlace.place);
      $(".dialect-display").text(newPlace.dialect);
    })

    $("#show-more").show();
    $(".details").hide();
  })
  $("#show-more").click(function() {
    $(".details").show();
    $("#show-more").hide();
  })
})
