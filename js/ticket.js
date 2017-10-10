function Ticket(movie, time, age, ticketPrice) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.ticketPrice = ticketPrice;
}

Ticket.prototype.FinalPrice = function() {
  if(this.age >=55 || this.age <= 12) {
    return 5;
  } else {
    return 12;
  }
};

Ticket.prototype.FinalPrice = function(){
  return 0 + this.Age();
};

exports.ticketModule = Ticket;
