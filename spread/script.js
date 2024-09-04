// let arr = [1, 2, 3, 4];

// console.log(...arr);

// let newarr = [...arr, 5, 6];
// console.log(newarr);



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
            open : 0,
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
   },

   pasta_recipe: function(ing1, ing2, ing3)
   {
      console.log(ing1);
      console.log(ing2);
      console.log(ing3);
   },

   pizza_recipe: function(main, ...other)
   {
       console.log(main);
       console.log(other);  
   }
}


// rest.orderDeliver({
//     time : '22:30',
//     address: "vill -Sakrain",
//     date: '26-08-24',
//     startIndex:1,
//     mainIndex:2,

// })

// let newmenu = [...rest.starterMenu, "Gonnoci"];

// console.log(newmenu);

// let newmenu = [...rest.mainMenu, ...rest.starterMenu];

// console.log(newmenu);


// let ingredient = [
//     prompt("1"),
//     prompt("2"),
//     prompt("3"),
// ]

// rest.pasta_recipe(...ingredient);


// let newrest = {...rest, founder:"Kartik",newlunch:[1,2,3]}












// ------------------------------------------------------ REST ------------------------------------------------

// let arr = [1, 2, 3, 4, 5];

// let [a, b, ...c] = arr;

// console.log(a, b ,c);


// let [piza, ,pasta, ...otherfood] = [...rest.mainMenu, ...rest.starterMenu];

// console.log(piza, pasta, otherfood);


// let {sat , ...work} = rest.openingHour;

// console.log(work);


// function add(...number)
// {
//      console.log(number);
// }

// let arr = [1, 2, 3, 4, 5]
// add(...arr, 10, 20, 30);

// let ing = [
//     prompt("1"),
//     prompt("2"),
//     prompt("3"),

// ]

// rest.pizza_recipe(...ing);




// ---------------------------------------------- For off

// let menu = [...rest.mainMenu,...rest.starterMenu];

// for(let i of menu) console.log(i);

// destrcuting menu inde and item in for of;

// for (let [index,item] of menu.entries())
//     {
//         console.log(index, item);
//     }


// in object

















// ----------------------------- optional chaning

// console.log(rest.openingHour.mon.open);
// console.log(rest.openingHour.mon?.open);

// let arr = ["mon","tue","thus","fri",'sat',"sun"];

// for(let day of arr)
// {
//       let open =rest.openingHour[day]?.open ??"closed";
     
//       console.log(`On ${day}, we open at ${open} `);

// }


// console.log(rest.order?.(1,0) ?? "method not found");


    


    // for (let day of Object.keys(rest.openingHour))
    // {
    //      console.log(`The hotel is open at ${day}` );
    //      console.log(`open : ${rest.openingHour[day].open}`);
    //      console.log(`close : ${rest.openingHour[day].close}`);
         
    // }

    // let ent = Object.entries(rest.openingHour);

    // console.log(ent);

    // for(let [day,{open, close} ] of ent)
    //     {
    //         console.log(`open at ${day} at ${open} and close at ${close}`);
    //     }



    // ------------------------- CODING CHALLANGE 2


    let football = {
        Bayern_Dortmud:
        {
             score:
             {
                kartik:1,
                thakur:1,
                pankaj:1,
             }

        },
        Borrussia_Dortmad:
        {
            score:{

            k:0,
            t:1,
            p:1,
            }
        },
    }


    let Bayer = Object.entries(football.Bayern_Dortmud.score);
    let Boris = Object.entries(football.Borrussia_Dortmad.score);
     let Borisscore =0;
     let BayerScore = 0;

       for(let [name,score] of Bayer)
        {
             console.log(`${name} score : ${score}`);
             BayerScore = BayerScore+score;
             
        }

            for(let [name,score] of Boris)
            {
                 console.log(`${name} score : ${score}`);
                 Borisscore = Borisscore+score;
            }

    let Bayervg = (BayerScore/(Borisscore+BayerScore))*100;
    console.log(Bayervg)




            
        