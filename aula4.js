let xbolinha = 300;
let ybolinha = 200;
let diametro = 25;

let velocidadeXBolinha = 4;
let velocidadeYBolinha = 4;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xbolinha,ybolinha,diametro);
  xbolinha += velocidadeXBolinha;
  ybolinha += velocidadeYBolinha


 if (xbolinha > width || xbolinha < 0) {
        velocidadeXBolinha *= -1;
    }
  
  if (ybolinha > height || ybolinha < 0) {
        velocidadeYBolinha *= -1;
    }
}
