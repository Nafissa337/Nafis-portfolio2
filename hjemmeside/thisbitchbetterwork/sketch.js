var simpleTimer;
var elapsedSeconds = 0;
let highscore=0;
let x=335;
let y=275;
let cirkely=0;
let cirkelyfart=0;
let cirkelx=0;
let cirkelxfart=0;
let cirkely1=0;
let cirkelyfart1=0;
let cirkelx1=0;
let cirkelxfart1=0;
let cirkely2=0;
let cirkelyfart2=0;
let cirkelx2=0;
let cirkelxfart2=0;
let cirkely3=0;
let cirkelyfart3=0;
let cirkelx3=0;
let cirkelxfart3=0;
let cirkely4=0;
let cirkelyfart4=0;
let cirkelx4=0;
let cirkelxfart4=0;
let bredde1=0;
let bredde2=0;
let bredde3=0;
let bredde4=0;
let bredde5=0;
let bredde6=0;
let ykoordinat1=0;
let ykoordinat2=0;
let ykoordinat3=0;
let ykoordinat4=0;
let ykoordinat5=0;
let ykoordinat6=0;
let buttony=430;
let img;
let playagain=0;
function preload() {
  img = loadImage('MP2.jpg');
}

function setup() {
  createCanvas(700,550);
  background(0,0,0);
  ykoordinat1=-20;
  ykoordinat2=100;
  ykoordinat3=220;
  ykoordinat4=340;
  ykoordinat5=460;
  ykoordinat6=580
  yhastighed=5;
  bredde1=240+random(-60,60);
  bredde2=240+random(-60,60);
  bredde3=240+random(-60,60);
  bredde4=240+random(-60,60);
  bredde5=240+random(-60,60);
  bredde6=240+random(-60,60);
  cirkelx=random(-150,850);
  cirkely=-40;
  cirkelxfart=0;
  cirkelyfart=random(3,6);
  if (cirkelx<=100 && cirkely>-40){
cirkelxfart=random(2,4)} else if(cirkelx>=600 && cirkely>-40){cirkelxfart=random(-4,-2)}else {cirkelxfart=random(-3,3)}
  cirkelx1=random(-150,850);
  cirkely1=-190;
  cirkelxfart1=0;
  cirkelyfart1=random(3,6);
  if (cirkelx1<=100 && cirkely1>-40){
cirkelxfart1=random(2,4)} else if(cirkelx1>=600 && cirkely1>-40){cirkelxfart1=random(-4,-2)}else {cirkelxfart1=random(-3,3)}
  cirkelx2=random(-150,850);
  cirkely2=-340;
  cirkelxfart2=0;
  cirkelyfart=random(3,6);
  if (cirkelx2<=100 && cirkely2>-40){
cirkelxfart2=random(2,4)} else if(cirkelx2>=600 && cirkely2>-40){cirkelxfart2=random(-4,-2)}else {cirkelxfart2=random(-3,3)}
  cirkelx3=random(-150,850);
  cirkely3=-490;
  cirkelxfart3=0;
  cirkelyfart3=random(3,6);
  if (cirkelx3<=100 && cirkely3>-40){
cirkelxfart3=random(2,4)} else if(cirkelx3>=600 && cirkely3>-40){cirkelxfart3=random(-4,-2)}else {cirkelxfart3=random(-3,3)}
  cirkelx4=random(-150,850);
  cirkely4=-640;
  cirkelxfart4=0;
  cirkelyfart4=random(3,6);
  if (cirkelx4<=100 && cirkely4>-40){
cirkelxfart4=random(2,4)} else if(cirkelx4>=600 && cirkely4>-40){cirkelxfart4=random(-4,-2)}else {cirkelxfart4=random(-3,3)}
  simpleTimer = new Timer(1000);
  simpleTimer.start();
  textAlign(CENTER);
  textSize(96);
}

function draw() {
  textSize(60);
  background(0,0,0)
  fill(255,255,0)
  triangle(x,y,x+30,y,x+15,y-35);
  rect(0,ykoordinat1,bredde1,120);
  rect(0,ykoordinat2,bredde2,120);
  rect(0,ykoordinat3,bredde3,120);
  rect(0,ykoordinat4,bredde4,120);
  rect(0,ykoordinat5,bredde5,120);
  rect(0,ykoordinat6,bredde6,120);
  rect(200+bredde1,ykoordinat1,600,120);
  rect(200+bredde2,ykoordinat2,600,120);
  rect(200+bredde3,ykoordinat3,600,120);
  rect(200+bredde4,ykoordinat4,600,120);
  rect(200+bredde5,ykoordinat5,600,120);
  rect(200+bredde6,ykoordinat6,600,120);
  circle(cirkelx,cirkely,40);
  circle(cirkelx1,cirkely1,40);
  circle(cirkelx2,cirkely2,40);
  circle(cirkelx3,cirkely3,40);
  circle(cirkelx4,cirkely4,40);
  updateTimer();
  text(elapsedSeconds, 700/2, 100);
  textSize(25);
  fill(0,0,0);
  text('Highscore:',80,30);
  text(highscore,160,30);
  if (ykoordinat6>580){
    ykoordinat6-=720;
    bredde6=240+random(-60,60);
  }
  if (ykoordinat5>580){
    ykoordinat5-=720;
    bredde5=240+random(-60,60);
  }
  if (ykoordinat4>580){
    ykoordinat4-=720;
    bredde4=240+random(-60,60);
  }
  if (ykoordinat3>580){
    ykoordinat3-=720;
    bredde3=240+random(-60,60);
  }
  if (ykoordinat2>580){
    ykoordinat2-=720;
    bredde2=240+random(-60,60);
  }
  if (ykoordinat1>580){
    ykoordinat1-=720;
    bredde1=240+random(-60,60);
  }
  if (cirkely>570){
    cirkely-=590;
    cirkelx=random(-150,850);
   cirkelyfart=random(3,6);
   if (cirkelx<=100){
cirkelxfart=random(2,4)} else if(cirkelx>=600){cirkelxfart=random(-4,-2)}else {cirkelxfart=random(-3,3)}
  }
  if (cirkely1>570){
    cirkely1-=590;
    cirkelx1=random(-150,850);
   cirkelyfart1=random(3,6);
   if (cirkelx1<=100){
cirkelxfart1=random(2,4)} else if(cirkelx1>=600){cirkelxfart1=random(-4,-2)}else {cirkelxfart1=random(-3,3)}
  }
  if (cirkely2>570){
    cirkely2-=590;
    cirkelx2=random(-150,850);
   cirkelyfart2=random(3,6);
   if (cirkelx2<=100){
cirkelxfart2=random(2,4)} else if(cirkelx2>=600){cirkelxfart2=random(-4,-2)}else {cirkelxfart2=random(-3,3)}
  }
  if (cirkely3>570){
    cirkely3-=590;
    cirkelx3=random(-150,850);
   cirkelyfart3=random(3,6);
   if (cirkelx3<=100){
cirkelxfart3=random(2,4)} else if(cirkelx3>=600){cirkelxfart3=random(-4,-2)}else {cirkelxfart3=random(-3,3)}
  }
  if (cirkely4>570){
    cirkely4-=590;
    cirkelx4=random(-150,850);
   cirkelyfart4=random(3,6);
   if (cirkelx4<=100){
cirkelxfart4=random(2,4)} else if(cirkelx4>=600){cirkelxfart4=random(-4,-2)}else {cirkelxfart4=random(-3,3)}
  }
  ykoordinat1+=yhastighed;
  ykoordinat2+=yhastighed;
  ykoordinat3+=yhastighed;
  ykoordinat4+=yhastighed;
  ykoordinat5+=yhastighed;
  ykoordinat6+=yhastighed;
  cirkely+=cirkelyfart;
  cirkelx+=cirkelxfart;
  cirkely1+=cirkelyfart1;
  cirkelx1+=cirkelxfart1;
  cirkely2+=cirkelyfart2;
  cirkelx2+=cirkelxfart2;
  cirkely2+=cirkelyfart3;
  cirkelx3+=cirkelxfart3;
  cirkely4+=cirkelyfart4;
  cirkelx4+=cirkelxfart4;

if (keyIsDown(LEFT_ARROW)) {
    x -= 4;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 4;
  }

  if (keyIsDown(UP_ARROW)) {
  if (y>35) { y -= 4;
  }
  }

  if (keyIsDown(DOWN_ARROW)) {
  if (y<550)  { y += 4;  
}
}
}

function updateTimer() {
  if( simpleTimer.expired() ) {
  	elapsedSeconds++;
  	simpleTimer.start();
  }
}

function collisionfirkant() {
    setInterval(() => {
        let  collisionbredde1= (x <= bredde1 || x+30>=bredde1+200);
        let  collisionhøjde1 = (y >= ykoordinat1 && y<=ykoordinat1+120);
        let  collisionbredde2= (x <= bredde2 || x+30>=bredde2+200);
        let  collisionhøjde2 = (y >= ykoordinat2 && y<=ykoordinat2+120);
        let  collisionbredde3= (x <= bredde3 || x+30>=bredde3+200);
        let  collisionhøjde3 = (y >= ykoordinat3 && y<=ykoordinat3+120);
        let  collisionbredde4= (x <= bredde4 || x+30>=bredde4+200);
        let  collisionhøjde4 = (y >= ykoordinat4 && y<=ykoordinat4+120);
       let  collisionbredde5= (x <= bredde5 || x+30>=bredde5+200);
        let  collisionhøjde5 = (y >= ykoordinat5 && y<=ykoordinat5+120);
       let  collisionbredde6= (x <= bredde6 || x+30>=bredde6+200);
        let  collisionhøjde6 = (y >= ykoordinat6 && y<=ykoordinat6+120);
        if (collisionbredde1 && collisionhøjde1) {
            stopGame();
        } else if (collisionbredde2 && collisionhøjde2) {
            stopGame();}
      else if (collisionbredde3 && collisionhøjde3) {
            stopGame();}
      else if (collisionbredde4 && collisionhøjde4) {
            stopGame();}
      else if (collisionbredde5 && collisionhøjde5) {
            stopGame();}
      else if (collisionbredde6 && collisionhøjde6) {
            stopGame();}
    }, 10)
}
function collisioncirkel() {
    setInterval(() => {
        let  collisionbreddec1= (x >= cirkelx-20 && x<=cirkelx+20 || x+30 >= cirkelx-20 && x+30<=cirkelx+20);
        let  collisionhøjdec1 = (y-35 >= cirkely-20 && y-35<=cirkely+20 || y >= cirkely-20 && y<=cirkely+20);
        let  collisionbreddec2= (x >= cirkelx1-20 && x+30<=cirkelx1+20 || x+30 >= cirkelx1-20 && x+30<=cirkelx1+20);
        let  collisionhøjdec2 = (y >= cirkely1-20 && y<=cirkely1+20 || y >= cirkely1-20 && y<=cirkely1+20);
        let  collisionbreddec3= (x >= cirkelx2-20 && x+30<=cirkelx2+20 || x+30 >= cirkelx2-20 && x+30<=cirkelx2+20);
        let  collisionhøjdec3 = (y >= cirkely2-20 && y<=cirkely2+20 || y >= cirkely2-20 && y<=cirkely2+20);
        let  collisionbreddec4= (x >= cirkelx3-20 && x+30<=cirkelx3+20 || x+30 >= cirkelx3-20 && x+30<=cirkelx3+20);
        let  collisionhøjdec4 = (y >= cirkely3-20 && y<=cirkely3+20 || y >= cirkely3-20 && y<=cirkely3+20);
       let  collisionbreddec5= (x >= cirkelx4-20 && x+30<=cirkelx4+20 || x+30 >= cirkelx4-20 && x+30<=cirkelx4+20);
        let  collisionhøjdec5 = (y >= cirkely4-20 && y<=cirkely4+20 || y >= cirkely4-20 && y<=cirkely4+20);
        if (collisionbreddec1 && collisionhøjdec1) {
            stopGame();
        } else if (collisionbreddec2 && collisionhøjdec2) {
            stopGame();}
      else if (collisionbreddec3 && collisionhøjdec3) {
            stopGame();}
      else if (collisionbreddec4 && collisionhøjdec4) {
            stopGame();}
      else if (collisionbreddec5 && collisionhøjdec5) {
            stopGame();}
    }, 10)
}

collisionfirkant();
collisioncirkel();

function stopGame() {
image(img, 0, 0);
textSize(25);
fill(103,49,71);
text('Final score:',310,190);
text(elapsedSeconds,390,190);
noLoop();
text('Arrow up to play again',320,440);
playagain=1;
if (elapsedSeconds>highscore){
highscore=elapsedSeconds;}
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
  if (playagain>0)
  replay();
  playagain=0;
  }
}
  
function replay() {
  elapsedSeconds=0;
  x=335;
  y=275;
  cirkely-=590;
  cirkely1-=590;
  cirkely2-=590;
  cirkely3-=590;
  cirkely4-=590;
  buttony=650;
  textSize(96)
  loop();
  draw();
}