let randomNum=Math.round(Math.random()*100);
const userInput= document.querySelector('#number');

// form
const form=document.querySelector('form');
 
//result 
const result=document.querySelector('.result'); 

//all guesses text 
const guessTag=document.querySelector('.all-guesses');

//submit button
const submitBtn=document.querySelector('.buttonStyle');

//selecting restart button 
const startGame=document.querySelector('#restart');

//all guesses track here
const allGuesses=[];


form.addEventListener('submit',(e)=>{
    e.preventDefault(); //default behaviour prevented
    const userInputValue=parseInt(userInput.value);
 
     //limit of five guesses 
    if(allGuesses.length>=5){
        result.innerText='You have reached your limits! Press Start to try again';
        submitBtn.disabled=true;
        startGame.disabled=false;
        startGame.style.cursor='pointer';
        submitBtn.style.cursor='not-allowed';
        userInput.value=''; 
        return;
    }
    
    // checking whether the userInput value is correct to the hidden random number or not 

    if(userInputValue>randomNum){
        result.innerText='Too High! Try again';
    }

    else if(userInputValue<randomNum){
        result.innerText='Too Low! Try again';
    }

    else{
        result.innerText='Congratulations! You guessed it correctly';
        startGame.disabled=false;
        submitBtn.disabled=true;
        startGame.style.cursor='pointer';
        submitBtn.style.cursor='not-allowed';

    }
    allGuesses.push(userInputValue);
    guessTag.innerText=`Your guesses ${allGuesses}`;
    userInput.value='';
});

//Button to resart the game
startGame.addEventListener('click', ()=>{
 guessTag.innerText='';
 result.innerText='';
 startGame.disabled=true;
 submitBtn.disabled=false;
 allGuesses.length=0;
 submitBtn.style.cursor='pointer';
 startGame.style.cursor='not-allowed';
 randomNum=Math.round(Math.random()*100);
});
