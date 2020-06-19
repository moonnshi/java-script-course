/**********************
 * variable declaration
 */
var firstName='John';//string
var lastName='Smith';//string
var age=20;//number
var job="teacher";//string
var isMarried=true;//boolean
var aa;//undefined;
console.log(
    firstName+''+lastName+''+'is '+age+' years old and '+
    'Is married '+isMarried+''+aa)

/**********************
 * variable mutation and type coercion
 */
// lastName=prompt("What is your last name");
// console.log(firstName+''+lastName);

/* 
math operator (*,/,+,-)
*/
var now=33
var different=now-22;
var a=2018/33;
var b=a*2;
var c=a+b;
console.log(a+"A");
console.log(b+"B");
console.log(c+"C");
console.log(different);

/* 
logical operator (*,/,+,-)
*/
var johnAge=33;
var smithAge=22;
var result=johnAge<smithAge;
console.log(result);

/* 
typeof operator (*,/,+,-)
*/
var index;
console.log(typeof johnAge);
console.log(typeof index);
console.log (typeof 'hello world');
console.log(typeof result);

/* 
operator precedence (*,/,+,-)
*/
var now=2020;
var shoonYear=1996;
var fullAge=18;

/* 
multiple operators
*/
var isFullAge=now-shoonYear>=18;
console.log(isFullAge)+"Is full age?";

/* 
grouping operators
*/
var ageJohn=now-shoonYear;
var ageMark=35;
var average=(ageJohn+ageJohn)/2;
console.log(average+" Average age");

/* 
multiple assignment
*/
var x,y;
x=y=(3+5)*4-6;
console.log(x,y)

/* 
coding challenge(1)
*/
var markHeight=1.8288;
var markMass=57;
var johnHeight=1.55448;
var johnMass=64;
var markBMI=markMass/(markHeight*markHeight);
var johnBMI=johnMass/(johnHeight*johnHeight);
console.log(markBMI,johnBMI);
var isMarkBMIGreater=markBMI>johnBMI;
console.log("Is Mark's BMI greater than John? "+isMarkBMIGreater);

/* 
if else
*/
var civilStatus='single';
if(civilStatus==='married'){
    console.log(firstName+' is married.');
}
else{
    console.log(firstName+' will get married :) soon.');
}
var isSingle=true;
if(isSingle){
    console.log(firstName+' is single.');
}else{
    console.log(firstName+' will get married :) soon.');
}
if(markBMI>johnBMI){
    console.log('Mark\'s BMI is greater than John\'s.')
}
else{
    console.log('John\'s BMI is greater than Mark\'s.')
}

/* 
boolean logic
*/
if(age<13){
    console.log(firstName+ ' is a boy.')
}else if(age>=13 && age<20){
    console.log(firstName+ ' is a teenager.')
}else if(age>=20 && age<30){
    console.log(firstName+ ' is a young man.')
}else{
    console.log(firstName+ ' is a man.')
}

/* 
the ternary opertor and swith statements
*/

/* 
the ternary opertor 
*/
(age >= 18)?console.log(firstName+' can drink beer'):console.log(firstName+' can drink juice');
var drink =(age >= 18)?' beer':' juice';
console.log(firstName+' can drink '+ drink);

/* 
swith statements
*/
switch(age){
    case 'teacher': 
        console.log (firstName + ' teaches kids how to code. ');
    break;
    case 'driver':
        console.log(firstName + ' drives an uber. ');
    break;
    case 'designer':
        console.log(firstName + ' desings beautiful websit. ')
    break;
    default: 
        console.log(firstName + ' does something else');
}

age=30;
switch(true){
    case (age<13): 
        console.log(firstName + ' is a boy .')
    break;
    case (age >= 13 && age < 20) :
        console.log(firstName + ' is a teenager . ');
    break;
    case (age >= 20 && age < 30):
        console.log(firstName + ' is a young man .')
    break;
    default: 
        console.log(firstName + ' is a man');
}

/* 
truthy and falsy values and equality operators 
*/
//falsy values: undefined,null,'',0,NaN
//truthy values: not falsy values

var height;
if(height){
    console.log("Variable has been defined.")
}
else{
    console.log("Variable has not bee defined.")
}
height=20;
if(height){
    console.log("Variable has been defined.")
}
else{
    console.log("Variable has not bee defined.")
}

/* 
equality operator (==,===)
*/
if(height=="20"){
    console.log("The == operator does type corecion .")
}
if(height==="20"){
    console.log(false);
}
/* 
coding challenge(2) 
*/
var johnAverageScore=(89+120+103)/3;
var markAverageScore=(116+94+123)/3;
var maryAverageScore=(97+134+105)/3
var highestScore;


if (johnAverageScore>markAverageScore){
    console.log(' John is the winner with avereage score '+ johnAverageScore);
    highestScore=johnAverageScore;
}else if (johnAverageScore<markAverageScore){
    console.log(' Mark is the winner with avereage score '+ markAverageScore);
    
}else{
    console.log('It is a draw');
}

if(markAverageScore>johnAverageScore && markAverageScore>johnAverageScore){
    console.log(' Mark is the winner with average score ' + markAverageScore);
}else if(johnAverageScore>markAverageScore && johnAverageScore>markAverageScore){
    console.log(' John is the winner with average score ' + johnAverageScore);
}else if(maryAverageScore>johnAverageScore && maryAverageScore>maryAverageScore){
    console.log(' Mary is the winner with average score ' + maryAverageScore);
}else{
    console.log('It is a draw');
}

/* 
function
*/
function calculateAge(birthYear){
    return 2020-birthYear;
}
var shoonAge=calculateAge(1996);
console.log('Shoon is '+ shoonAge + ' years old.')

function yearsUntilRetire(firstName,year){
    var age=calculateAge(year);
    var retirement=65-age;
    if(retirement>0){
        console.log(firstName+' retires in '+ retirement +' years')
    }else{
        console.log(firstName+' is already retired.')
    }
}

/* 
function expression and statement
*/
//function declaration 
function doSomething(){}
//function expression
var whatDoYouWantToDo=function(firstName,job){
    switch(job){
        case 'teacher':
            return firstName+ ' teaches kids how to code. ';
        case 'designer':
            return firstName+ ' drives a cab. ';
        case 'driver':
            return firstName+ ' designs beautiful website.';
        default: 
            return firstName+ ' does something else.';
    }
}
console.log(whatDoYouWantToDo('John','teacher'));
console.log(whatDoYouWantToDo('Mark','designer'));
console.log(whatDoYouWantToDo('Jason','author'));

/* arrays
*/

//array initialization
var names=['John','Mark','Jane'];
var years=new Array(1996,1997,1999);
console.log(names);
console.log(names.length);
console.log(names[0],names[1],names[2],names[names.length]);
//array data mutation
names[0]='Mary';
console.log(names);
//different data types in array
var jane=['jane','smith',33,'actor',1999,false]
//array methods
console.log(jane);
console.log(jane.push('blue'));
console.log(jane)
console.log(jane.unshift('Mr'));
console.log(jane)
console.log(jane.pop());
console.log(jane)
console.log(jane.shift())
console.log(jane)

/*
coding challenge (4)
*/

var bills= [124,48,268];
var tip=new Array();
var paidAmount=[];
tip.push(calculateTip(bills[0]));
tip.push(calculateTip(bills[1]));
tip.push(calculateTip(bills[2]));
paidAmount.push(tip[0]+bills[0]);
paidAmount.push(tip[1]+bills[1]);
paidAmount.push(tip[2]+bills[2]);
console.log('Tips:'+tip)
console.log('Paid Amount:'+paidAmount)
function calculateTip(bill){
    switch(true){
        case (bill<50):
            return bill*0.2;
        case (bill>50 && bill<120):
            return bill * 0.15;
        default:
            return bill*0.1;
    }
}

/*
object literal
*/
var moon={
    'firstName':'ShoonLae',
    'lastName':'May',
    'birthYear':1996,
    'job':'Programmer',
    'isMarried':false
}
console.log(moon);
console.log(moon.firstName+ ' First Name');
console.log(moon['lastName'] + ' Last Name')
moon['firstName']= 'Moonshi';
console.log(moon)

var shi=new Object();
shi.firstName="win";
shi.lastName="metawin";
shi.birthYear=1999;
shi.isMarried=false;
console.log(JSON.stringify(shi)+ 'shi')

/* method
*/
var jane={
    'firstName':'ShoonLae',
    'lastName':'May',
    'birthYear':1996,
    'job':'Programmer',
    'isMarried':false,
    calcAge(){
        this.age=2020-this.birthYear;
    }
}
console.log(JSON.stringify(jane)+' jane');

var shoonLaeMay={
    'fullName':'Shoon Lae May',
    'mass': 41,
    'height':5,
     calcBMI:function(){
        this.bmi=this.mass/(this.height*this.height)
    }
}

var winmetawin={
    'fullName':'Win meta Win',
    'mass': 67,
    'height':6.3,
    calcBMI:function(){
        this.bmi=this.mass/(this.height*this.height)
     }
}

shoonLaeMay.calcBMI()
winmetawin.calcBMI();
console.log(shoonLaeMay.bmi,winmetawin.bmi)

if (shoonLaeMay.bmi>winmetawin.bmi){
    console.log(shoonLaeMay.fullName + ' has greater BMI.')
}
else if (shoonLaeMay.bmi<winmetawin.bmi){
    console.log(winmetawin.fullName + ' has greater BMI.')
} else {
    console.log('They have the same BMI');
}

/*
loop and iteration
*/
var fruits=['orange','strawberry',20,50,'grape','blueberry',100]
for(var i=1;i<=20;i++){
    console.log(i);
}
for(var i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
for(var i=0;i<fruits.length;i++){
    if(typeof fruits[i] !== 'string') continue;
    console.log(fruits[i]);
}
for(var i=0;i<fruits.length;i++){
    if(typeof fruits[i] !== 'string') break;
    console.log(fruits[i]);
}

/*
coding challenge (5)
*/
var newtipArray=[];
var finalPaidArr=[];
var billObj={
    'bill':[124,48,268,180,42],
     calculateTip:function(){
        for(var i=0;i<this.bill.length;i++){
            switch(true){
                case (this.bill[i]<50):
                    newtipArray.push(this.bill[i]* 0.2);
                    finalPaidArr.push(newtipArray[i]+this.bill[i]);
                break;
                case (this.bill[i]> 50 && this.bill[i] <200):
                    newtipArray.push(this.bill[i] * 0.15);
                    finalPaidArr.push(newtipArray[i]+this.bill[i]);
                break;
                default:
                    newtipArray.push(this.bill[i] * 0.1);
                    finalPaidArr.push(newtipArray[i]+this.bill[i]);
            }
        }
    }
}
billObj.calculateTip();
console.log(newtipArray+"Tip Array");
console.log(finalPaidArr+"Final Paid Array")

var markFamilyObj={
    'bill':[77,375,110,45],
     calculateTip:function(){
        for(var i=0;i<this.bill.length;i++){
            switch(true){
                case (this.bill[i]<50):
                    newtipArray.push(this.bill[i]* 0.2);
                    finalPaidArr.push(newtipArray[i]+this.bill[i]);
                break;
                case (this.bill[i]> 50 && this.bill[i] <200):
                    newtipArray.push(this.bill[i] * 0.15);
                    finalPaidArr.push(newtipArray[i]+this.bill[i]);
                break;
                default:
                    newtipArray.push(this.bill[i] * 0.1);
                    finalPaidArr.push(newtipArray[i]+this.bill[i]);
            }
        }
    }
}
markFamilyObj.calculateTip();

console.log(newtipArray+"Tip Array");
console.log(finalPaidArr+"Final Paid Array")

markFamilyBillArray=[77,375,110,45];
function averageTip(){
    var sum=0;
    for(var i=0;i<markFamilyBillArray.length;i++){
        sum+=markFamilyBillArray[i]
    } 
    console.log(sum/markFamilyBillArray.length+'Average Tip')
}
averageTip();
