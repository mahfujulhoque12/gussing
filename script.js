totalAttemps=5;
attemps=0;
totalWin=0;
totalLost=0;
const cardBody=document.querySelector(".card-body");
const form=document.querySelector("form");
const gussingNumber=form.querySelector("#gussingNumber");
const checkButton=form.querySelector("#check");
const resultText=cardBody.querySelector(".resultText");
const lostWon=document.createElement("p");
const remainingAttemps=cardBody.querySelector(".remainingAttemps");

form.addEventListener("submit",function(event){
    event.preventDefault();
   
    attemps++;
    if(attemps>5){
        gussingNumber.disabled=true;
        checkButton.disabled=true;
    }else{
        let number=Number(gussingNumber.value)
        checkResult(number);
        remainingAttemps.innerHTML=`Remaining attemps:${totalAttemps-attemps}`
    }
    gussingNumber.value="";
    
})
function checkResult(gussingNumber){
    const randomNumber=getRandomNumber(5);
    if(gussingNumber==randomNumber){
        resultText.innerHTML=`you won the game`;
        totalWin++;
    }else{
        resultText.innerHTML=`you have lost,random number was:${randomNumber}`;
        totalLost++;
    }
    lostWon.innerHTML=`Won:${totalWin},Lost:${totalLost}`;
    lostWon.classList.add("large-text");
    cardBody.appendChild(lostWon);

}

function getRandomNumber(limit){
    return Math.floor(Math.random()*limit)+1;
}