//menu face
let icon = document.getElementById("icon");
let menu = document.getElementById("menu");
let hider = document.getElementById("hider");
let state = false;

icon.addEventListener("click",() => {
    if(state == false){
        hider.classList.remove("backText");
        icon.style.transform = "rotate("+180+"deg)";
        hider.classList.add("moveText");
        state = true;
    }
    else if(state == true){
        hider.classList.remove("moveText");
        icon.style.transform = "rotate("+0+"deg)";
        hider.classList.add("backText");
        state = false;
    }
})

// random number of player

let numbers = new Array()
let numberParagraph = document.getElementById("number-n");
let slideIndex = 0;

function showHome(){

    for(let i = 1;i < 300;i++){
        numbers[i] = i;
    }
    let number = Math.floor(Math.random() * numbers.length);
    numberParagraph.innerHTML = number;

    //make slider 

    setTimeout(function(){

        ShowSlides()

        function ShowSlides(){
            let i;
            let slides = document.getElementsByClassName("slides");
    
            for(i=0;i< slides.length;i++)
            {
                slides[i].style.display="none";
            }
    
            slideIndex++;
            if(slideIndex > slides.length){
        
                slideIndex = 1;
            }
    
            slides[slideIndex - 1].style.display = "block";
            
            setTimeout(ShowSlides,11100);
        }

    },3000)

}

// showUp the paraGeraph

const desHeader = document.getElementById("desHeader");
const desPara = document.getElementById("des");
const mis = document.getElementById("mis");
const bottomQmark = document.getElementById("bottomQmark");
const awHeader = document.getElementById("awHeader");
const awPara = document.getElementById("aw");
const mis2 = document.getElementById("mis2");
let spans = document.getElementsByClassName("aSpan");
const proHeader = document.getElementById("proHeader")
const proSpan = document.getElementById("proSpan");
const proPara = document.getElementById("proPara");
const tip = document.getElementById("tip");

window.onscroll = () => { showUp() }

function showUp(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        desHeader.classList.add("showUp");
        desPara.classList.add("showUp");
        mis.classList.add("showUp");
        bottomQmark.classList.add("justShow");
    }

    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        awHeader.classList.add("showUp");
        awPara.classList.add("showUp");
        mis2.classList.add("showUp");
        for(let i = 0;i < spans.length;i++){
            spans[i].classList.add("showColor");
        }
    }

    if(document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800){
        proHeader.classList.add("showUp2");
        proPara.classList.add("showUp2");
        proSpan.classList.add("showUp2");
        tip.classList.add("easeColor");
    }
}