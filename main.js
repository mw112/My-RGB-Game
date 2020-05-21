var numberofSquare = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
var modeBtn = document.querySelectorAll(".mode")
var test = document.getElementById("test").value;
colorDisplay.textContent = pickedColor; 

init();

function init(){
setUpmodeBtn();
setUpSquare();
reset();
}

resetBtn.addEventListener("click", function(){
    reset();
});

function setUpmodeBtn(){
    for(var i = 0; i < modeBtn.length; i++){
        modeBtn[i].addEventListener("click", function(){
            modeBtn[0].classList.remove("selected")
            modeBtn[1].classList.remove("selected")
            this.classList.add("selected");
            this.textContent === "Easy" ? numberofSquare = 3 : numberofSquare = 6;
            reset();
        });
    }
}
function setUpSquare() {
    for(var i=0;i< squares.length; i++){
        // add click listener to squares
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                reset.textContent = "Play Again?";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again!";
            }
        });
    }
}

function reset() {
    colors = colorGenerater(numberofSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetBtn.textContent = "New Color"
    for(var i = 0; i< squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else {
            squares[i].style.display = "none";
        }
       
    }
    h1.style.backgroundColor = "steelblue";
}

function changeColor(color){
    for(var i = 0; i< squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function colorGenerater(number){
    var arrColor = [];
    for(var i = 0; i < number; i++){
        arrColor.push(randomColor());
    }
    return arrColor;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

