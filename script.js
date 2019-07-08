document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;
document.querySelector('#stop').onclick = stop;
document.querySelector('#up').onclick = up;
document.querySelector('#down').onclick = down;
document.querySelector('#normal').onclick = normal;
document.querySelector('#volume').oninput = volume;
// console.log(volume);

let video;
let display;
let progress;

video = document.querySelector('#video-player');
progress = document.querySelector('#progress');

video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind; // перемотка



function play() {
    video.play();
}

function pause() {
    video.pause();
}

function stop() {
    video.pause();
    video.currentTime = 0;
}

function up() {
    video.play();
    video.playbackRate = 2;
}

function down() {
    video.play();
    video.playbackRate = 0.5;
}

function normal() {
    video.play();
    video.playbackRate = 1;
}

function volume() {
    let vol = this.value;
    video.volume = vol / 100; // звук / 100 %
}

function progressUpdate() {
    console.log(video.duration);
    console.log(video.currentTime);

    let dur = video.duration;
    let cur = video.currentTime;
    progress.value = (100 * cur) / dur;

    document.querySelector('#out').innerHTML = video.currentTime;
}

function videoRewind () {
    let widthProgress = this.offsetWidth;
    let currentPosition = event.offsetX;

    this.value = 100 * currentPosition / widthProgress;
    video.play();
    video.currentTime = video.duration * (currentPosition / widthProgress);


}