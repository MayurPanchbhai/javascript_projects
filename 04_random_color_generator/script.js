let button = document.getElementById("button1");
let main_div = document.querySelector(".main-div");
let colorCode = document.querySelector("#color-code");


button.addEventListener("click", function(){
    let coll=codeGenerator();
    main_div.style.backgroundColor=coll;
    colorCode.innerHTML=coll;

});



function codeGenerator(){
    let color='#';
    const character='0123456789ABCDEF';
    
    for(let i=0;i<6;i++){
        color += character[Math.floor(Math.random()*16)]
    }
    return color;
}


