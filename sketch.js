var car,wall;
var car2,car3,car4;
var speed1,speed2,speed3,speed4,weight;
var line1,line2,line3,line4,line5;

function setup() {
  createCanvas(1400,400);
  
  line1=createSprite(600,50,1500,5);
  line1.shapeColor="white";

  line2=createSprite(600,120,1500,5);
  line2.shapeColor="white";

  line3=createSprite(600,190,1500,5);
  line3.shapeColor="white";
  
  line4=createSprite(600,260,1500,5);
  line4.shapeColor="white";

  line5=createSprite(600,340,1500,5);
  line5.shapeColor="white";

  speed1=random(40,50);
  speed2=random(80,90);
  speed3=random(60,70);
  speed4=random(50,60);

  weight=random(400,1500);

  car=createSprite(50,85,30,30);
  car2=createSprite(50,160,30,30);
  car3=createSprite(50,230,30,30);
  car4=createSprite(50,300,30,30);
  wall=createSprite(1300,200,60,350);
  wall.shapeColor="grey";
}

function draw() {
  background(0); 
  car.velocityX=speed1;
  car2.velocityX=speed2;
  car3.velocityX=speed3;
  car4.velocityX=speed4;

  car.collide(wall);
  car2.collide(wall);
  car3.collide(wall);
  car4.collide(wall);


  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;

    var deformation=(0.5*weight*speed1*speed1)/22500;
    
      if(deformation>180){
        car.shapeColor=color(235,67,52);  
      }

      if(deformation<180 && deformation>100){
        car.shapeColor=color(229,235,52);  
      }

      if(deformation<100){
        car.shapeColor=color(110,235,52);  
      }

  }

  if(wall.x-car2.x<(car2.width+wall.width)/2){
    car2.velocityX=0;

    var deformation=(0.5*weight*speed2*speed2)/22500;
    
      if(deformation>180){
        car2.shapeColor=color(235,67,52);  
      }

      if(deformation<180 && deformation>100){
        car2.shapeColor=color(229,235,52);  
      }

      if(deformation<100){
        car2.shapeColor=color(110,235,52);  
      }

  }

  if(wall.x-car3.x<(car3.width+wall.width)/2){
    car3.velocityX=0;

    var deformation=(0.5*weight*speed3*speed3)/22500;
    
      if(deformation>180){
        car3.shapeColor=color(235,67,52);  
      }

      if(deformation<180 && deformation>100){
        car3.shapeColor=color(229,235,52);  
      }

      if(deformation<100){
        car3.shapeColor=color(110,235,52);  
      }

  }

  if(wall.x-car4.x<(car4.width+wall.width)/2){
    car4.velocityX=0;

    var deformation=(0.5*weight*speed4*speed4)/22500;
    
      if(deformation>180){
        car4.shapeColor=color(235,67,52);  
      }

      if(deformation<180 && deformation>100){
        car4.shapeColor=color(229,235,52);  
      }

      if(deformation<100){
        car4.shapeColor=color(110,235,52);  
      }

  }
  drawSprites();
}