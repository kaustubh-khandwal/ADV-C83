var canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");

var lastPosition_OfX, lastPosition_OfY;


color = "red";
width = 2;
var widthOfScreen = screen.width;
newWidth_screen = screen.width - 70 ; 
newHeight_screen = screen.height - 300;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    console.log("check");
    color = document.getElementById("input_colour").value;
    width = document.getElementById("input_width").value;
    mouse_Event = "mouse_down"
}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e) {
    var currentPositionOfX = e.clientX - canvas.offsetLeft;
    var currentPositionOfY = e.clientY - canvas.offsetTop;

    if (mouse_Event == "mouse_down") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        ctx.moveTo(lastPosition_OfX, lastPosition_OfY)
        ctx.lineTo(currentPositionOfX, currentPositionOfY);
        ctx.stroke();

    }
    lastPosition_OfX = currentPositionOfX;
    lastPosition_OfY = currentPositionOfY;
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouse_Event = "mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouse_Event = "mouseleave";
}

if (widthOfScreen < 992){
    document.getElementById("my_canvas").width = newWidth_screen ; 
    document.getElementById("my_canvas").height = newHeight_screen ; 
    document.body.style.overflow = "hidden" ;
}


canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    color = document.getElementById("input_colour").value;
    width = document.getElementById("input_width").value;
    lastPosition_OfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPosition_OfY = e.touches[0].clientY - canvas.offsetTop;

}

canvas.addEventListener("touchmove", mytouchmove);

function mytouchmove(e) {
    console.log("touchmove");
    var currentPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    var currentPositionOfY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath()
    ctx.strokestyle = color;
    ctx.linewdth = width;
    ctx.moveTo(lastPosition_OfX,lastPosition_OfY);
    ctx.lineTo(currentPositionOfX,currentPositionOfY);
    ctx.stroke;
    lastPosition_OfX = currentPositionOfX;
    lastPosition_OfY = currentPositionOfY;
}


function clear_area() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}