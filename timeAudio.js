function spawnObject(list) {

  objects.push({

    x: random(width),

    y: random(120, height),

    vx: random(-2, 2),

    vy: random(-2, 2),

    size: random(100, 200),

    emoji: random(list),
    
    noiseOffset: random(1000)

  });
}

function checkAchievements() {

  if (score === 10) {

    achievementText = "GOOD DOG!";
    achievementTimer = 120;

  }

  if (score === 20) {

    achievementText = "GREAT JOB!";
    achievementTimer = 120;

  }

  if (score === 40) {

    achievementText = "PAW MASTER!";
    achievementTimer = 180;

  }
}
