class Triangle {
    constructor(logoColor, characterColor, logoCharacters){
        this.logoColor = logoColor;
        this.characterColor = characterColor;
        this.logoCharacters = logoCharacters;
    };

    render(){
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      
        <polygon points="150,0 50,200 250,200" fill="${this.logoColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.characterColor}">${this.logoCharacters}</text>
      
        </svg>
      `;
    };
}

module.exports = Triangle;