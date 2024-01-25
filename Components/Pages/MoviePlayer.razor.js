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



