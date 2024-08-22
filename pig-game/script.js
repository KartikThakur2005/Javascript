const btnew = document.querySelector("#but-new");
const btrol = document.querySelector("#but-rol");
const bthold = document.querySelector("#but-hold");
const image = document.querySelector("#dice-image");
const cur1 = document.querySelector("#score0")
const cur2 = document.querySelector("#score1")

const left = document.querySelector("#left");
const right = document.querySelector("#right");

const hold = document.querySelector("#but-hold");

const fin0 = document.querySelector("#fin0");
const fin1 = document.querySelector("#fin1");
 
let arr=[0,0];

let curr_score = 0;
let tog = 0;


function swi()
{
    curr_score = 0;
    if(!tog)
       {
           cur1.textContent=curr_score;
       }
       else
       {
            cur2.textContent=curr_score;
       }
      if(tog==0)
       {
            tog    =1;
       }
       else
       {
            tog = 0;
       }

    left.classList.toggle("back");
    right.classList.toggle("back");
}

btrol.addEventListener('click',function()
{
    
    let dice = Math.trunc((Math.random()*6))+1;
    image.src=`dice${dice}.png`;

    if(dice!=1)
    {
        curr_score = curr_score+dice;
        if(!tog)
        {
            cur1.textContent=curr_score;
        }
        else
        {
             cur2.textContent=curr_score;
        }
         
    }
    else
    {
         swi();
    }


})

hold.addEventListener('click',function()
{
    if(!tog)
    {
        arr[0] =arr[0]+curr_score;
        fin0.textContent=arr[0];
        if(arr[0]>=10)
        {
            left.classList.toggle("win");
            btrol.classList.add("hidden");
            bthold.classList.add("hidden");
           


        }
        else
        {
             swi();
        }
    }
    else
    {
        arr[1] =arr[1]+curr_score;
        fin1.textContent=arr[1];
        if(arr[1]>=10)
        {
            right.classList.toggle("win");
            btrol.classList.add("hidden");
            bthold.classList.add("hidden");
           
        }
        else
        {
             swi();
        }
    }
})

btnew.addEventListener('click',function()
{
    btrol.classList.remove("hidden");
    bthold.classList.remove("hidden");
    left.classList.remove("win");
    right.classList.remove("win");
    curr_score=0;
    arr[0] = 0;
    arr[1] = 0;
    tog = 0;
    cur1.textContent=curr_score;
    cur2.textContent=curr_score;
    fin0.textContent=arr[0];
    fin1.textContent=arr[1];
    
})
