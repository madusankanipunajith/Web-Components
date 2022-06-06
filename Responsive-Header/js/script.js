window.onload = playButton;

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          ".spinner").style.visibility = "visible";
    } else {
        document.querySelector(
          ".spinner").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
};

var images = [
    "./img/sap.JPG",
    "./img/wso2.jpg",
    "./img/ruwan.jpg",
    "./img/ruwan2.jpg"
]


// variables
var num = 0;

var previous = document.getElementById('previous');
var next = document.getElementById('next');
var btns = document.getElementsByClassName('animation');
var image = document.getElementById('about-img');

// events
var event1 = next.addEventListener('click', nex);
var event2 = previous.addEventListener('click', prev);


// function
function nex() {
    var slider = document.getElementById("slider");
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
    slider.style.transition = "all 2s ease-in"
}
function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
    slider.style.transition = "all 2s ease-in"
}

function playButton(){
    for (let index = 0; index < btns.length; index++) {
        const element = btns[index];
        element.style.bottom = "10px";
    }
}
