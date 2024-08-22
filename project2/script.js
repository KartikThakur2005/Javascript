
let btn=document.querySelectorAll(".btn");
let cont=document.querySelector(".cont");
let close=document.querySelector(".close-btn");

for(let i=0;i<btn.length;i++)
{
    btn[i].addEventListener('click',function()
    {
          cont.classList.remove("hidden");

    })
}

close.addEventListener("click",function()
{
    cont.classList.add("hidden");
})

document.addEventListener("keydown",function(e)
{
    console.log(e)
    if(e.key=="Escape")
    {
            if(!cont.classList.contains("hidden"))
                {
                    cont.classList.add("hidden");
                } 
    }
})
