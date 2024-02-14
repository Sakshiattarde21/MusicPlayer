const play = document.getElementById("play");
const music = document.querySelector("audio");
const img=document.querySelector("img");

let isPlaying = false;

// for Play
const playMusic= () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause")
    img.classList.add("anime")
};

// for Pause
const pauseMusic= () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause","fa-play")
    img.classList.remove("anime")
};

play.addEventListener('click', () => {
    // if (isPlaying) { pauseMusic(); }
    // else { playMusic(); }

    isPlaying?pauseMusic():playMusic();     //if true-pause else play
});

//Changing the Music Data
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
    name: "Song1",
    title:"Baby Calm Down",
    artist: "XYZ",
    },
    {
    name: "Song2",
    title:"Cant forget You",
    artist: "Arjun",
    },
    {
    name: "Song3",
    title:"Hiyonat",
    artist: "abc",
    },
    {
    name: "Song4",
    title:"FRIENDS",
    artist: "Marshmello & Anne-Marie",
    },
    {
    name: "Song5",
    title:"Standing By you(Duniya)",
    artist: "Bangla",
    }
]

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    // music.src = `music/${songs.name}.mp3`;  
    music.src = "Songs/" + songs.name + ".mp3";
    img.src = "Media/" + songs.name + ".jpg";
};
songIndex = 0;
//loadSong(songs[1]);

const nextSong = () => {
    //songIndex++;      //once the songIndex==len it will stop. 
    songIndex=(songIndex +1)%songs.length;      //work in loop
    loadSong(songs[songIndex]);
    playMusic();
}
const prevSong = () => {
    //songIndex++;      //once the songIndex==len it will stop. 
    songIndex=(songIndex -1+songs.length)%songs.length;      //work in loop
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);