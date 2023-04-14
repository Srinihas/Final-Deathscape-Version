class Form {
  constructor() {
    this.input = createInput("(WAITING FOR NAME INPUT)").attribute("placeholder", " ");
    this.playButton = createButton("(DATA EXPUNGED)");
    this.titleImg = createImg("../assets/Deathscape.png", "game title");
  }
  
  setElementsPosition() {
    this.titleImg.size(200, 90);
    this.titleImg.position(width / 2 - 115,  height/2 - 201);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.input.size(183);

    this.playButton.position(width / 2 - 90, height / 2 - 20);
  }
  
    //BP
  hide() {
    if (this.input === "SrinihasSucks" || this.input === "Srinihas Sucks") {
      gameState = 10;
    }
    this.playButton.hide();
    this.input.hide();
    this.titleImg.position(0, 0);
  }
  
    //BP
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      gameState = 1;
      this.titleImg.position(10, 10);
    });
  }
  
  display() {
    this.setElementsPosition();
    this.handleMousePressed();
  }
}
