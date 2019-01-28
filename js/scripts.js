function Destination(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}


$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var dest1 = new Destination()
    $("#placesList").prepend()
  })


})
