import React from "react";

const ES6 = () => {
  class Car {
    constructor(name) {
      this.brand = name;
    }
  }
  const mycar = new Car("Ford");

  return <div>{mycar.brand}</div>;
};

export default ES6;
