var destinationArray = [];


function Destination(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}


$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var location = $("#place").val();
    var landmark = $("#landmark").val();
    var season = $("#season").val();
    var note = $("#note").val();
    //var name = $("#objectName").val();
    var increment = 0;
    console.log(increment)
    var name = new Destination(location, landmark, season, note);
    destinationArray.push(name);
    $("#placesList").append("<li>" + destinationArray[increment].location + "</li>");

    $("#placesList").click(function(){
      $("#info").text(destinationArray[increment].location);
      $("#info").append( destinationArray[increment].landmarks);
      $("#info").append("<li>" + destinationArray[increment].season + "</li>");
      $("#info").append("<li>" + destinationArray[increment].notes + "</li>");

    });
  });
});
