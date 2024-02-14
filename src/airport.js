import { typeChecker } from "./utils.js";

export default class Airport {
  capacity;
  planes = [];

  constructor() {
    this.capacity = 10;
  }

  setCapacity(num) {
    if (!typeChecker(1, num)) return;
    if (num > 0) this.capacity = num;
    return;
  }

  isFull() {
    return this.planes.length >= this.capacity;
  }
}

