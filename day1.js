console.log("Hello World");
//Declaring a variable, name and the value is Muzaffar
var name = "Muzaffar";
//Show variable name in the console
console.log(name);
//Show Hello+(variable) inside the console -> + here means combining two words -> Concatenation
console.log("Hello "+name);
var city='Bangi';
console.log(city);
var a=10;
var b=3;
var sum=a+b;
console.log(sum);
//minus -
var minus=a-b;
console.log(minus);
//product *
var product=a*b;
console.log(product);
//division /
var division=a/b
console.log(division);
//modulo % / the remainder of a division operation 10 / 3 = 3 (remainder/baki=1)
var modulo=a % b;
console.log(modulo);

var hungry=true;
var sleepy=false;
//&&, ||, !
var longbreak=hungry&&sleepy
console.log(longbreak);

var take5=hungry || sleepy;
console.log(take5);

var reversehungry=!hungry;
console.log(reversehungry);

if (hungry==false){
  console.log("Let's have dinner");
}
else{
  console.log("Let's wait until class finish");
}

var age=16;
if (age < 18){
  console.log("You cannot enter the cinema");
}
else{
  console.log("You may enter the cinema");
}

if (age < 13){
  console.log("You cannot watch the movie");
}
else if (age<18){
  console.log("You can watch with parents");
}
else{
  console.log("You may watch the movie");
}

var number=12;
//Do some line of code to check either this is an odd or even number - This is an odd number, this is an even number
//Check the division operation with 2... (modulo)
//either this or that (either a otherwise b)
if (number % 2 == 0){
  console.log("This is an even number");
}
else{
  console.log("This is an odd number");
}

var price=100;
var passengerage=66;
//either a, or b, or c or otherwise
if (passengerage<19){
  var finalprice=price*0.5;
  console.log("The final price is RM "+finalprice);
}
else if (passengerage<41){
  console.log("The final price is RM "+price);
}
else if (passengerage<66){
  console.log("The final price is RM "+finalprice);
}
else{
  var finalprice=price*0.5;
  console.log("The final price is RM "+finalprice);
}

//Dari (from)...until(sehingga);every iteration add by 1
for (var i=0; i<10; i++){
  console.log(i);
}

//Dari... from 10, until(sehingga) 0, every iteration remove by 1
for (var i=10; i>0; i--){
  console.log(i);
}

//From 1 until 10, every iteration i will add by 2
for (var i=1; i<10; i+=2){
  console.log(i);
}

var multiplier=7;
var lines=12;
//Dari 1, sehingga 13 (lines+1)
for (var i=1; i< lines+1; i++){
  console.log(i+" x " + multiplier + " = " + multiplier*i);
}
