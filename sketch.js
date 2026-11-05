const phrase = "PERTUBATION/DISRUPTION";
const influenceRadius = 175;
const maxForce = 60;

let letters = [];
let rows, fontSize, tracking, lineGap, margin, startY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Helvetica");
  build();
}

function build() {
  letters = [];
  margin = min(width, height) * 0.05;
  fontSize = constrain(width * 0.026, 14, 24);
  tracking = fontSize * 0.13;
  lineGap = fontSize * 1.35;
  startY = margin * 2;
  rows = floor((height - margin * 2) / lineGap);

  textSize(fontSize);

  // Cada linha repete a frase até chegar à margem direita
  for (let r = 0; r < rows; r++) {
    let y = startY + r * lineGap;
    let x = margin + (r % 4) * fontSize * 0.55;

    for (let i = 0; x < width - margin; i++) {
      let ch = phrase[i % phrase.length];
      if (ch !== " ") letters.push({ ch, bx: x, by: y, x, y });
      x += textWidth(ch) + tracking;
    }
  }
}

function draw() {
  background(0);

  // Linhas horizontais
  stroke(255, 65);
  strokeWeight(0.6);
  for (let r = 0; r < rows; r++) {
    let y = startY + r * lineGap + fontSize * 0.35;
    line(margin, y, width - margin, y);
  }

  // Letras
  textSize(fontSize);
  textAlign(LEFT, BASELINE);

  for (let l of letters) {
    let d = dist(mouseX, mouseY, l.bx, l.by);

    // Quanto mais perto do rato, + força
    let force = map(d, influenceRadius, 0, 0, maxForce, true);

    if (mouseIsPressed) {
      force *= 2;
    } else {
      force *= 1;
    }

    // Afasta-se do rato e regressa suavemente à posição original
    let angle = atan2(l.by - mouseY, l.bx - mouseX);
    l.x = lerp(l.x, l.bx + cos(angle) * force, 0.18);
    l.y = lerp(l.y, l.by + sin(angle) * force, 0.18);

    if (force > 1) {
      stroke(255, 90);
      strokeWeight(0.5);
      line(l.bx, l.by, l.x, l.y);
    } else {
      noStroke();
    }

    noStroke();
    fill(255);
    text(l.ch, l.x, l.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  build();
}
