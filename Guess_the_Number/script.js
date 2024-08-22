let num=Math.trunc(Math.random()*20);
console.log(num);

let sco=20;

let hi=0;
function game()
{
    document.querySelector(".check").addEventListener('click',function()
    {
        let inp=document.querySelector(".guess").value;
        
        if(sco<1)
        {
            document.querySelector("body").style.backgroundColor='#EA4335';
            document.querySelector("#head").textContent=" L 😂 😂 S E R";
        
            
        }
        else{
        
        if(!inp)
        {
            document.querySelector(".message").textContent="😒😒Enter the Number";
        
        }
        else if(inp==num)
        {
            hi=Math.max(sco,hi);
             document.querySelector(".number").textContent=`${num}`;
             document.querySelector(".message").textContent="🎉 Congratulation"; 
             document.querySelector("body").style.backgroundColor='#49B975';
             document.querySelector(".score").textContent=`${sco}`; 
             document.querySelector(".highscore").textContent=`${hi}`;
       
        }
        else if(inp>num)
        {
            document.querySelector(".message").textContent="TOO High";  
            sco--;
        document.querySelector(".score").textContent=`${sco}`; 
       
        }
        else if(inp<num){

          
            document.querySelector(".message").textContent="TOO Low";  
            sco--;
        document.querySelector(".score").textContent=`${sco}`; 
       
        }
       
    }
       
    })

    document.querySelector(".again").addEventListener('click',function()
    {
        sco=20;
        document.querySelector("body").style.backgroundColor='#222222';
        document.querySelector("#head").textContent="Guess My Number!";
        document.querySelector(".score").textContent=`${sco}`; 
        num=Math.trunc(Math.random()*20);
        document.querySelector(".guess").value='';
        document.querySelector(".number").textContent="?";
    })

}

game();