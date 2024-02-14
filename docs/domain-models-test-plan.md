# Domain Models and Test Plan

## Benefits of this Software

With this software, you'll no longer have to worry about whether your airports are at capacity; there'll be no more health and safety concerns of overcrowding, collisions or tracking. This software will allow airport management to define the capacity for their airports easily, you can then know how close you are to reaching capacity or if you're about to be over if another plane lands. Every plane will be easily tagged so that you know whether it's at your airport or not in a glance. 

In the future you'll be able to stop planes from landing or taking off in stormy weather, further assisting any health and safety concerns, keeping all employees and customers safe in harsh weather. 

Associated risks may include: lack of tracking for the size (or any other details) of individual planes beyond an assigned ID. Accounting for other possible weather conditions. Lack of full tracking of planes and arrival times could cause issues if close to capacity and multiple planes would like to land at once.

## User Stories

As a manager I want to set the maximum capacity of an airport, so that I don't overload airports and cause potential harm to customers and employees.

As an air traffic controller (ATC) I want to check the capacity of an airport, so that I know if I can land another plane there or not.

As an ATC I want to instruct a plane to land at an airport, so that I can safely land the aircraft.

As an ATC I don't want to be able to land a plane at an airport that is full, so that everyone is safe and the airport isn't over capacity.

As an ATC I don't want to be able to land a plane that is already at an airport, so that I know I'm landing the correct aircraft.

As an ATC I want to instruct a plane to take off from an airport, so that I ensure the correct plane has taken off from my airport.

As an ATC I don't want to be able to instruct a plane to take off from an airport it isn't in, so that I ensure I'm dealing with the correct plane.

As an ATC I want to avoid landing planes if the weather is stormy, so that we can abide by health and safety regulations.

As an ATC I want to avoid allowing planes to take off if the weather is stormy, so that we can abide by health and safety regulations.


## Domain Models


| Objects | Properties | Messages | Output |
| ---- | ---- | ---- | ---- |
| Airplane | id @Number |  |  |
|  | inFlight @boolean | land(@Airport) | @void |
|  |  | takeoff(@Airport) | @void |
| Airport | capacity @Number | setCapacity(@Number) | @void |
|  | airplanes @Array[@Airplane] | getPlanes() | @Array[@Airplane] |
|  |  | isFull() | @boolean |
| Weather | stormy @boolean | setIsStormy(@boolean) | @void |


## Trello/Kanban Board Planning

![Alt text](<Screenshot 2024-01-13 at 11.05.38.png>)