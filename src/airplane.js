export default class Airplane {
  id;
  inFlight;

  constructor(id) {
    this.id = id;
  }

  land(airport, weather) {
    // Extract checking to a separate method
    if (this.inFlight === false) return "This plane has already landed!";
    if (airport.isFull()) return "This airport is full!";
    if (weather && weather.stormy) return "The weather is too stormy to land!";

    airport.planes.push(this);
    this.inFlight = false;
    return `Plane ${this.id} has landed!`;
  }

  takeoff(airport, weather) {
    if (!airport.planes.includes(this)) {
      return "This plane is not in this airport!";
    }
    // Extract weather check to a separate method
    if (weather && weather.stormy) {
      return "The weather is too stormy to take off!";
    }
    this.inFlight = true;
    airport.planes = airport.planes.filter((plane) => plane !== this);
    return `Plane ${this.id} has taken off!`;
  }
}
