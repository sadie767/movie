//business logic
var Ticket function() {
  this.chooseMovie = chooseMovie;
  this.chooseTime = chooseTime;
  this.choosePrice = choosePrice;
}



//user-interface logic
$(document).ready(function() {
  $("form#movieForm").submit(function(event) {
    event.preventDefault();
    var pickMovie = $("#chooseMovie").val();
    var pickTime = $("#chooseTime").val();
    var pickPrice = $("#choosePrice").val();
    var newTicket = new Ticket(pickMovie, pickTime, pickPrice);

if (pickMovie === "FindNemo" || pickMovie === "AntiChrist") {
  $("#chooseTime");
}
   });

});
