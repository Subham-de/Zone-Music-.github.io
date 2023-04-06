const play = document.getElementById("play");
const img = document.querySelector("img");
const music = document.querySelector("audio");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

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
    img:"poster-1",
  },
  {
    music: "Maroon_5_-_Memories",
    title: "Memories",
    artist: "Maroon_5",
    img:"poster-2",
  },
  {
    music: "Night-Changes(PagalWorld)",
    title: "Night_XChanges",
    artist: "British-Irish boy band One Direction",
    img:"poster-3",
  },
  {
    music: "Stupid-Face(PaglaSongs) (1)",
    title: "Stupid Face",
    artist: "Abe Parker",
    img:"poster-4",
  },
  {
    music: "The_Chainsmokers_ft_Halsey_-_Closer",
    title: "Closer",
    artist: "The_Chainsmokers",
    img:"poster-5",
  },
  {
    music: "Unstoppable(PagalWorld)",
    title: "Unstoppable",
    artist: "	Sia",
    img:"poster-2",
  }
]  

console.log(songs)

//adding of songs

  const loadsongs =(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    img.src=`images/${songs.img}.jpg`;
    music.src = `music/${songs.music}.mp3`
  }


  songindex =0;
  const nextsong=()=>{
    songindex=(songindex+1)%songs.length;
    loadsongs(songs[songindex])
    playmusic();
  }

  const prevsong=()=>{
    songindex=(songindex-1)%songs.length;
    loadsongs(songs[songindex]);
    playmusic();
  }


  // loadsongs(songs[3])


next.addEventListener("click",nextsong)
prev.addEventListener("click",prevsong)