let userscore=0;
let compscore=0;
const us=document.querySelector("#userscore");
const cs=document.querySelector("#compscore");
const choices=document.querySelectorAll(".e");
const message=document.querySelector("#msg");
const b=document.querySelector("#but")
b.addEventListener("click",()=>{
    if(userscore>compscore){
        message.innerText="Congratulations!!you have won the last game ";
    }else if(compscore>userscore){
        message.innerText="You lost the last game.Wishing you luck this time";
    }else{
        message.innerText="It is a draw";
    }
    message.innerText=message.innerText+". Play your move"
    userscore=0;
    compscore=0;
    us.innerText=userscore;
    cs.innerText=compscore;

});
const score=(userchoice,compchoice)=>{
    if(compchoice===userchoice){
        console.log("draw");
        message.innerText="it is a draw";
       // return "draw";
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"? false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
    
    if (userwin) {
        userscore++;
        us.textContent = userscore;
        console.log("you win");
        message.innerText="You Win";
        return "win";
    } else {
        compscore++;
        cs.innerText =compscore;
        console.log("you lose");
        message.innerText="You Lose";
        return "lose";
    }}
};




const genCompchoice=()=>{
    const options=["rock","paper","scissors"];
    const ranindex=Math.floor(Math.random()*3);
    return options[ranindex];
}
const playGame=(userchoice)=>{
    console.log("user choice=",userchoice);
    //generate computer choice=modular
    const compchoice=genCompchoice();
    console.log("computer choice=",compchoice);
    score(userchoice,compchoice);

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playGame(userchoice);

    });
});
