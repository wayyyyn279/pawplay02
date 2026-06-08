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

function updateObjects() {

  for (
    let i = 0;
    i < objects.length;
    i++
  ) {

    let o = objects[i];

    o.x += o.vx;
    o.y += o.vy;

    o.noiseOffset += 0.01;
    
    o.x += map(
      noise(o.noiseOffset),
      0,
      1,
      -5,
      5
    );

    if (
      o.x < 20 ||
      o.x > width - 20
    ) {
      o.vx *= -1;
    }

    if (
      o.y < 100 ||
      o.y > height - 20
    ) {
      o.vy *= -1;
    }

    textSize(o.size);

    text(
      o.emoji,
      o.x,
      o.y
    );
  }
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
