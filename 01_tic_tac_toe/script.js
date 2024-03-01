
let n1=prompt("enter first player name");
let n2=prompt("enter second player name");

let boxes =document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let playerTurn =document.querySelector(".turn");



switch (n1){
    case "":
        n1="Player 1"
}
switch (n2){
    case "":
        n2="player 2"
        break;
}




let turnO =true//playerX, palyerO

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame=()=>{
    if(turnO==false){
        playerTurn.innerHTML=`${n1} turn`;

    }
    else if(turnO=='none'){
        playerTurn.innerHTML=`${n1} turn`;
    }
    enableBoxes();
    msgContainer.classList.add("hide");
    turnO=true;
}
playerTurn.innerHTML=`${n1} turn`;
boxes.forEach((box) =>{
    box.addEventListener('click',() =>{
        // console.log("box was clicked");
        if(turnO){
            playerTurn.innerHTML=`${n2} turn`;
            box.innerText="O"
            turnO=false;
        }
        else{
            playerTurn.innerHTML=`${n1} turn`;
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    })
})

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}
const showWinner=(Winner)=>{
    msg.innerText=`Congratulation , Winner is ${Winner} `
    msgContainer.classList.remove("hide");
    playerTurn.style.display='none';
    disableBoxes();
}

const checkWinner =()=>{
    for(pattern of winPatterns){

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!="" ){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("Winner")
                if(pos1Val=="X"){
                    showWinner(n2);
                }else{
                    showWinner(n1);
                }

                showWinnerVideo();
            ;}
        }
    }
}



resetBtn.addEventListener('click',resetGame);
newGameBtn.addEventListener('click',resetGame);

const showWinnerVideo=()=>{
    const winnerVideo=document.getElementById('winnerVideo');
    winnerVideo.style.display='block';
    winnerVideo.play();
    winnerVideo.style.display='none';
    
}