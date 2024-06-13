

let audio = document.getElementById("audio");
// play pause the music

function playPause(){
    RImg()  
    if(audio.paused || audio.ended){
        audio.play()
        document.getElementById("play").style.display="none";
        document.getElementById("pause").style.display="block";

    }
    else{
        audio.pause();
        document.getElementById("pause").style.display="none";
        document.getElementById("play").style.display="block";
    }
    
}



// rotating image
let rotImg =document.getElementById("rotImg");

function RImg(){
    if(rotImg.classList=="ro"){
        rotImg.classList.remove('ro');
    }else{
        rotImg.classList.add('ro');
    }
    
}