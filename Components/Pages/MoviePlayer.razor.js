export function playMovie(fileName, videoElement) {   
    videoElement.src = `/Videos/${fileName}`;     
    videoElement.volume = .3;
    videoElement.play();
}

export function loadMovie(fileName, videoElement) {    
    videoElement.src = `/Videos/${fileName}`;    
    videoElement.volume = .3;
    videoElement.load();
}



