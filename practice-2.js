// number 1 (a)
var fruits =['apple', 'banana', 'orange'];

console.log(fruits.indexOf('banana'))
// output 1
fruits[1] = 'mango';
console.log(fruits)
// output [ 'apple', 'mango', 'orange' ]


// number 1 (b)
fruits[2]= 'watermelon';
console.log(fruits)
// output [ 'apple', 'mango', 'watermelon' ]




// number 2
var myMarks = 85;

if(myMarks >= 80){
    console.log('Grade A')
    
}
else if(myMarks >= 60){
    console.log('Grade B')
}
else if(myMarks >= 50){
    console.log('Grade C')
}
else if(myMarks >= 40){
    console.log('Grade D')
}
else {
    console.log('Grade F')
}
// output-- Grade A


var tom =66;
if(  tom>= 80){
    console.log('Grade A')
    
}
else if( tom >= 60){
    console.log('Grade B')
}
else if( tom >= 50){
    console.log('Grade C')
}
else if( tom >= 40){
    console.log('Grade D')
}
else {
    console.log('Grade F')
}
// output-- Grade B


var jane =95;
if(  jane>= 80){
    console.log('Grade A')
    
}
else if( jane >= 60){
    console.log('Grade B')
}
else if( jane >= 50){
    console.log('Grade C')
}
else if( jane >= 40){
    console.log('Grade D')
}
else {
    console.log('Grade F')
}
// output-- Grade A

var peter = 56;
if(  peter >= 80){
    console.log('Grade A')
    
}
else if( peter >= 60){
    console.log('Grade B')
}
else if( peter >= 50){
    console.log('Grade C')
}
else if( peter >= 40){
    console.log('Grade D')
}
else {
    console.log('Grade F')
}
// output-- Grade C

var john = 40;
if(   john >= 80){
    console.log('Grade A')
    
}
else if(  john >= 60){
    console.log('Grade B')
}
else if(  john >= 50){
    console.log('Grade C')
}
else if(  john >= 40){
    console.log('Grade D')
}
else {
    console.log('Grade F')
}
// output-- Grade D



// number 3(1)
var num1 = 13;
var num2 = 79;
var num3 = 45;
if(num1 >= num2 && num1 >= num3){
    console.log('largest number is 13')
}
else if (num2 >= num1 && num2 >= num3){
    console.log('largest number is 79')
}
else {
    console.log('largest number is 45')
}
// output-- largest number is 79

// number 3(2)
var side1 = 9;
var side2 = 8;
var side3 = 9;

if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log('Isosceles Triangle')
}
// output-- Isosceles Triangle