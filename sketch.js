var n1,n2;
var b1,b2,b3,b4;
var num1,num2;


function setup() {
  createCanvas(400,400);
num1 = createInput();
num2 = createInput();

num1.position(50,20)
num2.position(200,20)

b1 = createButton("ADD")
b1.position(10,200)
b1.mousePressed(add)

b2 = createButton("SUB")
b2.position(100,200)
b2.mousePressed(subtract)

b3 = createButton("multiply")
b3.position(200,200)
b3.mousePressed(mult)

b4 = createButton("div")
b4.position(300,200)
b4.mousePressed(divide)
}

function draw() 
{
  background(30);

text("number 1", 70,50)
text("number2",270,50)
n1 = parseInt(num1.value())
n2 = parseInt(num2.value())
}

function add(){
  console.log(n1 + n2)
}

function subtract(){
  console.log(n1 - n2)
}

function mult(){
  console.log(n1 * n2)
}

function divide(){
  console.log(n1/n2)
}


