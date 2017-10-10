//business logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.ticketPrice = 0;
}

Ticket.prototype.Age = function() {
  if(this.age >=55 || this.age <= 12) {
    return 5;
  } else {
    return 17;
  }
};

Ticket.prototype.FinalPrice = function(){
  return 0 + this.Age();
};

exports.ticketModule = Ticket;
