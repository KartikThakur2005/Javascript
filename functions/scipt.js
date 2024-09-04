// // -------------- High order Function
// let rem_space = function(str)
// {
//     return str.replace(/ /g, '').toLowerCase();
// };

// let first = function(str)
// {
//     let [a, ...other] = str.split(' ');
    
//     return [a.toUpperCase(), ...other].join(' ');
// }



// let transform = function(str, fn)
// {
//     console.log(str);
    
//     console.log(fn(str));
// }

// transform("JavaScript is the best language", rem_space);




// --------------- HOW TO RETURN A FUNCTION



// let gree = function(Hey)
// {
//     return function(name)
//     {
//         console.log(`${Hey} ${name}`)
//     }
// }

// // let fir = gree("Hello");

// // fir("kartik");

// gree("hello")("Kartik");


// let gree = (greet) => name => console.log(`${greet} ${name}`);

// gree("hello")("kartik");




    
// --------------------------- CALL AND APPLY



// let airIndia = {
     
//     airline: "airIndia",
//     iataCode: "IN",
//     booing: [],

//     book : function(flightNum, name)
//     {
//         console.log(`Thanks for booking ${this.airline} your name is ${name}, flightnum is ${flightNum}`)

//         this.booing.push({"name" :name,
//             "flightNum":flightNum,
//         })
//     }

// }

// // airIndia.book(1, "Karik");
// // airIndia.book(2, "Thakur"),

// // console.log(airIndia.booing);

// //  ------------
// // | CALL       |
// //  ------------

// let Indigo = {
       
//     airline: "airIndia",
//     iataCode: "IN",
//     booing: [],
// }

// // book = airIndia.book;

// // // book.call(1, "Kartik")   ---->does not work



// // console.log(Indigo.booing)

// let book = airIndia.book.bind(Indigo);

// console.log(Indigo);

//  book.call(Indigo, 1, "Kartik")

//  console.log(Indigo);









// --------------------------------  Immediately invoked function --------------------------------


// (function()
// {
//     console.log("This will never used again")
// })();

// (()=> console.log("THIS WILL ALSO RUN IMMEDIATELu"))();






// -------------------------------------------------- CLOUSER --------------------------------

// let secureBook = function(){
//     let passenger = 0;

//     return function(){
//         passenger++;
//         console.log(`${passenger} passenger`)
//     }
// }

// const book = secureBook();

// book();
// book();
// book();


let  h ;

let fun = function () 
{
    let ans = 23;
    h = fun()
    {
        console.log(2*23);
    }    
}

fun();
h();