//business logic
function Ticket(movie, time, price) {
  this.movie = movie;
  this.time = time;
  this.price = price;
}



//user-interface logic
$(document).ready(function() {
  $("form#movieForm").submit(function(event) {
    event.preventDefault();
    var pickMovie = $("#chooseMovie").val();
    var pickTime = $("#chooseTime").val();
    var pickPrice = $("#choosePrice").val();
    var newTicket = new Ticket(pickMovie, pickTime, pickPrice);

    $("#showResults").show();
    $("#showMovie").text(newTicket.movie);
    $("#showTime").text(newTicket.time);
    $("#showPrice").text(newTicket.price);

  });

});
