var car,wall, car2,wall2,line;
var speed,weight;

function setup() {
  createCanvas(1600,800);
  //createSprite(400, 200, 50, 50);

  speed=random(55,90);
  weight=random (400,1500);

  car= createSprite(50,200,50,50);
  wall=createSprite(1500,200,40,height/2);

  car2=createSprite(50,600,50,50);
  wall2=createSprite(1500,600,40,height/2);
  line=createSprite(800,400,1600,10);
  
  car.velocityX=speed;
  car2.velocityX=speed;
}

function draw() {
  background(0,0,0);

  wall.shapeColor= rgb (255,255,255);

  if(wall.x-car.x<(car.width+wall.width)/2) {
      car.velocityX=0;
      var deformation=0.5*weight*speed*speed/22509;

      if (deformation>180){
        car.shapeColor=rgb(255,0,0);
      }

      if (deformation<180 && deformation>100){
        car.shapeColor=rgb(230,230,0);
      }

      if (deformation<100){
        car.shapeColor=rgb(0,255,0);
      }

  }
  
  wall2.shapeColor=rgb(255,255,255)

  if(wall2.x-car2.x<(car2.width+wall2.width)/2) {
    car2.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;

    if (deformation>180){
      car2.shapeColor=rgb(255,0,0);
    }

    if (deformation<180 && deformation>100){
      car2.shapeColor=rgb(230,230,0);
    }

    if (deformation<100){
      car2.shapeColor=rgb(0,255,0);
    }

}
  drawSprites();
}