let audio = document.getElementById("audio");

let audioSource = document.getElementById("audioSource");

let thumbnail = document.getElementById("thumbnail");

let thumbnailBack = document.getElementById("thumbnailBack");

let currentTime = document.getElementById("currentTime");

let totalTime = document.getElementById("totalTime");

let range = document.getElementById("Range");

let songTitle = document.getElementById("title");

let author = document.getElementById("author");

let playPauseBtn = document.getElementById("playPauseBtn");

// creating the element in the list 

let fullList = document.getElementById("fullList");

// let specialVideo = document.getElementById("specialVideo");

let newList = document.getElementById("newList");//list of the song name

let index = 0;


let num = 1;//for the LoadList

let updateInterval;

// Playlist
const songs = [
    {
        title: "Aankhon Mein Teri Ajab Si",
        path: "../16_music_player/beats/Aankhon Mein Teri Ajab Si (Lyrical) Om Shanti Om _ K.K. _ Shahrukh Khan _ Deepika Padukone (128 kbps).mp3",
        singer: "Krishnakumar Kunnath",
        thumbnailPath: "../16_music_player/trackImg/ankho me teri.gif",
        special:"0"
    },
    {
        title: "Sajni",
        path: "../16_music_player/beats/Sajni .MP3",
        singer: "Arijit Singh",
        thumbnailPath: "../16_music_player/trackImg/sajni.jpg",
        special:"0"
    },
    {
        title: "295",
        path: "../16_music_player/beats/295 (Official Audio) _ Sidhu Moose Wala _ The Kidd _ Moosetape (256 kbps).mp3",
        singer: "Sidhu Moose Wala",
        thumbnailPath: "../16_music_player/trackImg/295.jpg",
        special:"0"
    },
    {
        title: "One Call",
        path: "../16_music_player/beats/Rich Amiri - One Call (Official Audio) (320 kbps).mp3",
        singer: "Rich Amiri",
        thumbnailPath: "../16_music_player/trackImg/one calll.jpeg",
        special:"0"
    }
    // ,
    // {
    //     title: "One Call",
    //     path: "../16_music_player/beats/Rich Amiri - One Call (Official Audio) (320 kbps).mp3",
    //     singer: "Rich Amiri",
    //     thumbnailPath: "../16_music_player/trackImg/one calll.jpeg",
    //     special:"1"
    // }
];

audio.onloadedmetadata = function () {
    updateTime();
};


function songHighlight(index) {
    // Remove the highlight class from all divs with the class 'newList'
    let allNewListDivs = document.querySelectorAll('.newList');
    allNewListDivs.forEach(div => {
        div.classList.remove('highlight');
    });

    // Add the highlight class to the currently playing song
    let currentDiv = document.getElementById('' + ( index+1));
    if (currentDiv) {
        currentDiv.classList.add('highlight');
    }
}

function loadInfo(index) {

    let currentIndex = songs[index];

    // Loading the song information
    audioSource.src = currentIndex.path;
    thumbnail.src = currentIndex.thumbnailPath;
    thumbnailBack.src = currentIndex.thumbnailPath;
    songTitle.innerText = currentIndex.title;
    author.innerText = currentIndex.singer;

    

    // if(currentIndex.special==1){
    //     specialVideo.style.display="block";
    //     thumbnailBack.style.display="none";
    // }
    // else{
    //     specialVideo.style.display="none"
    //     thumbnailBack.style.display="block"
    // }

    audio.load();
    audio.onloadedmetadata = updateTime;

    songHighlight(index);

}

function updateTime() {
    clearInterval(updateInterval);

    // Updating the total time
    let time = audio.duration;
    let totMinutes = Math.floor(time / 60);
    let totSeconds = Math.floor(time % 60);
    totalTime.textContent = `${totMinutes}:${totSeconds < 10 ? '0' : ''}${totSeconds}`;

    updateInterval = setInterval(() => {
        let currTime = audio.currentTime;
        const currentMinutes = Math.floor(currTime / 60);
        const currentSeconds = Math.floor(currTime % 60);

        currentTime.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;

        range.value = (currTime / time) * 100;

        if (currTime >= time) {
            next();
            LoadList(index);
        }
    }, 500);
    
}

function playPause() {
    if (audio.paused) {
        audio.play();
        // specialVideo.play();
    } else {
        audio.pause();
        // specialVideo.pause();
    }
    togglePlayPauseIcon();

    
}

function togglePlayPauseIcon() {
    if (audio.paused) {
        playPauseBtn.classList.remove("fa-pause");
        playPauseBtn.classList.add("fa-play");
    } else {
        playPauseBtn.classList.remove("fa-play");
        playPauseBtn.classList.add("fa-pause");
    }
}

function RImg() {
    if (audio.paused) {
        thumbnail.classList.remove('ro');
    } else {
        thumbnail.classList.add('ro');
    }
}

function next() {
    if (index < songs.length - 1) {
        index++;
    } else {
        index = 0;
    }


    loadInfo(index);
    songHighlight(index);
    setTimeout(()=>{
        audio.play();
       
    },1500)
    
    
}

function previous() {
    if (index > 0) {
        index--;
    } else {
        index = songs.length - 1;
    }
    loadInfo(index);
    songHighlight(index);
    audio.play();
}

// Initial load
loadInfo(index);
LoadList(index);
// songHighlight(index);

audio.onplay = function () {
    RImg();
    togglePlayPauseIcon();
};

audio.onpause = function () {
    RImg();
    togglePlayPauseIcon();
};

// Volume control
let volumeSlider = document.getElementById("volumeSlider");

audio.volume = volumeSlider.value / 100;
volumeSlider.oninput = function () {
    audio.volume = volumeSlider.value / 100;
};

range.oninput = function () {
    audio.currentTime = (range.value / 100) * audio.duration;
    updateTime();
};



// playlist js

let icon = document.getElementById("icon");
let list = document.getElementById("list");
let sub2 = document.getElementById("sub2");
// let counterOfList = 1;
function Playlist(){
    if(list.classList=="hideList"){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        list.classList.remove("hideList");

        // adding to make the background blur
        sub2.classList.add("Sub2blur");

    }else{
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        list.classList.add("hideList");

        // removing the blur background blur
        sub2.classList.remove("Sub2blur");
    }
}



// creating the element in the list

function LoadList(index) {
    fullList.innerHTML = ''; // Clear existing list
    let num = 1;
    songs.forEach((element, idx) => {
        let newListDiv = document.createElement("div");
        let songName = element.title;
        newListDiv.innerHTML = `
        <p>${num}</p>
        <h1>${songName}</h1>`;
        fullList.appendChild(newListDiv);
        newListDiv.setAttribute('id', num); 
        newListDiv.setAttribute('class', 'newList'); 

        if (idx === index) {
            newListDiv.classList.add('highlight'); // Add highlight class to currently playing song
        }

        newListDiv.addEventListener('click', () => {
            playSong(idx); // Adjusting index to match zero-based array indexing
        });

        num++;
    });
}



function playSong(idx) {
    loadInfo(idx);
    audio.play();
    songHighlight(idx); // Add this line


    Playlist();
}






