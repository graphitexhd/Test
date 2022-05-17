const colour1 = document.querySelector(".colour1");
const colour2 = document.querySelector(".colour2");
const colour3 = document.querySelector(".colour3");
const colour4 = document.querySelector(".colour4");
const colour5 = document.querySelector(".colour5");
const colour6 = document.querySelector(".colour6");
const colour7 = document.querySelector(".colour7");
const cssBackground = document.querySelector('.cssBackground');
const cssTextColour = document.querySelector('.cssTextColour');
const cssTextShadow = document.querySelector('.cssTextShadow');
const body = document.getElementById("gradient");
const textHeadingSize = document.querySelector(".textHeadingSize");
const headingColour = document.querySelector(".headingColour");
const headingColour2 = document.querySelector(".heading2");
let selected = document.querySelector('input[type=radio][name=backgroundType]:checked');
const randomBtn = document.querySelector("#Randomizer");
const random2Btn = document.querySelector("#Randomizer2");
const random3Btn = document.querySelector("#Randomizer3");

let rgb;

//Listening to buttons and colours
colour1.addEventListener("input", changeColorGradient);
colour2.addEventListener("input", changeColorGradient);
colour3.addEventListener("input", changeTextColor);
colour4.addEventListener("input", changeHeadingTextShadow);
colour5.addEventListener("input", changeHeadingTextShadow);
colour6.addEventListener("input", changeHeadingTextShadow);
colour7.addEventListener("input", changeColorGradient);
randomBtn.addEventListener("click", randomColourGradient);
random2Btn.addEventListener("click", randomTextColor);
random3Btn.addEventListener("click", randomTextShadow);
textHeadingSize.addEventListener("input", changeHeadingTextSize);
//Functions
function changeHeadingTextSize() {
    headingColour.style.fontSize = textHeadingSize.value + "%";
    headingColour2.style.fontSize = textHeadingSize.value + "%";
}
function changeTextColor() {
    body.style.color = colour3.value;
    cssTextColour.textContent = body.style.color;
}
function changeColorGradient() {
    selected = document.querySelector('input[type=radio][name=backgroundType]:checked');
    if (selected.value === "radial") {
        var hex_code = colour1.value.split("");
        var red = parseInt(hex_code[1] + hex_code[2], 16);
        var green = parseInt(hex_code[3] + hex_code[4], 16);
        var blue = parseInt(hex_code[5] + hex_code[6], 16);
        rgb = red + "," + green + "," + blue;
        console.log(rgb)
        body.style.background = "radial-gradient(rgba(" + rgb + ", 0.5) 0%, transparent 70%), linear-gradient(" + colour2.value + " 40%, " + colour7.value + " 70%)";
        body.style.background = "-webkit-radial-gradient(rgba(" + rgb + ", 0.5) 0%, transparent 70%), linear-gradient(" + colour2.value + " 40%, " + colour7.value + " 70%)";
        cssBackground.textContent = body.style.background;
    } else if (selected.value === "linear") {
        body.style.background = "linear-gradient(to right, " + colour1.value + ", " + colour2.value + ")";
        body.style.background = "-webkit-linear-gradient(to right, " + colour1.value + ", " + colour2.value + ")";
        cssBackground.textContent = body.style.background;
    }
}
function changeHeadingTextShadow() {
    headingColour.style.textShadow = "0 0 0.05em" + colour4.value + ", 0 0 0.2em " + colour5.value + ", 0 0 0.3em " + colour6.value;
    headingColour2.style.textShadow = "0 0 0.15em" + colour4.value + ", 0 0 0.4em " + colour5.value + ", 0 0 0.4em " + colour6.value;
    cssTextShadow.textContent = "text-shadow: " + headingColour.style.textShadow;
}
window.onload = function () {
    randomColourGradient();
    changeTextColor();
    changeHeadingTextShadow();
}
function random() {
    return Math.floor(Math.random() * 16777215).toString(16);
}
function randomColourGradient() {
    colour1.value = "#" + random();
    colour2.value = "#" + random();
    colour7.value = "#" + random();
    changeColorGradient();
}
function randomTextColor() {
    colour3.value = "#" + random();
    changeTextColor();
}
function randomTextShadow() {
    colour4.value = "#" + random();
    colour5.value = "#" + random();
    colour6.value = "#" + random();
    changeHeadingTextShadow();
}
function copyCss(cssColourValue) {
    navigator.clipboard.writeText(cssColourValue.textContent);
    alert("Colour Copied: " + cssColourValue.textContent);
}








