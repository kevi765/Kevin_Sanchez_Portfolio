var el_meu_video = document.getElementById("video");

var boto_video2d = document.getElementById("animation2d");
var boto_video3d = document.getElementById("animation3d");

var video_actual = '';
var poster_actual = '';


boto_video2d.onclick = function(){
    video_actual = '../media/videos/videoreel2d.mp4';
    poster_actual = '../imatges/poster_animation_2d.png';
    reinici_valors();
}
boto_video3d.onclick = function(){
    video_actual='../media/videos/videoreel3d.mp4';
    poster_actual='../imatges/poster_animation_3d.png';
    reinici_valors();
}
function reinici_valors(){
    el_meu_video.src = video_actual;
    el_meu_video.poster = poster_actual;
}