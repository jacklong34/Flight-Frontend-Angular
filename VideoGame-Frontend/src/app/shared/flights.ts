export class Flight {
    passengerName: string;
    numberOfTickets: number;
    flightId: string;

    //Array of Flights (While no DB)
    public flights: Flight[] = [];
}