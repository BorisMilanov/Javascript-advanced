function solve(tickets,criteria) {
    class Ticket{
        constructor(descriptor){
            const [destination,price,status] = descriptor.split('|');
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    return tickets.map(t => new Ticket(t)).sort(comperator)

    function comperator(a,b) {
        try{
            return a[criteria].localeCompare(b[criteria])//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
        }catch(e){
            return a[criteria] - b[criteria];
        }
        
        
    }
}
console.log(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')