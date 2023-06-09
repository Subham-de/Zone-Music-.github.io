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
    music: "Yentamma(PagalWorld)",
    title: "Yentamma",
    artist: "Vishal Dadlani",
    img: "xb59o_op8z0",
  },
  {
    music: "Besharam Rang Pathaan 128 Kbps",
    title: "Besharam Rang",
    artist: "Vishal & Sheykhar",
    img: "beshram",
  },
  {
    music: "Deva Deva Brahmastra 128 Kbps",
    title: "Deva Deva",
    artist: " Arjit Singh",
    img: "ranbir-kapoor-deva-deva-from-brahmastra-makes-one-feel-spiritually-powerful-with-rare-ease-001",
  },
  {
    music: "bollywood_Vivah 2006 - Mujhe Haq Hai",
    title: "Vivah",
    artist: "Udit Narayan",
    img: "crop_480x480_115994",
  },
  {
    music: "O Bedardeya Tu Jhoothi Main Makkaar 128 Kbps",
    title: "O Bedardeya",
    artist: "Arjit Singh",
    img: "maxresdefault",
  },
  {
    music: "Tum Hi Ho Aashiqui 2 128 Kbps",
    title: "Tum Hi Ho",
    artist: "	Arjit Singh",
    img: "tumhiho",
  },
  {
    music: "Main Khiladi - Selfiee-(DJMaza)",
    title: "Main Khiladi",
    artist: "Anu Malik",
    img: "selfiee",
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

  //end new song
  music.addEventListener('ended',nextsong)
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
