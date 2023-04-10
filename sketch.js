var player, playersPlayed;
var halp, ohMyGawd, emotionalDamage, memeSound;
var wallieGroup;
var gameState;
var boots;
var keyImg;
var jumpscare, jumpscareSound, jumpScareSprite;
var gameOverImg, gameOverSoundFile, gameOver;
var tunnelSound;
var main;
var health;
var lightSCP, enemy, shadowSCP;
var gameStart;
var firebase;
var damageAmount;
var form;
var death;
var deathDamage;
var rickRoll;
var playerFilledForm = false;
var jumpScareHappened = false;

function preload() {
    tunnelSound = loadSound("./Assets/mixkit-horror-sci-fi-wind-tunnel-894.wav");
    jumpscare = loadImage("./Assets/jumpscare.png");
    main = loadSound("./Assets/mixkit-haunted-slow-orchestra-634.wav");
    gameOverImg = loadImage("./Assets/game Over.png", gameOver);
    gameOverSoundFile = loadSound("./Assets/mixkit-broken-radio-frequency-signal-2563.wav");
    jumpscareSound = loadSound("./Assets/prowler.mp3");
    boots = loadSound("./Assets/mixkit-boot-stomp-on-mud-surface-3058.wav");

    keyImg = loadImage("./Assets/Key.png");

    memeSound = loadSound("./Assets/meme.mp3");

    emotionalDamage = loadSound("./Assets/emotional-damage-By-Tuna.mp3");

    halp = loadSound("./Assets/halp-By-Tuna.mp3");

    rickRoll = loadSound("./Assets/Rick.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();

  wallieGroup = new Group();

  gameState = 0;
  damageAmount = 3;
  health = 100;
  deathDamage = 100;
  gameStart = false;

  player = new Player();
  player.create();

  jumpScareSprite = createSprite(100, 100, 10, 10);
  jumpScareSprite.shapeColor = "black";

  death = new Death(1);

  playersPlayed = 0;
}

function draw() {
  background("black");

  // if (gameState == 0) {
  //   player.create();
  // }

  if (!main.isPlaying() && gameState == 0) {
    main.play();
  }

  if (gameState == 1) {
    death.start();
  }

  if (gameStart == false) {

    player.getState();

    gameStart = true;
  }

  if (gameState === 2 && !jumpScareHappened) {

    swal({
      title: "You live..",
      text: "Yet you are never beyond my reach",
      imageUrl : "https://th.bing.com/th/id/OIP.OeM_hr1U8HC3q4zlzlcnJQHaEK?pid=ImgDet&rs=1",
      imageSize: "1280 x 720",
      confirmButtonText: "You: Phew..."
    });

  }

  if (gameStart == true) {
    playersPlayed += 1;
    player.update(playersPlayed);
    gameStart = "f";
  }
    
  if (gameState === 10) {
      text("Suck me balls d**", windowWidth/2, windowHeight/2);
  }
  
  drawSprites();
}

function windowResize () {
  resizeCanvas(displayWidth, displayHeight);
}
