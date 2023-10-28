// Function that returns the license link
// If there is no license, return an empty string
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

module.exports = makeShape;