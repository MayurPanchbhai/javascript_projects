let c=document.getElementById("celsius");
let f=document.getElementById("fahrenheit");
let k=document.getElementById("kelvin");
let b=document.getElementById("btn");
let o=document.getElementById("output");


// values


b.addEventListener("click",function(){
    let cInput=parseFloat(c.value);
    let fInput=parseFloat(f.value);
    let kInput=parseFloat(k.value);
    // let Nc =
    if(!isNaN(cInput) ){
        let ft=((9/5* cInput) + 32);
        let kt=(cInput) +273.15;

        f.value=ft;
        k.value=kt;
    }
    else if(!isNaN(fInput)){
        c.value=0;
        k.value=0;
        let ct=(fInput - 32) * 5/9;
        let kt=(fInput-32) * (5 /9) + 273.15;

        c.value=ct;
        k.value=kt;
    }

    else {
        o.innerText="erro"
    }

   
    
    
    
})