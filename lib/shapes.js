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

// Function to generate markdown for README
function shapes(data) {
  return `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${makeShape(data.logoShape)} fill="${data.logoColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.characterColor}">${data.logoCharacters}</text>

  </svg>
`;
}

module.exports = shapes;