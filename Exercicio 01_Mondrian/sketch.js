function setup() {
  createCanvas(800, 700);
  background(255);
  stroke(0);
  
}

function draw() {
  
  //Cores
  //Vermelho
  strokeWeight (0);
  fill(255, 1, 1);
  rect(0, 0, 300, 300);
   
  //Amarelo
  fill(245, 205, 0);
  strokeWeight (0);
  rect(0, 450, 70, 300);

  //Azul
  fill(0, 55, 170);
  rect(300, 450, 250, 230);
  
  //Linhas
  strokeWeight(8)
  
  //Verticais
  line(300, 0, 300, width);
  strokeWeight (5)
  line(70, 450, 70, height );
  strokeWeight (8)
  line(550, 450, 550, width );
  
  //Horizontais
  line(0, 300, width, 300);
  line(0, 450, width, 450);
  line(300, 680, 550, 680);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
