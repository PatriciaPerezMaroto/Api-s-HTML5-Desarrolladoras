const videoPlayer = document.getElementById('videoPlayer');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const subirvolumen = document.getElementById('subirvolumen');
const bajarvolumen = document.getElementById('bajarvolumen');
const cargando = document.getElementById('cargando');

play.addEventListener('click', () =>{
    videoPlayer.play();
});
pause.addEventListener('click', () =>{
    videoPlayer.pause();
});
subirvolumen.addEventListener('click', () =>{
    videoPlayer.volume +=0.2();
});
bajarvolumen.addEventListener('click', () =>{
    videoPlayer.volume -=0.2();
});

videoPlayer.addEventListener('cargando', () =>{
    cargando.style.display='none';
});
videoPlayer.addEventListener('error', () =>{
    alert('No se puede reproducir');
});

function handleFileSelect(file){
    if(!file.type.match('video/mp4')) {
        alert('El formato no es compatible')
        return;
    }
    const fileUrl = URL.createObjectURL(file);
    videoPlayer.src = fileUrl;
    cargando.style.display = 'block';

    videoPlayer.addEventListener('canplaythrough', () => {
        cargando.style.display ='none';
        videoPlayer.play();}, {once:true});
}