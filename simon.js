let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
let h3=document.querySelector("h3");



document.addEventListener("keypress",function(){
    if(started==false){
        console.log("start the game");
        started=true;
    }
    levelUp();

});
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(randomBtn);
}
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
};

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
       }

    }
    else{
        
        h2.innerHTML=`Game Over! Your score is: <h2>${level*5}</h2> <br> 
        Your level was: <h2>${level}</h2> <br>press any key to start`;
        console.dir(h2);
       
       

       // console.dir(h2);
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        let hiScore=0;
        if(hiScore<level){
            hiScore=level*5;
            h3.innerText=`HIGH SCORE :- ${hiScore}`;
        }
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

   userColor= btn.getAttribute("id");
   userSeq.push(userColor);
   console.log(userSeq);

   checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
};

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}