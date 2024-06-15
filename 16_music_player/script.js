let audio=document.getElementById("audio");
let audioSource=document.getElementById("audioSource");
let thumbnail=document.getElementById("thumbnail");
let currentTime=document.getElementById("currentTime");
let totalTime=document.getElementById("totalTime");
let Range=document.getElementById("Range");
let songTitle=document.getElementById("title");

let index=0;

audio.onloadedmetadata=function (){
    loadInfo();
}




// playlist 
const songs=[
    {
        title:"first Song",
        path:"../16_music_player/beats/Already Dead(MP3_320K).mp3",
        singer:"Writer 1",
        thumbnailPath:"../16_music_player/trackImg/MainAfter.webp"
    },
    {
        title:"second Song",
        path:"../16_music_player/beats/AUTOMOTIVO DA SEQUÊNCIA INTER-CELESTIAL 3.0 (Slowed + Reverb).mp3",
        singer:"Writer 2",
        thumbnailPath:"../16_music_player/trackImg/Screenshot (184).png"
    },
    {
        title:"third Song",
        path:"../16_music_player/beats/AUTOMOTIVO MAGIA TERRORIFICA -p(SUPER SLOWED) -EDIT -.mp3",
        singer:"Writer 3",
        thumbnailPath:"../16_music_player/trackImg/Screenshot (210).png"
    }
]
let i=songs[0];
console.log(i.title);

function loadInfo(){

    console.log(index);
    let currentIndex = songs[index];


    // loading the song information
    audioSource.src=currentIndex.path;
    thumbnail.src=currentIndex.thumbnailPath;
    songTitle.innerText=currentIndex.title;

    // loading the timing
    updateTime()
    
}


function updateTime(){
    audio.onloadedmetadata=function (){
        loadInfo();
    }
    //updating the time
    let time=audio.duration;
    let totMinutes = Math.floor(time / 60);
    let totSeconds = Math.floor(time % 60);

    setInterval(()=> {

        totalTime.textContent = `${totMinutes}:${totSeconds < 10 ? '0' : ''}${totSeconds}`;
        let currTime =audio.currentTime
        const currentMinutes = Math.floor(currTime / 60);
        const currentSeconds = Math.floor(currTime % 60);

        currentTime.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
        
        Range.value = ((currTime/time)*100);
        // updatingSlider();
    },1)


    let currT=audio.currentTime;
    let toT=audio.duration;



}



function playPause(){
    if(audio.paused || audio.ended){
        audio.play();
        document.getElementById("play").style.display="none";
        document.getElementById("pause").style.display="block";

        updateTime();
        RImg();
        // thumbnail.classList.add('ro');//image rotate start
    }
    else{
        audio.pause();
        document.getElementById("pause").style.display="none";
        document.getElementById("play").style.display="block";
        RImg();
        // thumbnail.classList.remove('ro');//imgage rotate stop
    }
    
}





function RImg(){
    setTimeout(function(){
        if(audio.paused ){
            thumbnail.classList.remove('ro');//imgage rotate stop
        }else{
            thumbnail.classList.add('ro');
        }
        
    
    },600)
}


// next button
function next(){
    RImg();
    document.getElementById("play").style.display="none";
    document.getElementById("pause").style.display="block";
    if(index < songs.length){
        index++;
        loadInfo();
        audio.load();
        audio.play();
        
    }
    else{
        index=0
        loadInfo();
        audio.load();
        audio.play();
    }
    
}


// previous button
function previous(){
    document.getElementById("play").style.display="none";
    document.getElementById("pause").style.display="block";
    RImg();
    if(index < songs.length){
        index++;
        loadInfo();
        audio.load();
        audio.play();
    }
    else{
        index=0
        loadInfo();
        audio.load();
        audio.play();
    }
    
}