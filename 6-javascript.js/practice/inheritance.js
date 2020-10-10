class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}
Rectangle.prototype.area = function () {
  return this.w * this.h;
};

class Square extends Rectangle {
  constructor(w) {
    super(w, w);
  }
}

let square = new Square(5);
console.log(square.area());

("INHERITANCE");
