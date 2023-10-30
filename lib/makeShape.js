function makeShape(shape) {
  switch (shape) {
    case "Circle":
      return 'circle cx="150" cy="100" r="80"';
    case "Triangle":
      return 'polygon points="150,0 50,200 250,200"';
    case "Square":
      return 'rect x="75" y="25" width="150" height="150"';

    default:
      return "";
  }
}

// class Circle {
//   constructor(cx, cy, r) {
//     this.cx = cx;
//     this.cy = cy;
//     this.r = r;
//   }
// }

// class Triangle {
//   constructor(points) {
//     this.points = points;
//   }
// }

// class Squre {
//   constructor(x, y, width, height) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//   }
// }

module.exports = makeShape;
// module.exports = {Circle, Triangle, Squre};