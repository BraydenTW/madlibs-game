let title = "";

let what_type = document.querySelector(".what-type-out");

let WORD_INPUT = document.querySelector(".word-input");
let WORD_OUTPUT = document.querySelector(".story-output");

let sequenceIndex = 1;

function outputStory() {
    let isInput = false;
    WORD_OUTPUT.innerHTML += "<div class='story-title'>" + title +"</div>";
    jsonSTORIES[storyIndex].sequence.forEach((item) => {
        if (isInput) {
            WORD_OUTPUT.innerHTML += "<span class='input-final'>" + item.value +"</span>";
            isInput = false;
        } else {
            WORD_OUTPUT.innerHTML += "<span>" + item.value +"</span>"
            isInput = true;
        }
    });
}

WORD_INPUT.addEventListener("keypress", e => {
    if (e.keyCode === 13) {
        WORD_INPUT.blur();
        if (WORD_INPUT.value != "") {
            jsonSTORIES[storyIndex].sequence[sequenceIndex - 2].value = WORD_INPUT.value;
            WORD_INPUT.value = "";
            if (sequenceIndex >= jsonSTORIES[storyIndex].sequence.length) {
                console.log("yep")
                WORD_INPUT.value = "";
                what_type.style.marginLeft = "-300px";
                what_type.style.opacity = "0";
                document.querySelectorAll(".preset")[slideIndex].style.marginLeft = "-100%";
                document.querySelectorAll(".preset")[slideIndex].style.zIndex = "-1";
                slideIndex++;
                setTimeout(() => {
                    document.querySelectorAll(".preset")[3].style.opacity = "1";
                    document.querySelectorAll(".preset")[slideIndex].style.zIndex = "1";
                }, 1000);
                outputStory();
            } else {
                what_type.style.marginLeft = "-300px";
                what_type.style.opacity = "0";
                setTimeout(() => {
                    what_type.style.marginLeft = "300px";
                    console.log(sequenceIndex)
                    console.log(jsonSTORIES[storyIndex].sequence.length - 1)
                    what_type.textContent = jsonSTORIES[storyIndex].sequence[sequenceIndex].value;
                    sequenceIndex += 2;
                }, 400);
                setTimeout(() => {
                    what_type.style.marginLeft = "0px";
                    what_type.style.opacity = "1";
                }, 600);
                WORD_INPUT.focus();
            }
        } else {
            WORD_INPUT.style.marginLeft = "-20px";
            WORD_INPUT.style.borderColor = "#e74c3c";
            setTimeout(() => {
                WORD_INPUT.style.marginLeft = "20px";
            }, 100);
            setTimeout(() => {
                WORD_INPUT.style.marginLeft = "-20px";
            }, 200);
            setTimeout(() => {
                WORD_INPUT.style.marginLeft = "20px";
            }, 300);
            setTimeout(() => {
                WORD_INPUT.style.marginLeft = "0px";
                WORD_INPUT.style.borderColor = "black";
            }, 400);
            setTimeout(() => {
                WORD_INPUT.style.borderColor = "black";
            }, 500);
        }
    }
});

function inputStory() {
    title = jsonSTORIES[storyIndex].title;
    what_type.textContent = jsonSTORIES[storyIndex].sequence[1].value;
    sequenceIndex += 2;
}