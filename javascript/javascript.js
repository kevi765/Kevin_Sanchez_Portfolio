var el_meu_video = document.getElementById("video");

var boto_video2d = document.getElementById("animation2d");
var boto_video3d = document.getElementById("animation3d");

var boto_play = document.getElementById("play");
var boto_pause = document.getElementById("pause");
var boto_stop = document.getElementById("stop");

var segons = 0;
var minuts = 0;

var boto_volumup = document.getElementById("volumup");
var boto_volumdown = document.getElementById("volumdown");

var video_actual = '';
var poster_actual = '';
var temps_sencer= '';

boto_video2d.onclick = function(){
    video_actual = '/media/videos/videoreel2d.mp4';
    poster_actual = '/imatges/poster_animation_2d.png';
    temps_sencer='/24:50';
    reinici_valors();
}
boto_video3d.onclick = function(){
    video_actual='/media/videos/videoreel3d.mp4';
    poster_actual='/imatges/poster_animation_3d.png';
    temps_sencer='/26:00';
    reinici_valors();
}


boto_play.onclick = function(){
    el_meu_video.play();
    control = setInterval(temporitzador,10);
}
    
boto_pause.onclick = function(){
    el_meu_video.pause();
    clearInterval(control);
}

boto_stop.onclick = function(){
    /*var el_meu_video.pause();
    el_meu_video.currentTime=0;
    el_meu_video.src='';*/
    segons=0;
    minuts=0;
    reinici_valors();
}

boto_volumup.onclick = function(){
    el_meu_video.volume = el_meu_video.volume+0.1;
}

boto_volumdown.onclick = function(){
    el_meu_video.volume = el_meu_video.volume-0.1;
}

function temporitzador (){
    if (segons < 100) {
		segons++;
		if (segons < 10) { segons = "0"+segons }
		Segons.innerHTML = ":"+segons;
	}
	if (segons == 60) {
		segons = -1;
	}
	if (segons == 0) {
		minuts ++;
		if (minuts < 10) { minuts = "0"+minuts }
		Minuts.innerHTML = minuts;
	}
}


function reinici_valors(){
    el_meu_video.src = video_actual;
    el_meu_video.poster = poster_actual;
    clearInterval(control);
    segons=0;
    minuts=0;
    segons.innerHTML = ":00";
	minuts.innerHTML = "00";
}