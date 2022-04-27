class Circle {
  // properties of class circlr
  radius = 1;
  color = "red";

  //setting default value if values not provided
  constructor(radius = 1, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    console.log("Setting radius to", radius);
    this.radius = radius;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    console.log("Setting Color to", color);
    this.color = color;
  }

  toString() {
    return this;
  }

  //area = pi*r^2
  getArea() {
    return 3.14 * Math.pow(this.radius, 2);
  }

  // Cirrumference = 2*pi*r
  getCirrumference() {
    let c = 2 * 3.14 * this.radius;
    return c.toFixed(2);
  }
}

let circle1 = new Circle();
let circle2 = new Circle(2); //radius = 2
let circle3 = new Circle(3, "Blue");

console.log("new Circle() ==", circle1);
console.log("new Circle(2)==", circle2);
console.log("new Circle(3, 'Blue')==", circle3);

console.log("called getRadius() : ", circle3.getRadius());
circle3.setRadius(5);
console.log("called getRadius() : ", circle3.getRadius()); // retrieving radius set above
console.log("called getColor() : ", circle3.getColor());
circle3.setColor("Yellow");
console.log("called getColor() : ", circle3.getColor()); // retrieving color set above
console.log("called toString() : ", circle3.toString());
console.log("called getArea() : ", circle3.getArea());
console.log("called getCirrumference() : ", circle3.getCirrumference());
