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

let index = 0;
let updateInterval;

// Playlist
const songs = [
    {
        title: "Aankhon Mein Teri Ajab Si",
        path: "../16_music_player/beats/Aankhon Mein Teri Ajab Si (Lyrical) Om Shanti Om _ K.K. _ Shahrukh Khan _ Deepika Padukone (128 kbps).mp3",
        singer: "Krishnakumar Kunnath",
        thumbnailPath: "../16_music_player/trackImg/ankho me teri.gif"
    },
    {
        title: "Sajni",
        path: "../16_music_player/beats/Sajni .MP3",
        singer: "Arijit Singh",
        thumbnailPath: "../16_music_player/trackImg/sajni.jpg"
    }
];

audio.onloadedmetadata = function () {
    updateTime();
};

function loadInfo(index) {
    let currentIndex = songs[index];

    // Loading the song information
    audioSource.src = currentIndex.path;
    thumbnail.src = currentIndex.thumbnailPath;
    thumbnailBack.src = currentIndex.thumbnailPath;
    songTitle.innerText = currentIndex.title;
    author.innerText = currentIndex.singer;

    audio.load();
    audio.onloadedmetadata = updateTime;
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
        }
    }, 500);
}

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
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
    audio.play();
}

function previous() {
    if (index > 0) {
        index--;
    } else {
        index = songs.length - 1;
    }
    loadInfo(index);
    audio.play();
}

// Initial load
loadInfo(index);

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
