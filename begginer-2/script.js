// 'use strict'

// let xhello=false;
// xhell=true;
// if(xhello)console.log("hello");



// -----> function decleration

// function age(year)
// {
//     return 2024-year;
// }

// console.log(age(2005));





// ----> function expression
// var age=function(year)
// {
//    return 2024-year;
// }

// console.log(age(2005));


// -----> arrow function 

//  const age= year=>2024-year;

//  console.log(age(2005));


// var ret= (year)=>
//     {
//          let age=2024-year;
//          let rem=60-age;
//          return `the age is ${age} and retirement will be at ${rem}`;
//     }

// console.log(ret(2005));




//  ---------- function calling another function -------


// var age=(year)=>
// {
//      let rem=2024-year;
//      console.log(ret(rem));
// }


// var ret=function(age)
// {
//     return 60-age;
// }

// age(2005);



// ----------------------------- Object -----------------

// let details=
// {
//     firstname:"kartik",
//     lastname:"Thakur",
//     birthyear:2005,
//     // age:(birthyear)=>2024-birthyear,
// };

//  details.location="Himachal"
// console.log(details);


// console.log(details["first"+"name"]);

// console.log(details.age(2005))

// console.log(details["age"](2004))

// let details=
// {
//     firstname:"kartik",
//     lastname:"Thakur",
//     birthyear:2005,
//     age:function()
//     {
//         return 2024-this.birthyear
//     },
// };

// console.log(details)
// console.log(details.age())


let details=
{
    firstname:"kartik",
    lastname:"Thakur",
    birthyear:2005,
    calcage:function()
    {
        this.age=2024-this.birthyear;
        return this.age;
    },

    calcSummary:function()
    {
        return this .demo=`This is ${this.firstname} ${this.lastname} 
        .My age is ${this.age}`
    }
};
console.log(details.calcage());   

console.log(details.age);

console.log(details.calcSummary())
console.log(details.demo);
console.log(details)



const mark=
{
    fullname:"Mark Miller's",
    mass:78,
    height:1.69,

    calcBMI:function()
    {
        return this.bmi=(this.mass/(this.height**2))
     }
}

const john=
{
    fullname:"John Smith's",
    mass:92,
    height:1.95,

    calcBMI:function()
    {
        return this.bmi=(this.mass/(this.height**2))
     }
}

mark.calcBMI();
john.calcBMI();
   if(mark.bmi>john.bmi)
    {
        console.log(`${mark.fullname} BMI (${mark.bmi}) is higher than ${john.bmi} (${john.bmi})!`)
    }
else
        {
            console.log(`${john.fullname} BMI (${john.bmi}) is higher than ${mark.bmi} (${mark.bmi})!`)
        }