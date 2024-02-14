import Airport from "./airport.js";
import Airplane from "./airplane.js";
import Weather from "./Weather.js";

console.log(
  `Everything after a colon ':' is the output of the code that follows...`
);

// Create a new Airport
const myAirport = new Airport();
console.log(`New Airport created: ${myAirport}`);

// You can change the capacity with setCapacity
console.log(`The default capacity of a new Airport is: ${myAirport.capacity}`);
myAirport.setCapacity(1);
console.log(
  `The capacity of the airport has been set to 1 with setCapacity: ${myAirport.capacity}`
);

// You can check if the airport is full with isFull
console.log(
  `Is myAirport full? Called with the isFull function: ${myAirport.isFull()}`
);

// Create a new Airplane with an id of 1
const myAirplane1 = new Airplane(1);
console.log(`New Airplane created with an ID of: ${myAirplane1.id}`);

// Land the airplane at the airport
console.log(myAirplane1.land(myAirport));

console.log(
  `The inFlight value is undefined by default, but is now set to false after landing: ${myAirplane1.inFlight}`
);

console.log(`You can now see it in the given airport's array of planes:`);
myAirport.planes.forEach((plane) => console.log(plane));

console.log(`The airport is now full: ${myAirport.isFull()}`);

const myAirplane2 = new Airplane(2);
console.log(`Create a new Airplane with an ID of 2: ${myAirplane2.id}`);

console.log(
  `Land the new airplane at the airport: ${myAirplane2.land(myAirport)}`
);

console.log(
  `But it's full when it tries to land so let's increase the capacity again... ${myAirport.setCapacity(
    5
  )}`
);

console.log(`Now we can land the airplane: ${myAirplane2.land(myAirport)}`);
console.log(`And it's in the airport:`);
myAirport.planes.forEach((plane) => console.log(plane));


// takeoff function

console.log(
  `Now let's take off the first airplane with the takeoff function: ${myAirplane1.takeoff(
    myAirport
  )}`
);
console.log(`And it's no longer in the airport:`);
myAirport.planes.forEach((plane) => console.log(plane));

console.log(
  `Now let's try to take off the first airplane again: ${myAirplane1.takeoff(
    myAirport
  )}`
);
console.log(`And it's still not in the airport:`);
myAirport.planes.forEach((plane) => console.log(plane));

// Weather class and setStormy function

console.log(`But what if the weather is stormy?`);
const myWeather = new Weather();
console.log(`Create a new Weather object: ${myWeather}`);
console.log(`The default weather is not stormy: ${myWeather.stormy}`);
console.log(
  `Set the weather to stormy with the setStormy function: ${
    (myWeather.setStormy(true), myWeather.stormy)
  }`
);

console.log(
  `The second plane attempts to takeoff in stormy weather: ${myAirplane2.takeoff(
    myAirport,
    myWeather
  )}`
);
console.log(`The second plane is still in the airport:`);
myAirport.planes.forEach((plane) => console.log(plane));

console.log(
  `The first plane attempts to land in stormy weather: ${myAirplane1.land(
    myAirport,
    myWeather
  )}`
);

console.log(`The first plane is still not in the airport:`);
myAirport.planes.forEach((plane) => console.log(plane));
console.log(`and it's still in flight: ${myAirplane1.inFlight}`);