const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase;
var playerBase;
var computer,player;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	computerBase=new ComputerBase(100,random(450,height-300),180,150); 
  playerBase=new PlayerBase(900,random(450,height-300),180,150);
  player=new Player(100,playerBase.body.position.y-138,50,180);
  computer=new ComputerPlayer(900,computerBase.body.position.y-140,50,180);


   //Create Player Base and Computer Base Object


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
playerBase.display();
computerBase.display();

   //display Player and computerplayer
player.display();
computer.display();

}
