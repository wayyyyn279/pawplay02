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

function explode(x, y) {

  for (
    let i = 0;
    i < 40;
    i++
  ) {

    particles.push({

      x: x,
      y: y,

      vx: random(-5, 5),

      vy: random(-5, 5),

      size: random(8, 20),

      life: 60

    });
  }
}

function updateParticles() {

  for (

    let i = particles.length - 1;
    i >= 0;
    i--

  ) {

    let p = particles[i];

    p.x += p.vx;
    p.y += p.vy;

    p.life--;

    noStroke();

    fill(
      255,
      220,
      120,
      p.life * 4
    );

    circle(
      p.x,
      p.y,
      p.size
    );

    if (p.life <= 0) {

      particles.splice(i, 1);
    }
  }
}
