console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementsByClassName('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Best Song Ever", filePath: "1.mp3", coverPath: "https://i.ytimg.com/vi/afq4x8aTEfc/maxresdefault.jpg" },
    { songName: 'Steal My Girl', filePath: "2.mp3", coverPath: "https://i.pinimg.com/564x/dd/0f/90/dd0f90fd3163ba24b68ff5d5948b5f3d.jpg" },
    { songName: "You & I", filePath: "3.mp3", coverPath: "https://i.ytimg.com/vi/Y1xs_xPb46M/maxresdefault.jpg" },
    { songName: "What Makes You Beautiful", filePath: "4.mp3", coverPath: "https://i.ytimg.com/vi/QJO3ROT-A4E/maxresdefault.jpg" },
    { songName: "Live While We're Young", filePath: "5.mp3", coverPath: "https://i.ytimg.com/vi/qKVWYJFct5U/maxresdefault.jpg" },
    { songName: "Story of My Life", filePath: "6.mp3", coverPath: "https://i.ytimg.com/vi/PJYpZ4hkXJE/maxresdefault.jpg" },
    { songName: "Drag Me Down", filePath: "7.mp3", coverPath: "https://i.ytimg.com/vi/QOZn9iqaZb8/maxresdefault.jpg" },
    { songName: "Night Changes", filePath: "8.mp3", coverPath: "https://i.scdn.co/image/ab67616d0000b273d304ba2d71de306812eebaf4" },

]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})



masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = () => {
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = (songs[songIndex].filePath);
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex > 7) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = (songs[songIndex].filePath);
    masterSongName.innerText = `${songs[songIndex]}.songName`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = (songs[songIndex].filePath);
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})