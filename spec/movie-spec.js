var Ticket = require('./../js/ticket.js').ticketModule;

describe('Ticket', function () {
  it('should give a ticket price', function() {
    var newTicket = new Ticket("FindNemo", "Matinee", 17, '12')
    expect(newTicket.movie).toEqual('FindNemo')
    expect(newTicket.time).toEqual('Matinee')
    expect(newTicket.age).toEqual(17)
    expect(newTicket.ticketPrice).toEqual('12')
  });

  it('should correctly determine the priced of the ticket', function() {
   var price = new Ticket(12)
   expect(price.FinalPrice()).toEqual(12);
 });
});
