



var snow;
var bg;

function preload(){
bg = loadImage("snow3.jpg")
snow = loadImage("snow4.webp")
}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  var snowfall = createSprite(400,0,50,50)
  snowfall.addImage(snow)
  snowfall.scale=0.1;

}

function draw() {
  background(bg);

  drawSprites();
}