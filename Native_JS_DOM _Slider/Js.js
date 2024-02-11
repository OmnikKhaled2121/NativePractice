var imagesList = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.querySelector(".lightBoxContainer");
var LightBox = document.querySelector(".LightBox");
var closeAction = document.getElementById("close");
var rightAction = document.getElementById("right");
var leftAction = document.getElementById("left");
var body = document.body;
var sliderCounter = 0;


//function to display the light box window with the photo that user click on
for (var i = 0; i < imagesList.length; i++) {
    imagesList[i].addEventListener("click", function (e) {
        var imgSrc = e.target.getAttribute('src');
        sliderCounter = imagesList.indexOf(e.target);
        LightBox.style.backgroundImage = `url(${imgSrc})`;
        lightBoxContainer.classList.replace("d-none", "d-flex");
    })
}

//slide to display the next photo when click on the right icon 
function getNextPhoto() {
    sliderCounter++;
    if (sliderCounter == imagesList.length) {
        sliderCounter = 0;
    }
    var imgSrc = imagesList[sliderCounter].getAttribute('src');
    LightBox.style.backgroundImage = `url(${imgSrc})`;
}

//slide to display the prev  photo when click on the left icon 
function getPrevPhoto() {
    sliderCounter--;
    if (sliderCounter == -1) {
        sliderCounter = (imagesList.length) - 1;
    }
    console.log(sliderCounter)
    var imgSrc = imagesList[sliderCounter].getAttribute('src');
    LightBox.style.backgroundImage = `url(${imgSrc})`;

}

rightAction.addEventListener("click", getNextPhoto)
leftAction.addEventListener("click", getPrevPhoto)
//close the light box window with click on close 
closeAction.addEventListener("click", function (e) {
    lightBoxContainer.classList.replace("d-flex", "d-none");
})

// sliding action with keyboard
body.addEventListener("keydown", function (e) {
    if (e.code === "ArrowRight") {
        getNextPhoto();
    }
    else if (e.code === "ArrowLeft") {
        getPrevPhoto();
    } else if (e.code) {
        lightBoxContainer.classList.replace("d-flex", "d-none");
    }
})
