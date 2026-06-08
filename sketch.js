let gameState = "home";

let popSound;

let score = 0;

let objects = [];
let particles = [];

let achievementText = "";
let achievementTimer = 0;

let playButton;
let gardenButton;
let hunterButton;
let bubbleButton;

function preload() {

  popSound = loadSound(
    "pop.mp3"
  );

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER, CENTER);

  playButton = {
    x: width / 2,
    y: height / 2 + 80,
    w: 200,
    h: 70
  };

  gardenButton = {
    x: width / 2,
    y: height / 2 + 20,
    w: 240,
    h: 60
  };

  hunterButton = {
    x: width / 2,
    y: height / 2 + 100,
    w: 240,
    h: 60
  };

  bubbleButton = {
    x: width / 2,
    y: height / 2 + 180,
    w: 240,
    h: 60
  };
}

function draw() {

  if (gameState === "home") {
    drawHome();
  }

  else if (gameState === "menu") {
    drawMenu();
  }

  else if (gameState === "garden") {
    drawGarden();
  }

  else if (gameState === "hunter") {
    drawHunter();
  }

  else if (gameState === "bubble") {
    drawBubble();
  }

  updateParticles();

  drawAchievement();

  drawPawCursor();
}

function drawHome() {

  background(250, 248, 242);

  push();

  translate(
    width / 2,
    height / 2 - 120
  );

  rotate(
    sin(frameCount * 0.03) * 0.15
  );

  textSize(90);

  text(
    "🐾",
    0,
    0
  );

  pop();

  fill(40);

  textSize(58);

  text(
    "PAWPLAY",
    width / 2,
    height / 2 - 35
  );

  fill(120);

  textSize(20);

  text(
    "Touch • Chase • Explore",
    width / 2,
    height / 2 + 10
  );

  drawButton(
    playButton,
    "PLAY",
    color(255, 215, 80)
  );
}

function drawMenu() {

  background(250, 248, 242);

  fill(50);

  textSize(42);

  text(
    "Choose a Mode",
    width / 2,
    height / 2 - 90
  );

  drawButton(
    gardenButton,
    "Sunny Garden",
    color(255, 220, 90)
  );

  drawButton(
    hunterButton,
    "Night Hunter",
    color(240, 240, 120)
  );

  drawButton(
    bubbleButton,
    "Bubble Bay",
    color(120, 190, 255)
  );
}

function drawGarden() {

  background(255, 252, 245);

  drawTopBar();

  if (frameCount % 35 === 0) {

    spawnObject([
      "🌼",
      "🐝",
      "💛",
      "🦋"
    ]);
  }

  updateObjects();
}

function drawHunter() {

  background(15);

  drawTopBar();

  if (frameCount % 35 === 0) {

    spawnObject([
      "⭐",
      "✨",
      "🌙"
    ]);
  }

  updateObjects();
}

function drawBubble() {

  background(220, 245, 255);

  drawTopBar();

  if (frameCount % 35 === 0) {

    spawnObject([
      "🫧",
      "🐟",
      "💧"
    ]);
  }

  updateObjects();
}

function drawTopBar() {

  fill(255);

  stroke(180);

  rectMode(CORNER);

  rect(
    20,
    20,
    110,
    42,
    20
  );

  rect(
    width - 130,
    20,
    140,
    42,
    20
  );

  fill(40);

  noStroke();

  textSize(18);

  text(
    "HOME",
    75,
    42
  );

  text(
    "Score " + score,
    width - 60,
    42
  );
}


function startMode(mode) {

  gameState = mode;

  score = 0;

  objects = [];

  particles = [];
}



function drawAchievement() {

  if (achievementTimer > 0) {

    fill(
      110,
      70,
      35
    );

    stroke(
      255,
      240,
      210
    );

    strokeWeight(10);

    textStyle(BOLD);

    textSize(90);

    text(

      achievementText,

      width / 2,
      120

    );

    achievementTimer--;
  }
}


function drawPawCursor() {

  noCursor();

  textSize(60);

  text(
    "🐾",
    mouseX,
    mouseY
  );
}

function windowResized() {

  resizeCanvas(
    windowWidth,
    windowHeight
  );
}
