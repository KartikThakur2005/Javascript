// const me =
// {
//      age: 30,
//      name : "kartik",
// }

// const frnd =  me;

// console.log(me);

// frnd.age = 1;

// // console.log(frnd);
// // console.log(me);

//  let x = new Set([frnd,me]);

//  console.log(x.size);



// ------------------------ Destructing


// let arr = [10, 20];
// let [x ,z] = arr;

// console.log(arr);


// [x,z] = [z,x];

// console.log(arr);


// const rest = 
// {
//     name : "Kartik",
//     location : "Viil Sakrain",

//     starterMenu :["Focoaii", "Brushet", "Garlic"],

//     mainMenu :["Pizza", "Pasta", "Risooto"],

//     order : function( startIndex, mainIndex)
//     {
//         return [this.starterMenu[startIndex],this.mainMenu[mainIndex]];
//     },


// }


// const [a, b]= rest.order(1,2);

// console.log(a,b);


// let nest = [2, 4 , [10, 20]];

// // let [i , , j] = nest;

// let [i , , [ j, k]] = nest;

// console.log(i, j, k);




// ------------------------- DESCTRUCTING OBJECT 



// const rest = 
// {
//     name : "Kartik",
//     location : "Viil Sakrain",

//     starterMenu :["Focoaii", "Brushet", "Garlic"],

//     mainMenu :["Pizza", "Pasta", "Risooto"],

//     order : function( startIndex, mainIndex)
//     {
//         return [this.starterMenu[startIndex],this.mainMenu[mainIndex]];
//     },

//     openingHour :
//     {
//         thus: {
//             open : 10,
//             close:20,
//         },
//         fri: {
//             open : 11,
//             close:21,
//         },
//         sat: {
//             open : 12,
//             close:22,
//         },

//     }

// }


// let {starterMenu, mainMenu, openingHour} = rest;

// console.log(starterMenu, mainMenu, openingHour);



// let {name:name, starterMenu:menu ,openingHour:hour} = rest;

// console.log(name,menu,hour);


// let {menu = [], starterMenu = []} = rest;

// console.log(menu,starterMenu)


//  ----------  MUTATING VARIABLE


// let a = 111;
// let b = 999;

// let obj = {a:23, b:7, c:14};

// ({a,b} = obj);

// console.log(a,b);









// ------------------------- EXAPMPLE ----------------

// const rest = 
// {
//     name : "Kartik",
//     location : "Viil Sakrain",

//     starterMenu :["Focoaii", "Brushet", "Garlic"],

//     mainMenu :["Pizza", "Pasta", "Risooto"],

//     order : function( startIndex, mainIndex)
//     {
//         return [this.starterMenu[startIndex],this.mainMenu[mainIndex]];
//     },

//     openingHour :
//     {
//         thus: {
//             open : 10,
//             close:20,
//         },
//         fri: {
//             open : 11,
//             close:21,
//         },
//         sat: {
//             open : 12,
//             close:22,
//         },

//     }

// }

// let {name:name, starterMenu:menu, openingHour:hour} = rest;

// console.log(hour);


// const {fri:{open, close}} = hour;



// console.log(open, close);   






const rest = 
{
    name : "Kartik",
    location : "Viil Sakrain",

    starterMenu :["Focoaii", "Brushet", "Garlic"],

    mainMenu :["Pizza", "Pasta", "Risooto"],

    order : function( startIndex, mainIndex)
    {
        return [this.starterMenu[startIndex],this.mainMenu[mainIndex]];
    },

    openingHour :
    {
        thus: {
            open : 10,
            close:20,
        },
        fri: {
            open : 11,
            close:21,
        },
        sat: {
            open : 12,
            close:22,
        },

    },
   orderDeliver: function({startIndex, mainIndex, date, time, address})
   {
          console.log(this.starterMenu[startIndex]);
          console.log(this.mainMenu[mainIndex]);
          console.log(time);
          console.log(date);
          console.log(address);
   }
}


rest.orderDeliver({
    time : '22:30',
    address: "vill -Sakrain",
    date: '26-08-24',
    startIndex:1,
    mainIndex:2,

})

