// creating variable for all the html element 

let displayNum=document.getElementById("number")//for displaying number

let IntialNum = 0;

// decreasing the number
function Decrease(){
    IntialNum -=1;
    displayNum.innerText=IntialNum;
}

// reseting the number
function Reset(){
    IntialNum = 0;
    displayNum.innerText=IntialNum;
}

// increasing the number
function Increase(){
    IntialNum +=1;
    displayNum.innerText=IntialNum;
}


// 
window.addEventListener('beforeunload' , function(event){
    event.preventDefault();

    const message=" Your changes may not be saved.";
    event.returnValue = message;
    // return message
})