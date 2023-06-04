//Comprobar que el navegador sopo   rta la función
if (window.File && window.FileReader && window.FileList) {

//Obtener elementos del DOM
    const vidContainer = document.getElementById("vidContainer");
    const vidPicker = document.getElementById("vidPicker");
    const vidPlayer = document.getElementById("video");
    const vidSymbol = document.getElementById("vidSymbol");
    const currentIcon = document.getElementById("currentIcon");
    const controlButtons = Array.from(document.querySelectorAll(".playbackControls>button, .audioControls>button"));
    const audioControls = document.getElementsByClassName("audioControls")[0];
    const uploadBtn = document.getElementById("upload");
    const playBtn = document.getElementById("play");
    const volumeBtn = document.getElementById("volume");
    const volumeSliderContainer = document.getElementById("volumeSliderContainer");
    const volumeSlider = document.getElementById("volumeSlider");
    const displayMsg = document.getElementById("msg");
    const blackoutLevel = "brightness(60%)";
    const noBlackout = "brightness(100%)";

// Icon classes in fontawesome
    const playClass='fa-solid fa-play';
    const pauseClass='fa-solid fa-pause';
    const volumeMutedClass='fa-solid fa-volume-xmark';
    const volumeLowClass='fa-solid fa-volume-off';
    const volumeMidClass='fa-solid fa-volume-low';
    const volumeHighClass='fa-solid fa-volume-high';
    const uploadClass='fa-solid fa-file-arrow-up';
    const uploadBeatClass='fa-solid fa-file-arrow-up fa-beat';
    const playCircleBeatClass='fa-regular fa-circle-play fa-beat';
    const pauseCircleClass='fa-regular fa-circle-pause fa-beat';
    const loadingClass='fa-solid fa-spinner fa-spin-pulse';


// Adjust initial status of icon and vidPlayer
    adjustCurrentIcon();

// Listen for change on file-picker
    vidPicker.addEventListener("change", () => {
        const vidFile = vidPicker.files[0];
        const vidURL = URL.createObjectURL(vidFile);
        const fileExtension = vidFile.type.split('/')[1];
    // Check if file has correct extension
        if (fileExtension=="mp4" || fileExtension=="webm"  || fileExtension=="ogg" ) {
        // Load video
            loadVideo(vidURL);
        // Empty out the value of file picker so it triggers change event even if same file chosen
            vidPicker.value = null;
        } else {
            alert("Está intentando cargar un formato no soportado. Por favor, seleccione un archivo .mp4, .webm o .ogg");
        }
    });

// Load video function:
function loadVideo(vidURL){
    vidPlayer.src = vidURL;
    // Change into loading icon
        currentIcon.className = loadingClass;
    // Add display message:
        displayMsg.innerText="Cargando";
        displayMsg.style.display="block";
    // Align self-end
        currentIcon.style.alignSelf="self-end";
    // Blackout
        vidPlayer.style.filter = blackoutLevel;
    // Remove pointer events
        vidContainer.style.pointerEvents = "none";
    // Gray out buttons
        setColor(controlButtons,"gray");
    // No button pointer
        setPointer(controlButtons,"none");
    // Setting video player size:
        vidPlayer.onloadedmetadata = setVideoPlayerSize;
    // Finish pretend loading
        setTimeout(finishedLoading,2500);
    // Set volume to 0.4
        vidPlayer.volume = 0.4;
}

// Listen for window resize event and adapt dimensions:
    addEventListener("resize", (event) => {
    if(vidPlayer.readyState==0){
        defaultVidSize();
    }else{
        setVideoPlayerSize()};
    });

// Function sets video player size depending on loaded video dimensions:
function setVideoPlayerSize(){
    vidContainer.style.aspectRatio="";
        vidContainer.style.maxHeight= "";
    // landscape
    if(window.matchMedia("(orientation: landscape)").matches) {
        console.log("orientation Landscape");
    // if video loaded and wider than tall
    if (vidPlayer.videoWidth>vidPlayer.videoHeight) {
        console.log("video is wide");
        vidContainer.style.width="fit-content";
        vidPlayer.style.width="100%";
        vidPlayer.style.maxHeight="80vh";
    }
    if (vidPlayer.videoWidth<=vidPlayer.videoHeight) {
        console.log("video is tall");
        vidContainer.style.width="fit-content";
        vidPlayer.style.maxHeight="80vh";
    }
    }
    // portrait
    if(window.matchMedia("(orientation: portrait)").matches) {
        console.log("orientation Portrait");
        if (vidPlayer.videoWidth>vidPlayer.videoHeight) {
            console.log("video is wide")
            vidContainer.style.maxWidth="100vw";
            vidContainer.style.width="fit-content";
            vidPlayer.style.width="100%";
        }
        if (vidPlayer.videoWidth<=vidPlayer.videoHeight) {
            // if video loaded and taller than wide
            console.log("video is tall")
            vidContainer.style.maxHeight="100vh";
            vidContainer.style.width="fit-content";
            vidPlayer.style.height="100%";
        }
    }
}


    function finishedLoading(){
    //Remove display msg
        displayMsg.style.display="none";
    //Switch icon to play icon
        currentIcon.className = playCircleBeatClass;
    // Center icon
        currentIcon.style.alignSelf="center";
    //Reactivate pointer events
        setColor(controlButtons,"white");
        setPointer(controlButtons,"auto");
        vidContainer.style.pointerEvents = "auto";
    //Remove video blackout effect
        vidPlayer.style.filter = noBlackout;
    };

    // Listen for click events
    vidPlayer.addEventListener("click", handleClick);
    vidSymbol.addEventListener("click", handleClick);

    // If no video, file picker, if video present then toggle play/pause
    function handleClick(){
        if (vidPlayer.readyState==0) {
            vidPicker.click();
        } else {
            playToggle();
        } 
    };

    // Video play/pause toggle
    function playToggle(){
        if (vidPlayer.paused==false) {
            vidPlayer.pause();
            adjustCurrentIcon();
        } else {
            vidPlayer.play();
            adjustCurrentIcon();
        }
    };

//Event Listeners for control buttons:
    uploadBtn.addEventListener("click", ()=> {
        if (!vidPlayer.paused){
            vidPlayer.pause();
            adjustCurrentIcon();
            };
        vidPicker.click();
    });
    playBtn.addEventListener("click", () => {playToggle(); adjustCurrentIcon();});
    volumeBtn.addEventListener("click", () => {
        if (vidPlayer.volume!==0) {
            vidPlayer.volume=0
            volumeBtn.firstChild.className = volumeMutedClass;
            updateVolumeSliderRange();
        } else {
            vidPlayer.volume=0.4;
            updateVolumeSliderRange();
        }
    });

//Show volume range on hover over volume icon
    volumeBtn.addEventListener("mouseenter", ()=>{
        volumeSlider.style.opacity= 1;
        volumeSlider.style.visibility= "visible";
    });
    audioControls.addEventListener("mouseleave", ()=>{
        volumeSlider.style.opacity= 0;
        volumeSlider.style.visibility= "hidden";
    });

// Using range input to control media volume:
    volumeSlider.addEventListener("change", () =>{
        vidPlayer.volume = volumeSlider.value/10;
        updateVolumeLevelIcon();
    });

// Checking volume level to change slider range accordingly:
    function updateVolumeSliderRange(){
        volumeSlider.value = vidPlayer.volume*10;
        updateVolumeLevelIcon();
    };

// Checking volume level to change icon accordingly:
    function updateVolumeLevelIcon(){
    switch (true) {
    case volumeSlider.value>6: volumeBtn.firstChild.className=volumeHighClass;
        break;
    case volumeSlider.value>2: 
        volumeBtn.firstChild.className=volumeMidClass;
        break;
    case volumeSlider.value>0: volumeBtn.firstChild.className=volumeLowClass;
        break;
    case volumeSlider.value==0: volumeBtn.firstChild.className=volumeMutedClass;
        break;
    default: volumeBtn.firstChild.className=volumeMidClass;
        break;
    }};

// Handling big video icon logic, blackout logic, etc.:
    function adjustCurrentIcon(){
        switch (true) {
            // If no vid loaded
            case vidPlayer.readyState==0:
                // set vid player size default
                defaultVidSize();
                // upload icon shown
                currentIcon.className = uploadBeatClass;
                // position at self-end
                currentIcon.style.alignSelf="self-end";
                // display message
                displayMsg.innerText="Haz click aquí para subir un vídeo";
                // control buttons grayed out & no pointer mouse
                setColor(controlButtons,"gray");
                setPointer(controlButtons,"none");
                break;
            // If vid paused
            case vidPlayer.readyState==4 && vidPlayer.paused:
                // visible play icon
                currentIcon.style.display = "block";
                currentIcon.className = playCircleBeatClass;
                // position at center
                currentIcon.style.alignSelf="center";
                //change control icon
                playBtn.firstChild.className = playClass;
                //blackout
                vidPlayer.style.filter = blackoutLevel;
                break;
            // If vid playing
            case vidPlayer.readyState==4 && !vidPlayer.paused:
                //change control icon
                playBtn.firstChild.className = pauseClass;
                // position at center
                currentIcon.style.alignSelf="center";
                //no visible icon
                currentIcon.style.display = "none";
                currentIcon.className = pauseCircleClass;
                // no blackout
                vidPlayer.style.filter = noBlackout;
                break;
            default:
                currentIcon.style.display = "none";
                break;
        }
    };


// If video playing, on mouseenter show pause icon, on mouseleave adjust play icon
vidContainer.onmouseenter = function(event) {
    if (vidPlayer.readyState==4 && !vidPlayer.paused){
        vidPlayer.style.filter = blackoutLevel;
        currentIcon.style.display= "block";
    }
};
vidContainer.onmouseleave = function(event) {
    if (vidPlayer.readyState==4 && !vidPlayer.paused){
        vidPlayer.style.filter = noBlackout;
        currentIcon.style.display= "none";
    }
};


// Setting color of video control buttons
    function setColor(elemArray, color){
        elemArray.forEach(element => {
            element.style.color= color;
        });
    }
// Setting pointer events
    function setPointer(elemArray, pointer){
        elemArray.forEach(element => {
            element.style.pointerEvents= pointer;
        });
    }

// Sample videos:
    const bigBuckBunny = document.getElementById("bigBuckBunny");
    const elephantsDream = document.getElementById("elephantsDream");
    bigBuckBunny.addEventListener("click", ()=>{
        const bbbURL = "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
        vidPlayer.pause();
        adjustCurrentIcon();
        loadVideo(bbbURL);
    });
    elephantsDream.addEventListener("click", ()=>{
        const edURL = "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";
        vidPlayer.pause();
        adjustCurrentIcon();
        loadVideo(edURL);
    });

    // set vid player size default
    function defaultVidSize(){
        vidContainer.style.aspectRatio="16/9";
        vidContainer.style.maxHeight= "50vh";
    };


} else {
alert('La API de FILE no es soportada en este navegador.');
};