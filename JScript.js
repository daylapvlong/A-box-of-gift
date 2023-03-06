var box=document.getElementById("box");
var topleft=document.getElementById("topleft");
var topright=document.getElementById("topright");
var doll=document.getElementById("doll");

box.onmouseover=function() {
   
    box.style.transform="rotateX(-20deg) rotateY(-20deg)";

    setTimeout(function() {
        topleft.style.transform="translateX(-50px) translateY(-150px) rotateX(-90deg) rotateY(90)";
        topright.style.transform="translateX(150px) translateY(-150px) rotateX(-90deg) rotateY(90)";
    }, 500);

    setTimeout(function() {
        doll.style.animation="doll 2s forward 1";
    }, 800);
}

box.onmouseout=function() {
    
    doll.style.animation="doll2 2s forward 1";
    
    setTimeout(function() {
        topleft.style.transform="translateY(-100px) rotateX(=90deg)";
        topright.style.transform="translateY(-100px) translateX(100px) rotateX(=90deg)";
    }, 1000);

    setTimeout(function() {
        box.style.transform="rotateX(-10deg) rotateY(-10deg)";
    }, 1500);
}