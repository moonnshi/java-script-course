/* Lecture: Hoisting */
/* Note:
        1) Hoisting works with function declaraction not function expression
*/

/* Function Hoisting */

calculateAge(1996);

function calculateAge(year){//function declaration
    console.log(2020-year);//24
}

//retirement(1996);// Uncaught type error: retirement is not a function
var retirement=function(year){//function expression
    console.log(65-(2020-year));//
}
retirement(1996);//21

/* Variable Hoisting */
console.log(age);//undefined
var age=24;

function foo(){
    console.log(age);//undefined
    var age=65;
    console.log(age)//65
}

foo();//65
console.log(age);//24


