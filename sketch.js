//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload()
{
	//load images here
  dog=loadImage("images/dogimg.png");
  happyDog=loadImage("images/dogimg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(300,300,50,30);
  dog.addImage("images/dogimg.png");
  var dog = database.ref('dog');
  dog.on("value",showError)
  foodstock=database.ref('food')
  foodstock.on("value",readstock);
}


function draw() {  
  background(46, 139, 87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("images/dogimg1.png");
  }
  drawSprites();
  //add styles here
  textSize (35)
  fill(white)
  stroke(5)
  text("Note: Press UP_ARROW key to feed the dog with Milk")

readStock();
writeStock();
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
database.ref('/').update({
  Food:x
})
}
