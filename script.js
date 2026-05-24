const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");

const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");

const waves = document.querySelector(".waves");

let playing = false;

playBtn.addEventListener("click", ()=>{

    if(!playing){

        audio.play();

        playBtn.innerHTML = "⏸";

        waves.classList.add("active");

        playing = true;

    }else{

        audio.pause();

        playBtn.innerHTML = "▶";

        waves.classList.remove("active");

        playing = false;
    }

});

audio.addEventListener("timeupdate", ()=>{

    const percent =
    (audio.currentTime / audio.duration) * 100;

    progress.style.width = percent + "%";

});

audio.addEventListener("ended", ()=>{

    playBtn.innerHTML = "▶";

    waves.classList.remove("active");

    playing = false;

});

/* CLICK EN LA BARRA */

progressContainer.addEventListener("click", (e)=>{

    const width = progressContainer.clientWidth;

    const clickX = e.offsetX;

    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;

});