import Airplane from "../src/airplane.js";
import Airport from "../src/airport.js";

describe("Airport", () => {
  it("should have a default capacity of 10", () => {
    const airport = new Airport();
    expect(airport.capacity).toBe(10);
  });

  describe("setCapacity function", () => {
    it("should change the airport capacity", () => {
      // Arrange
      const airport = new Airport();
      // Act
      airport.setCapacity(20);
      // Assert
      expect(airport.capacity).toBe(20);
    });

    it("should not accept a capacity lower than 1", () => {
      // Arrange
      const airport = new Airport();
      // Act
      airport.setCapacity(0);
      // Assert
      expect(airport.capacity).toBe(10);
    });

    it("should only accept a number type for capacity", () => {
      // Arrange
      const airport = new Airport();
      // Act
      airport.setCapacity("4");
      airport.setCapacity([9]);
      airport.setCapacity({ 8: 8 });
      // Assert
      expect(airport.capacity).toBe(10);
    });
  });

  describe("isFull function", () => {
    it("should return false if the capacity of the airport is more than the length of the planes array", () => {
      // Arrange
      const airport = new Airport();
      const airplane = new Airplane();
      // Act
      airplane.land(airport);
      // Assert
      expect(airport.isFull()).toBe(false);
    });

    it("should return true if the capacity of the airport is the same as the length of the planes array", () => {
      // Arrange
      const airport = new Airport();
      airport.setCapacity(1);
      const airplane = new Airplane();
      // Act
      airplane.land(airport);
      // Assert
      expect(airport.isFull()).toBe(true);
    });
  });
});
