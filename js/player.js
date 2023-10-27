class Player {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;

    this.spriteplayer = createSprite(this.x, this.y, 1, 1);
    this.spriteRunningTwo = loadAnimation("./Assets/Player running1 - Copy.png", "./Assets/Player running2 - Copy.png", "./Assets/Player running3 - Copy.png", "./Assets/Player running4 - Copy.png", "./Assets/Player running5 - Copy.png", "./Assets/Player running6 - Copy.png", "./Assets/Player running7 - Copy.png", "./Assets/Player running8 - Copy.png")
    this.spriteStill = loadImage("./Assets/Player still.png");
    this.spriteRunning = loadAnimation("./Assets/Player running1.png", "./Assets/Player running2.png", "./Assets/Player running3.png", "./Assets/Player running4.png", "./Assets/Player running5.png", "./Assets/Player running6.png", "./Assets/Player running7.png", "./Assets/Player running8.png");
    this.spriteplayer.addAnimation("still", this.spriteStill);
    this.spriteplayer.addAnimation("moving", this.spriteRunning);
    this.spriteplayer.addAnimation("moving_two", this.spriteRunningTwo);

    this.spriteWhenGameNotStart = loadAnimation("./Assets/black.png");
    this.spriteplayer.addAnimation("game_not_start_animation", this.spriteWhenGameNotStart);

    this.spriteplayer.setCollider("rectangle", 0, 0, 35, 104);
    this.spriteplayer.debug = false;
  
  }

  create() {
    form = new Form();
    form.display();

    this.spriteplayer.changeAnimation("game_not_start_animation", this.spriteWhenGameNotStart);
  }

  play() {
    this.handleKeyPressed();

    this.spawnWalls();

    this.handleCollisionWithMonsters();
    this.spriteplayer.collide(wallieGroup);
    
    this.spawnKey();

  }

  update(state) {
    database.ref("/").update({
      playersPlayed: state
    });
  }

  getState() {
    var playersPlayed = database.ref("playersPlayed");
    playersPlayed.on("value", function(data) {
      playersPlayed = data.val();
    });
  }

  handleKeyPressed() {

    if (keyDown(UP_ARROW) || keyDown(RIGHT_ARROW) || keyDown(LEFT_ARROW) || keyDown(DOWN_ARROW)) {
      if (keyDown(UP_ARROW) && this.spriteplayer.x <= windowWidth - 35 && this.spriteplayer.y <= windowHeight - 104) {
        this.spriteplayer.y -= 10;
      } 
      if (keyIsDown(DOWN_ARROW) && this.spriteplayer.x <= windowWidth - 35 && this.spriteplayer.y <= windowHeight - 104) {
        this.spriteplayer.y += 10;
      }
      if (keyIsDown(LEFT_ARROW) && this.spriteplayer.x <= windowWidth - 35 && this.spriteplayer.y <= windowHeight - 104) {
        this.spriteplayer.x -= 10;
        this.spriteplayer.changeAnimation("moving_two", this.spriteRunningTwo);
      } else {
        if (keyIsDown(RIGHT_ARROW) && this.spriteplayer.x <= windowWidth - 35 && this.spriteplayer.y <= windowHeight - 104) {
          this.spriteplayer.x += 10;
        }
        this.spriteplayer.changeAnimation("moving", this.spriteRunning);
      }
      main.stop();
      if (!tunnelSound.isPlaying()) {
        tunnelSound.setVolume(0.5);
        tunnelSound.play();
      }
      if (!boots.isPlaying()) {
        boots.play();
      }
    } else {
      main.stop();
      boots.stop();
      this.spriteplayer.changeAnimation("still", this.spriteStill);
    }
  }

  handleCollisionWithMonsters () {
    if (this.x == death.x && this.y === death.y) {
      health -= deathDamage;
    }

    if (this.spriteplayer.isTouching(jumpScareSprite)) {
      this.scare();
    }
  }

  scare() {
    background(jumpscare);
    jumpscareSound.play();
    this.gameOver();
  }
  gameOver() {
    jumpScareHappened = true;

    if (!main.isPlaying()) {
      main.play();
    }
    
    swal({
      title: "You are in my jaws!",
      text: "Finally, I may exact my revenge for you evading me so many times!",
      imageUrl: "https://i.ytimg.com/vi/coyNiP2VGfI/hqdefault.jpg",
      imageSize: "480 x 360",
      confirmButtonText: "NOOOooo...."
    });

    gameState = 2;

    tunnelSound.stop();

    this.spriteplayer.setAnimation("game_not_start_animation", this.spriteWhenGameNotStart);
  }

  spawnWalls() {
    var x, y;
    if (frameCount % 60 === 0) {
      x = Math.round(random(100, width - 100));
      y = Math.round(random(50, height - 100));
      var wall = createSprite(x, y, 10, 50);
      wall.shapeColor = "red";
      wall.lifetime = 500;
      wallieGroup.add(wall);
    }

  }

  spawnKey() {
    var x, y;
    if (frameCount % Math.round(random(1000, 5000)) === 0) {
      x = random(0, windowWidth);
      y = random(0, windowHeight);
      var key = createSprite(x, y, 10, 10);
      key.addImage(keyImg);
      key.scale = 0.5;

      var keyGroup = new Group();
      keyGroup.add(key);
    }
  }
}
