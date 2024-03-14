
let btn = document.getElementById("btn");

let mainDiv = document.querySelector(".mainDiv");




mainDiv.addEventListener("click" ,function(){
    number()
})

btn.addEventListener("click" ,function(){
    number()
})


function number(){
    
    let ranNo = Math.floor((Math.random()* 10 ) +1);
        
    switch (ranNo) {
        case 1:
            mainDiv.style.backgroundColor="yellow";
            btn.style.color="black"
            break;
        case 2:
            mainDiv.style.backgroundColor="blue";
            btn.style.color="blue"
            break;
        case 3:
            mainDiv.style.backgroundColor="black";
            btn.style.color="black"
            break;
        case 4:
            mainDiv.style.backgroundColor="green";
            btn.style.color="green"
            break;
        case 5:
            mainDiv.style.backgroundColor="white";
            btn.style.color="black"
            break;
        case 6:
            mainDiv.style.backgroundColor="teal";
            btn.style.color="teal"
            break;
        case 7:
            mainDiv.style.backgroundColor="purple";
            btn.style.color="purple"
            break;
        case 8:
            mainDiv.style.backgroundColor="orange";
            btn.style.color="orange"
            break;
        case 9:
            mainDiv.style.backgroundColor="red";
            btn.style.color="red"
            break;
        case 10:
            mainDiv.style.backgroundColor="#2fb8d6";
            btn.style.color="#2fb8d6"
            
    }
}


