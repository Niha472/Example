canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="empty";
var color="Black";
var width=8;
var last_x,last_y;
canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e){
    mouseevent="mousedown";
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
}
canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e){
    current_pos_x=e.clientX-canvas.offsetLeft;
    current_pos_y=e.clientY-canvas.offsetTop;
    if (mouseevent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log(current_pos_x,current_pos_y);
        ctx.moveTo(last_x,last_y);
        console.log(last_x,last_y);
        ctx.lineTo(current_pos_x,current_pos_y);
        ctx.stroke()
    }
    last_x=current_pos_x;
    last_y=current_pos_y;
}
function Clear() {
     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }