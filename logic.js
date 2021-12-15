// No answer 
let noBtn = document.getElementById("No");
let byBox = document.querySelector('.card5');
let welBox = document.querySelector('.lastCard');
let yesOrNoBox = document.querySelector('.card4');
let yesBtn = document.getElementById('yes');
let numbers = new Array();
let number = document.getElementById("number");
let rand;
let para = document.getElementById("welcomePara");
let logo = document.getElementById("logo");
let title = document.getElementById("title");

noBtn.addEventListener("click",function(){
    yesOrNoBox.style.opacity = 0;
    yesOrNoBox.style.transform = "skewY("+20+"deg)";

    byBox.classList.add("moveCardFive")

    window.close();

})

yesBtn.addEventListener("click",function(){
    yesOrNoBox.style.opacity = 0;
    yesOrNoBox.style.transform = "skewY("+20+"deg)";
    welBox.classList.add("moveLastCard");

    for(let i = 1;i < 200;i++){
        numbers[i] = i;
    }

    let rand = Math.floor(Math.random() * numbers.length);

    number.innerHTML = rand;

    setTimeout(function(){
        welBox.style.transform = "rotate3d("+360+", "+50+", "+50+", "+200+"deg)";

        setTimeout(function(){
            number.innerHTML = "";
            para.innerHTML = "";
            logo.style.display = "block";
            title.style.display = "block";
                
        },1300);
        setTimeout(function(){
            welBox.style.opacity = 0;
            setTimeout(function(){
                window.open("G:/projects/Front-End/Seven°Game/home2.html", "_self");
            },3000);
        },6000)
     }, 13000);

})