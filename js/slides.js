let slideIndex = 0;

let jsonSTORIES = {};

let alreadyClicked = false;

var xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', './js/json/stories.json', true);
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200) {
            jsonSTORIES = JSON.parse(xmlhttp.responseText).stories;
        }
    }
};
xmlhttp.send(null);

document.querySelector(".start-btn").addEventListener("click", () => {
    if (!this.disabled) {
        document.querySelectorAll(".preset")[slideIndex].style.marginLeft = "-100%";
        document.querySelectorAll(".preset")[slideIndex].style.zIndex = "-1";
        slideIndex++;
        document.querySelectorAll(".preset")[slideIndex].style.marginLeft = "0";
        document.querySelectorAll(".preset")[slideIndex].style.zIndex = "1";
    }
    this.disabled = true;
});

let storyIndex = 0;

document.querySelectorAll(".story-pre").forEach((item, index) => {
    item.addEventListener("click", () => {
        if (!alreadyClicked) {
            document.querySelectorAll(".preset")[slideIndex].style.marginLeft = "-100%";
            document.querySelectorAll(".preset")[slideIndex].style.zIndex = "-1";
            slideIndex++;
            document.querySelectorAll(".preset")[slideIndex].style.marginLeft = "0";
            document.querySelectorAll(".preset")[slideIndex].style.zIndex = "1";
            storyIndex = index;
            inputStory();
            alreadyClicked = true;
        }
    });
});