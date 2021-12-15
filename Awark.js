// developter bulb light

let btn = document.querySelector(".btn");
let body = document.querySelector("body");
let audio = document.getElementById("audio");

btn.addEventListener("click",() =>{
    body.classList.toggle("on");
    //audio.style.display = "block"
    audio.play();
})