var Ticket = require('./../js/scripts.js').ticketModule;

//user-interface logic
$(document).ready(function() {
  $("form#movieForm").submit(function(event) {
    event.preventDefault();
    var pickMovie = $("#chooseMovie").val();
    var pickTime = $("#chooseTime").val();
    var userAge = $("#enterAge").val();
    var newTicket = new Ticket(pickMovie, pickTime, userAge);

    $("#showResults").show();
    $("#showMovie").text(newTicket.movie);
    $("#showTime").text(newTicket.time);
    $("#showPrice").text(newTicket.FinalPrice());

  });

});
