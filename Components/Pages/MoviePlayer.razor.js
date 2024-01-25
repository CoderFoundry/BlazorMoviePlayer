export function playMovie(fileName) {
    
    let vplayer = document.getElementById("videoPlayer");
    vplayer.src = `/Videos/${fileName}`;   
    vplayer.load();       
    vplayer.play();
    
    
}

export function loadMovie(fileName) {
    let vplayer = document.getElementById("videoPlayer");
    vplayer.src = `/Videos/${fileName}`;
    vplayer.load();
}


export function fade(opts) {
    let timer = void 0;
    let vplayer = document.getElementById("videoPlayer");
    if (typeof timer !== 'undefined') clearInterval(timer);
    var opacity = opts === 'in' ? 0 : 1;
    opacityTimer = setInterval(function () {
        if ((opts === 'in' && opacity >= 1) || (opts === 'out' && opacity <= 0)) {
            clearInterval(timer);
        }
        opacity = opts === 'in' ? opacity + (opacity * 0.1 || 0.1) : opacity - (opacity * 0.1 || 0.1);
        vplayer.style.opacity = opacity;
        vplayer.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
    }, 25);
}
