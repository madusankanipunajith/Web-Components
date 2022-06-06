window.onload = imageLoad;
var images2 = [
    "./img/sap.JPG",
    "./img/wso2.jpg",
    "./img/ruwan.jpg",
    "./img/ruwan2.jpg",
    "./img/cv-min.jpg"
]
function imageLoad() {
    var index = 0;
    setInterval(() => {
        var next = index % images2.length;
        var path = images2[next];
        image.src = path;
        index = next+1;
    }, 2000);
}