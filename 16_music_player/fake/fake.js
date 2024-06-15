const Tracks={
    0:{
        link:"../beats/AUTOMOTIVO MAGIA TERRORIFICA -p(SUPER SLOWED) -EDIT -.mp3",
        name:"author 1",
        img:"../trackImg/MainAfter.webp"
    },

    1:{
        link:"../beats/AUTOMOTIVO DA SEQUÊNCIA INTER-CELESTIAL 3.0 (Slowed + Reverb).mp3",
        name:"author 2",
        img:"../trackImg/MainAfter.webp",
    },
    2:{
        link:"../beats/Already Dead(MP3_320K).mp3",
        name:"author 3",
        img:"../trackImg/MainAfter.webp",
    }

}

// variable for the current time element
let curTime=document.getElementById("disCuTi");
let toTime=document.getElementById("disToTi");


// slider selector
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");

let audio = document.getElementById("audio");

let audioSource=document.getElementById("audioSource");
// play pause the music


let number=2;
function next(){
    number=number+1;
    let sr=Tracks[(number+1)%3];

    audioSource.src=sr.link;

    audio.load();
    audio.play();
    update();
    RImg();
}

function previous(){
    number=number-1;
    let sr=Tracks[(number)%3];
    audioSource.src=sr.link;

    audio.load();
    audio.play();
    update();
    RImg();
}


function playPause(){
      
    if(audio.paused || audio.ended){
        audio.play();
        document.getElementById("play").style.display="none";
        document.getElementById("pause").style.display="block";

        update();
        RImg();
    }
    else{
        audio.pause();
        document.getElementById("pause").style.display="none";
        document.getElementById("play").style.display="block";
        RImg();
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










// audio timing 
function update(){

    //updating the time 
    let time=audio.duration;
    let totMinutes = Math.floor(time / 60);
    let totSeconds = Math.floor(time % 60);

    toTime.textContent = `${totMinutes}:${totSeconds < 10 ? '0' : ''}${totSeconds}`;

    setInterval(()=> {
        let currTime =audio.currentTime
        const currentMinutes = Math.floor(currTime / 60);
        const currentSeconds = Math.floor(currTime % 60);

        curTime.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
        // updatingSlider();
        slider.value = ((currTime/time)*100);
         
    },200)


    
}



// output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;

// }

// console.log(slider.value);


// updating the value of the range slider

// function updatingSlider(){
    
// }


// 