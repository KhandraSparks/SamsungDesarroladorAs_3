//Comprobar que el navegador soporta la función
// if (window.File && window.FileReader && window.FileList) {
//     //aqui mi codigo a ejecutar;
//     } else {
//     alert('La API de FILE no es soportada en este navegador.');
//     }

//Obtener elementos del DOM
const vidPicker = document.getElementById("vidPicker");
const vidPlayer = document.getElementById("video");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
// const volumeDownBtn = document.getElementById("volumeDown");
// const volumeUpBtn = document.getElementById("volumeUp");
// const muteBtn = document.getElementById("mute");
// const volumeRange = document.getElementById("volumeRange");

//Evento cambio archivo seleccionado
vidPicker.addEventListener("change", () => {
    console.log("File changed");
    const vidFile = vidPicker.files[0];
    const vidURL = URL.createObjectURL(vidFile);
    vidPlayer.src = vidURL;
    //TODO: pretend to load
    
    //empty out the value of file picker so it retriggers change event even if same file chosen
    vidPicker.value = null;
});

//Eventos botonera
playBtn.addEventListener("click", () => {
    console.log("yo mama dont know");
    vidPlayer.play();
});
pauseBtn.addEventListener("click", () => {
    vidPlayer.pause();
})
