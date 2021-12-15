//text box properties
const txtBox = document.getElementById("enterTxt");
const span = document.getElementById("span");
const back = document.getElementById("back");
const btn = document.getElementById("enter");
let checkStatus = false;

txtBox.addEventListener("focus",function(){
        span.classList.remove("cheshmak");   
    })
back.addEventListener("focusout",function(){
    span.classList.add("cheshmak");
})

txtBox.addEventListener("keyup",function(){
    if(txtBox.value == "Losers"){
        txtBox.style.color = "#e01886";
        btn.style.color = "#e01886";
        btn.style.border = 2+"px solid #e01886"
        checkStatus = true;
    }
    else{
        txtBox.style.color = "rgb(71, 71, 71)";
        btn.style.color = "rgb(71, 71, 71)";
        checkStatus = false;
        btn.style.border = 2+"px solid rgb(71, 71, 71)"
    }
})

btn.addEventListener("mouseenter",() => {
    if(checkStatus == true){
        btn.style.color = "black";
        btn.style.background = "#e01886";
    }
    else{
        btn.style.color = "rgb(71, 71, 71)";
        btn.style.background = "transparent";
    }
})
btn.addEventListener("mouseout",() => {
    if(checkStatus == true){
        btn.style.color = "#e01886";
        btn.style.background = "transparent";
    }
    else{
        return false;
    }
})
btn.addEventListener("click",() => {
    if(checkStatus == true){
        window.open("Awark.html","_self");
    }
})
//end