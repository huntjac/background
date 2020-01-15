// ACCESS CSS PROPERTIES VIA JS

//EVENTS: onmouseover, onmouseout, onmousedown, onmouseup

let changeBackground = function(){

    let box1 = document.getElementById("block1");
    let box2 = document.getElementById("block2");
    let box3 = document.getElementById("block3");

    box1.style.backgroundColor = "green";
    box2.style.backgroundColor = "black";
    box3.style.backgroundColor = "blue";

    box1.innerText ="WLR";
    box2.innerText ="EA";
    box3.innerText ="Your Choice";
};

let setOriginal = function(){

    let box1 = document.getElementById("block1");
    let box2 = document.getElementById("block2");
    let box3 = document.getElementById("block3");

    box1.style.backgroundColor = "darkred";
    box2.style.backgroundColor = "darkred";
    box3.style.backgroundColor = "darkred";

    box1.innerText = "OVER";
    box2.innerText = "ENTER";
    box3.innerText = "DOWN";
};
let showHidden = function(){
    document.getElementById("hidden").innerText = "Secret"
};

let mouseOver = function(id){

    id.style.backgroundColor = "yellow";
    id.innerText = "HELLO";
};

let mouseOut = function(id){
    id.style.backgroundColor = "red";
    if (id === document.getElementById('block1')) {
        id.innerText = "OVER"
    }else if(id === document.getElementById("block2")){
        id.innerText = "ENTER";
    }else
        id.innerText = "DOWN";
};