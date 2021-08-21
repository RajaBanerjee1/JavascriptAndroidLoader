function setup() {
	createCanvas(500, 400);
  console.log("red is up")
   console.log("green is right")
   console.log("yellow is down")
   console.log("blue is left")

}
a=30
b=30
c=90
d=30
e=300
f=200
var clicked = false
var canClick = true
var col=function(color){}
var color=[]
var runcolor=prompt("Which color do you want to be?")
var w= a-10
var x=b-10
var y=c-10
var z=d-10
var victory = "";
var pauseGame = false;
var explode = 10
change=1
change=change*1.5
explode=explode+change

function draw() {
//runner
background("skyBlue")
fill(runcolor)
ellipse(e,f,20,20)
//chasers
fill("black")
rect(a,b,30,30)
rect(c,d,30,30)
if(mouseX <= 20 && mouseY <= 20){
  }
  fill("red")
 rect(350,250,50,50)
 fill("blue")
 rect(300,300,50,50)
 fill("yellow")
 rect(350,300,50,50)
 fill("green")
 rect(400,300,50,50)
if(canClick){
    addEventListener("mousedown", e => {
      clicked = true;
      canClick = false;
    });
  }
  addEventListener("mouseup", e => {
    clicked = false;
    canClick = true;
  });
 if(!pauseGame){
  //green
  if(mouseX > 400 && mouseX < 450 && mouseY > 300 && mouseY < 350){
        e=e+2
        a=a-1.5
        c=c=1.5
        //green
      }else if(mouseX > 350 && mouseX < 400 && mouseY > 300 && mouseY < 350){
        f=f+2;
        b=b-1.5
        d=d-1.5
      }else if(mouseX > 300 && mouseX < 350 && mouseY > 300 && mouseY < 350){
        e=e-2
        a=a+1.5
        c=c-1.5
    }else if(mouseX > 350 && mouseX < 400 && mouseY > 250 && mouseY < 300){
    f=f-2
    b=b+1.5
    d=d+1.5
   }
   if(e<-10){
     e=450
   }
if(e>510){
  e=20
}
if(f<-10){
  f=400
}
if(f>410){
  f=20
}






  if(a<-10){
     a=450
   }
if(a>510){
  a=20
}
if(b<-10){
  a=450
}
if(b>410){
  a=20
}




  if(c<-10){
     c=450
   }
if(c>510){
  c=20
}
if(d<-10){
  d=350
}
if(d>410){
  d=20
}
  if(e>=a-15 && e<=a+15 && f>=b-15 && f<=b+15&& victory == ""){
    victory=prompt("You won! How was the game?")
    console.log("You did great! You felt "+  victory + ". Thank you for your feedback")
    pauseGame = true;
  } if(e>=c-15 && e<=c+15 && f>=d-15 && f<=d+12&& victory == ""){victory=prompt("You won! How was the game?")
    console.log("You did great! You felt "+  victory + ". Thank you for your feedback")
    pauseGame = true;}




 }

}