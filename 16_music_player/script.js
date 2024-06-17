let audio=document.getElementById("audio");
let audioSource=document.getElementById("audioSource");
let thumbnail=document.getElementById("thumbnail");
let thumbnailBack=document.getElementById("thumbnailBack");
let currentTime=document.getElementById("currentTime");
let totalTime=document.getElementById("totalTime");
let Range=document.getElementById("Range");
let songTitle=document.getElementById("title");
let author=document.getElementById("author");

let index=0;
let updateInterval;

audio.onloadedmetadata=function (){
    updateTime();
    
}




// playlist 
const songs=[
    {
        title:"Aankhon Mein Teri Ajab Si",
        path:"../16_music_player/beats/Aankhon Mein Teri Ajab Si (Lyrical) Om Shanti Om _ K.K. _ Shahrukh Khan _ Deepika Padukone (128 kbps).mp3",
        singer:"Krishnakumar Kunnath",
        thumbnailPath:"../16_music_player/trackImg/ankho me teri.gif"
    },
    {
        title:"Sajni",
        path:"../16_music_player/beats/Sajni .MP3",
        singer:"Arijit Singh",
        thumbnailPath:"../16_music_player/trackImg/sajni.jpg"
    },
    // {
    //     title:"third Song",
    //     path:"../16_music_player/beats/0616.MP3",
    //     singer:"Writer 3",
    //     thumbnailPath:"../16_music_player/trackImg/sajni.jpg"
    // },
    // {
    //     title:"third Song",
    //     path:"../",
    //     singer:"Writer 3",
    //     thumbnailPath:"../16_music_player/trackImg/sajni.jpg"
    // }
]


function loadInfo(){

    audio.volume=0.3;
    let currentIndex = songs[index];


    // loading the song information
    audioSource.src=currentIndex.path;
    thumbnail.src=currentIndex.thumbnailPath;
    thumbnailBack.src=currentIndex.thumbnailPath;
    songTitle.innerText=currentIndex.title;
    author.innerText=currentIndex.singer

    audio.load();
    audio.onloadedmetadata = updateTime;
    
}


function updateTime(){
    clearInterval(updateInterval);
    
    //updating the time
    let time=audio.duration;
    let totMinutes = Math.floor(time / 60);
    let totSeconds = Math.floor(time % 60);
    totalTime.textContent = `${totMinutes}:${totSeconds < 10 ? '0' : ''}${totSeconds}`;

    

    updateInterval =setInterval(()=> {

        
        let currTime =audio.currentTime;
        const currentMinutes = Math.floor(currTime / 60);
        const currentSeconds = Math.floor(currTime % 60);

        currentTime.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
        
        Range.value = ((currTime/time)*100);
        // updatingSlider();

        // this might mr load the next song
        if(time==currTime){
            next()
        }
    },1000);

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
        
    
    },200)
}


// next button
function next(){
    RImg();
    document.getElementById("play").style.display="none";
    document.getElementById("pause").style.display="block";
    if(index < songs.length-1){
        index++;
    }
    else{
        index=0
    }

    loadInfo();
    audio.play();
    
}


// previous button
function previous(){
    document.getElementById("play").style.display="none";
    document.getElementById("pause").style.display="block";
    RImg();
    if(index >0){
        index--;
    }
    else{
        index=songs.length;
    }
    
    loadInfo();
    audio.play();
    
}


// Initial load
loadInfo();






// volume control
let volConl = document.getElementById("volumeSlider");
let sliderVol =document.getElementsByClassName("sliderVol")

volConl.addEventListener('change' , function (){
    let val=volConl.value;
    audio.volume=val*0.01;
    let maxval=volConl.max;

    volConl.value=val;
    let percentage = (val / maxval) * 100;
    let remainPercent = 100-percentage;

    sliderVol.style.background = 'linear-gradient(to right, #4c00ff '+ percentage  +'%, #ccc ' + remainPercent + '%)';
})




Range.addEventListener('change',function(){
    let time =Range.value;

    audio.play;
    

})