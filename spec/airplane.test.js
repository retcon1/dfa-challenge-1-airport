import Weather from "../src/Weather";
import Airplane from "../src/airplane";
import Airport from "../src/airport";

describe("Airplane", () => {
  describe("land function", () => {
    it("should land an airplane at the given airport, adding it to the planes array of that Airport and returning a success message", () => {
      // Arrange
      const airport = new Airport();
      const airplane = new Airplane(1);
      // Act
      const landing = airplane.land(airport);
      // Assert
      expect(landing).toBe(`Plane ${airplane.id} has landed!`);
      expect(airport.planes.length).toBe(1);
      expect(airport.planes).toContain(airplane);
    });

    it("should set the inFlight property of the airplane to false", () => {
      // Arrange
      const airport = new Airport();
      const airplane = new Airplane(1);
      // Act
      airplane.land(airport);
      // Assert
      expect(airplane.inFlight).toBe(false);
    });

    it("should return a warning string if landing a plane that is already not inFlight", () => {
      // Arrange
      const airport = new Airport();
      const airplane = new Airplane(1);
      // Act
      airplane.land(airport);
      const secondLanding = airplane.land(airport);
      // Assert
      expect(secondLanding).toBe("This plane has already landed!");
    });

    it("should return a warning string if the input airport's capacity is full", () => {
      // Arrange
      const airport = new Airport();
      airport.setCapacity(1);
      const airplane = new Airplane(1);
      const airplane2 = new Airplane(2);
      airplane.land(airport);
      // Act
      const anotherLanding = airplane2.land(airport);
      // Assert
      expect(anotherLanding).toBe("This airport is full!");
      expect(airport.planes).not.toContain(airplane2);
      expect(airplane2.inFlight).toBe(undefined);
    });

    it("should return a warning if the given weather is stormy", () => {
      // Arrange
      const airport = new Airport();
      const airplane = new Airplane(1);
      const weather = new Weather();
      weather.setStormy(true);
      // Act
      const landing = airplane.land(airport, weather);
      // Assert
      expect(landing).toBe("The weather is too stormy to land!");
    });

    it("should return a success message if the weather is not stormy", () => {
      // Arrange
      const airport = new Airport();
      const airplane = new Airplane(1);
      const weather = new Weather();
      weather.setStormy(false);
      // Act
      const landing = airplane.land(airport, weather);
      // Assert
      expect(landing).toBe(`Plane ${airplane.id} has landed!`);
    });
  });

  describe("takeoff function", () => {
    it("should set the inFlight property of the plane to true and return a success message", () => {
      // Arrange
      const airport = new Airport();
      const airplane = new Airplane(1);
      airplane.land(airport);
      // Act
      const takeoff = airplane.takeoff(airport);
      expect(takeoff).toBe(`Plane ${airplane.id} has taken off!`);
      expect(airplane.inFlight).toBe(true);
    });

    it("should remove the airplane from the given Airport's array", () => {
      // Arrange
      const airport = new Airport();
      const airplane = new Airplane(1);
      airplane.land(airport);
      // Act
      airplane.takeoff(airport);
      // Assert
      expect(airport.planes).not.toContain(airplane);
    });

    it("should return a string and do nothing if the airplane is not in the given Airport's array", () => {
      // Arrange
      const airport = new Airport();
      const airplane = new Airplane(1);
      // Act
      const takeoff = airplane.takeoff(airport);
      // Assert
      expect(takeoff).toBe("This plane is not in this airport!");
      expect(airport.planes).not.toContain(airplane);
    });

    it("should return a warning message if the weather is stormy", () => {
      // Arrange
      const airport = new Airport();
      const airplane = new Airplane(1);
      const weather = new Weather();
      airplane.land(airport);
      weather.setStormy(true);
      // Act
      const takeoff = airplane.takeoff(airport, weather);
      // Assert
      expect(takeoff).toBe("The weather is too stormy to take off!");
    });

    it("should return a success message if the weather is not stormy", () => {
      // Arrange
      const airport = new Airport();
      const airplane = new Airplane(1);
      const weather = new Weather();
      weather.setStormy(false);
      airplane.land(airport);
      // Act
      const takeoff = airplane.takeoff(airport, weather);
      // Assert
      expect(takeoff).toBe(`Plane ${airplane.id} has taken off!`);
    });
  });
});
