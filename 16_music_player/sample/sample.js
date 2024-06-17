let audio = document.getElementById("audio");
let audioSource=document.getElementById("audioSource");
let thumbnail=document.getElementById("thumbnail");
let thumbnailBack=document.getElementById("thumbnailBack");
let currentTime=document.getElementById("currentTime");
let totalTime=document.getElementById("totalTime");
let Range=document.getElementById("Range");
let songTitle=document.getElementById("title");
let author=document.getElementById("author");


let playPauseBtn = document.getElementById("playPauseBtn");


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


function loadInfo(index){

    // audio.volume=20;
    // changeVolume();
    let currentIndex = songs[index];


    // loading the song information
    audioSource.src=currentIndex.path;
    thumbnail.src=currentIndex.thumbnailPath;
    thumbnailBack.src=currentIndex.thumbnailPath;
    songTitle.innerText=currentIndex.title;
    author.innerText=currentIndex.singer;

    audio.load();
    audio.onloadedmetadata = updateTime();
    
}


function updateTime(){
    clearInterval(updateInterval);
    
    //updating the time
    let time=audio.duration;
    let totMinutes = Math.floor(time / 60);
    let totSeconds = Math.floor(time % 60);
    totalTime.textContent = `${totMinutes}:${totSeconds < 10 ? '0' : ''}${totSeconds}`;

    

    function updateInterval () {

        
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
    };

}



function playPause(){
    if(playPauseBtn.classList.contains("fa-pause")){
        audio.pause();
        RImg();
        playPauseBtn.classList.remove("fa-pause");
        playPauseBtn.classList.add("fa-play");  
        
    }
    else{
        audio.play();
        RImg();
        playPauseBtn.classList.add("fa-pause");
        playPauseBtn.classList.remove("fa-play");
    }

    // if(audio.paused || audio.ended ){
    //     audio.play();


    //     // document.getElementById("play").style.display="none";
    //     // document.getElementById("pause").style.display="block";

    //     updateTime();
    //     RImg();
    //     // thumbnail.classList.add('ro');//image rotate start
    // }
    // else{
    //     audio.pause();
    //     document.getElementById("pause").style.display="none";
    //     document.getElementById("play").style.display="block";
    //     RImg();
    //     // thumbnail.classList.remove('ro');//imgage rotate stop
    // }
    
}



if(audio.play()){
    setInterval(() => {
        Range.value=audio.currentTime;
        updateTime();
    },500)
}




function RImg(){
    if(audio.paused ){
        thumbnail.classList.remove('ro');//image rotate stop
    }else{
        thumbnail.classList.add('ro');
    }
        
    
    
}


// next button
function next(){
    RImg();
    playPause();
    if(index < songs.length-1){
        index++;
    }
    else{
        index=0
    }

    loadInfo(index);
    audio.play();
    
}


// previous button
function previous(){
    playPause();
    RImg();
    if(index >0){
        index--;
    }
    else{
        index=songs.length;
    }
    
    loadInfo(index);
    audio.play();
    
}


// Initial load
loadInfo(index);

audio.onplay=function (){
    RImg();
    playPauseBtn.classList.add("fa-pause");
    playPauseBtn.classList.remove("fa-play");
}






// volume control
let volumeSlider= document.getElementById("volumeSlider");
// let sliderVol =document.getElementsByClassName("sliderVol");

audio.volume = volumeSlider.value/100;
volumeSlider.oninput = function (){
    audio.volume = volumeSlider.value/100;
}


// volumeSlider.addEventListener('change' , function (){
//     let val=volumeSlider.value;
//     audio.volume=val*0.01;
//     let maxval=volumeSlider.max;

//     volumeSlider.value=val;
//     let percentage = (val / maxval) * 100;
//     let remainPercent = 100-percentage;

//     sliderVol.style.background = 'linear-gradient(to right, #4c00ff '+ percentage  +'%, #ccc ' + remainPercent + '%)';
// })




Range.onchange=function(){
    audio.play();
    audio.currentTime=Range.value;
    updateTime();

}