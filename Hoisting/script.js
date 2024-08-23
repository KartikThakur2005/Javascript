
// console.log(abc(2,3));
// console.log(abcd(2,4));
// console.log(arrow)


// In this case the value will be printed


// function abc(a,b)
// {
//     return a+b;
// }

// In this case if show ReferenceError: Cannot access 'abcd' before initialization
// const abcd = function abc(a,b)
// {
//     return a+b;
// }

// const arrow = (a,b)=>a+b;



// In this case it show TypeError: abcd is not a function 
// because of hoisting

// var abcd = function(a,b)
// {
//     return a+b;
// }

// var arrow = (a,b)=>a+b;


// var x =1;
// console.log(x === window.x);

// let y = 2;
// console.log(y===window.y);

// const z = 3;
// console.log(z === window.z);




// let x = 1;

// function test()
// {
//     console.log(x);

//     let x = 2;
    
//     console.log(x);

// }

// test();


// var x = 1;

// function test()
// {
//     console.log(x);

//     var x = 2;
    
//     console.log(x);

// }

// test();




// ---------------------------------------- this

// const kar =
// {
//    name:"kartik",
 
//     prin: function(){
//         console.log(this.name);
//      }
   
//  }

//  console.log(kar);


//  console.log(kar.prin());


 
// 1> in simple 

// console.log(this);



// 2> inside a normal function 


// let fun = function cal(a)
// {
//     //  console.log(2024 - this.a);

//     //  console.log(this);

//     console.log(2024 -a);

//     console.log(this);
// }

// fun(2005);


// 3> inside a arrow function



// let fun = (a)=>
// {
//     //  console.log(2024 - this.a);

//     //  console.log(this);

//     console.log(2024 -a);

//     console.log(this);
// }

// fun(2005);






// ------------------------------ Arrow vs Normal function ------
// let name = "window"


// let x  = 
// {
//     name:"kartik",
      
//     normal:function()
//     {
//         console.log(this.name);
//     },

//     arrow :()=>
//         {
//             console.log(this.name);
//         }

// }


// x.normal();
// x.arrow();



// 5> Int this case we are callinf this insdie this which is undefinde


// Ouestion
// let x  = 
// {
//     name:"kartik",
      
//     normal:function()
//     {
        
//         function test()
//         {
//             console.log(`hello ${this.name}`);
//         }

//         test();
//     },


// }


// x.normal();


// Answer : use arrow function

let x  = 
{
    name:"kartik",
      
    normal:function()
    {
        
        let test= ()=>
        {
            console.log(`hello ${this.name}`);
        }

        test();
    },


}


x.normal();
