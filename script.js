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
    artist: "Rema",
    },
    {
    name: "Song2",
    title:"Cant forget You",
    artist: "Arjun",
    },
    {
    name: "Song3",
    title:"Hiyonat",
    artist: "Ummon Guruhi",
    },
    {
    name: "Song4",
    title:"FRIENDS",
    artist: "Marshmello & Anne-Marie",
    },
    {
    name: "Song5",
    title:"Standing By you",
    artist: "Nish",
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

// Progress Bar
music.addEventListener('timeupdate', (event) => {    //timeupade is an inbuild event
    // console.log(event)
    const { currentTime, duration } = event.srcElement;
    // console.log(currentTime);
    // console.log(duration);

    let progress_time = (currentTime / duration) * 100;
    let progress = document.getElementById('progress');

    progress.style.width = `${progress_time}%`

 // music duration update
    let dur = document.getElementById('duration')
    let current_time = document.getElementById('current_time')
    //total time duration is in sec. we have to display it  inn min:sec format
    let min_Duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);
    // console.log(min_Duration)
    // console.log(sec_duration)

    if(duration)        //if avoid NAN
    { dur.textContent = `${min_Duration}:${sec_duration}` }

    //current duration update
    let min_Current = Math.floor(currentTime / 60);
    let sec_Current = Math.floor(currentTime % 60);

    if (sec_Current < 10) {
       sec_Current =`0${sec_Current}`;
   }
    current_time.textContent = `${min_Current}:${sec_Current}`;
});


//start playing song from where clicked on the progress bar
const progress_div = document.getElementById('progress_div');

progress_div.addEventListener('click', (event) => { 
    //console.log(event);
    //let move_progress = (event.offsetX / event.srcElement.clientWidth)//returns % but we want time in min:sec
    //console.log(move_progress);

    //we will use current.Time
    const { duration } = music;
    let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration
    // console.log(move_progress);
    // console.log(duration);

    music.currentTime = move_progress; //use to update or set new value to currennt time so thatthe song will start playing from that particular time.
})


music.addEventListener("ended", nextSong) //1st song ends automatically play next song 

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);