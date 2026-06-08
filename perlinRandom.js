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
