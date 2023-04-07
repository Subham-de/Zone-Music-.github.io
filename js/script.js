const play = document.getElementById("play");
const img = document.querySelector("img");
const music = document.querySelector("audio");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById('progress');
const currenttimer = document.getElementById('current_timer');
const durationtimer = document.getElementById('duration_timer');
const progress_div=  document.getElementById('progress_div');
const slider_container = document.getElementById("slider_container");
const vol = document.getElementById('volume');
const volshow = document.getElementById("volshow")
let addplaying = false;


const playmusic = () => {
  addplaying = true;
  music.play();
  img.classList.add("anime");
  play.classList.replace("fa-play", "fa-pause")
}

const pausemusic = () => {
  addplaying = false;
  music.pause();
  img.classList.remove("anime");
  play.classList.replace("fa-pause", "fa-play")
}

play.addEventListener("click",
  () => {
    if (addplaying) {
      pausemusic()
    }
    else {
      playmusic()
    }
  }
)

const songs = [
  {
    music: "Ed_Sheeran_-_Perfect_(ColdMP3.com) (1)",
    title: "Perfect",
    artist: "Ed_Sheeran",
    img: "poster-1",
  },
  {
    music: "Maroon_5_-_Memories",
    title: "Memories",
    artist: "Maroon_5",
    img: "poster-2",
  },
  {
    music: "Night-Changes(PagalWorld)",
    title: "Night_XChanges",
    artist: " One Direction",
    img: "poster-3",
  },
  {
    music: "Stupid-Face(PaglaSongs) (1)",
    title: "Stupid Face",
    artist: "Abe Parker",
    img: "poster-4",
  },
  {
    music: "The_Chainsmokers_ft_Halsey_-_Closer",
    title: "Closer",
    artist: "The_Chainsmokers",
    img: "poster-5",
  },
  {
    music: "Unstoppable(PagalWorld)",
    title: "Unstoppable",
    artist: "	Sia",
    img: "poster-2",
  }
]

console.log(songs)

//adding of songs

const loadsongs = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  img.src = `images/${songs.img}.jpg`;
  music.src = `music/${songs.music}.mp3`
}


songindex = 0;
const nextsong = () => {
  songindex = (songindex + 1) % songs.length;
  loadsongs(songs[songindex])
  playmusic();
}

const prevsong = () => {
  songindex = (songindex - 1) % songs.length;
  loadsongs(songs[songindex]);
  playmusic();
}


// loadsongs(songs[3])


//Volume set 

// function setVolume(){
//   volshow.innerText=vol.value;
//   music.volume=vol.value/ 100;
// }

//progress work

music.addEventListener('timeupdate', (event) => {
  const { currentTime, duration } = event.srcElement;
  let progress_time = (currentTime / duration) * 100
  progress.style.width = `${progress_time}%`
  // console.log(progress_time)


  //Total Time Duartion
  let Current_min = Math.floor(duration / 60);
  let current_sec = Math.floor(duration % 60);
  // console.log(total_time)
  if (current_sec < 10) {
    current_sec = `0${current_sec}`
  }
  const total_time = `${Current_min}:${current_sec}`
  if (duration) {
    durationtimer.textContent = total_time;
  }
  //Current Time duration


  let CurrentTime_min = Math.floor(currentTime / 60);
  let currentTime_sec = Math.floor(currentTime % 60);

  if (currentTime_sec < 10) {
    currentTime_sec = `0${currentTime_sec}`
  }
  const totalChangetime = `${CurrentTime_min}:${currentTime_sec}`

  currenttimer.textContent = `${totalChangetime}`
})

//onclick music progress work functionality

progress_div.addEventListener("click",(event)=>{
   

    // const progressclick = ()
    const {duration } = music;
    let progress_move= (event.offsetX/event.srcElement.clientWidth)*duration;
    music.currentTime=progress_move;
    playmusic()
    console.log(progress_move)
})


next.addEventListener("click", nextsong)
prev.addEventListener("click", prevsong)
