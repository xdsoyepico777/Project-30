var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "PLAY"


//Función para cargar imágenes y animaciones
function preload(){

}

//Función para declarar Sprites y grupos
function setup(){
  createCanvas(600,600);
  tower = createSprite(300,300);
  ghost = createSprite(200,200,50,50);
}

//Función para dibujar los Sprites y establecer reglas del juego
function draw(){
  background(220);
  drawSprites();
  
  if(keyDown("left_arrow")){
    ghost.x = ghost.x - 3;
  }

if(keyDown("right_arrow")){
    ghost.x = ghost.x + 3;
  }  
  
  if(keyDown("space")){
    ghost.velocityY = -10;
  }
  
  ghost.velocityY = ghost.velocityY + 0.8
  
  spawnDoors();
  
  if(gameState==="START"){
      
    //Velocidad y cambio de estado 
    
     }
  
  if(gameState==="PLAY"){
    //Fondo infinito
   
    //gravedad
     
    //Mover personaje con las flechas 
    
    //crear bases y hacer que el personaje quede sobre ellas
    
    //Aumentar puntos
      
    //Cambiar a estado GAMEOVER
    
  }
  
  //Estado GAMEOVER 
  
  if(gameState==="GAMEOVER"){
    
     }
  }


//Función para crear bases
function spawnDoors() {
  //escribe aquí el código para aparecer las puertas en la torre 
 if(frameCount%240 === 0){
   var door = createSprite(random(120,400),-50, 10,10);
   var climber = createSprite(door.x, 10,100,5);
   
   climber.x = door.x;
   
   door.velocityY = 1;
   climber.velocityY = 1;
   
 }
}

