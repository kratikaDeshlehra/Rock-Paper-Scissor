let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}
const drawGame=()=>{
    msg.innerText="It's a draw, Play again."
    msg.style.backgroundColor=" #081b31";
} 
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";  
    } 
    else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`you lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
       
    }
}
const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
   const compChoice= genCompChoice();
   console.log("computer choice =",compChoice);
   if(userChoice===compChoice){
          drawGame();
   }  
   else{
    var userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;
    } 
    else if(userChoice==="paper"){
        userWin=compChoice==="rock"?true:false;
    } 
    else{
        userWin=compChoice==="rock"?false:true;
    } 
    showWinner(userWin,userChoice,compChoice);
   }
  

}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    })
});
