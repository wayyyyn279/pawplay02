function mousePressed() {

  if (gameState === "home") {

    if (overButton(playButton)) {
      gameState = "menu";
    }

    return;
  }

  if (gameState === "menu") {

    if (overButton(gardenButton)) {
      startMode("garden");
    }

    if (overButton(hunterButton)) {
      startMode("hunter");
    }

    if (overButton(bubbleButton)) {
      startMode("bubble");
    }

    return;
  }

  if (

    mouseX > 20 &&
    mouseX < 130 &&
    mouseY > 20 &&
    mouseY < 62

  ) {

    gameState = "menu";

    objects = [];

    particles = [];

    return;
  }

  for (

    let i = objects.length - 1;
    i >= 0;
    i--

  ) {

    let d = dist(

      mouseX,
      mouseY,

      objects[i].x,
      objects[i].y

    );

    if (d < 60) {

      explode(
        objects[i].x,
        objects[i].y
      );

      objects.splice(i, 1);

    if(popSound.isPlaying()){
    
      popSound.stop();
    }
      popSound.play();

      score++;

      checkAchievements();

      break;
    }
  }
}
