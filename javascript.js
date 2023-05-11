const video = document.querySelector(".videoA");
const playButton = document.querySelector(".playButton");
const pauseButton = document.querySelector(".pauseButton");
const tiempoActual = document.querySelector("#timer");


video.addEventListener("click", playPauseVideo);
playButton.addEventListener("click", playPauseVideo);
pauseButton.addEventListener("click", playPauseVideo2);
video.addEventListener("timeupdate", actualizacionTiempo);


//Eventos 
function playPauseVideo() {
    video.play()
}
function playPauseVideo2(params) {
    video.pause()
}

function actualizacionTiempo() {
    let minutes = Math.floor(video.currentTime / 60)    
    let seconds = Math.floor(video.currentTime % 60)
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    tiempoActual.textContent = `${minutes}:${seconds}`
}


