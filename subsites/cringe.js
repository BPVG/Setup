var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
function drawRandom(){
    var width = parseInt(document.getElementById("width").value);
    var height = parseInt(document.getElementById("height").value);
    c.width = document.getElementById("c_width").value;
    c.height = document.getElementById("c_height").value;
    ctx.fillStyle = document.getElementById("c_color").value;
    ctx.fillRect(0, 0, c.width, c.height);
    for(i = 0; i < 10; i++){
        var xRandom = Math.floor(Math.random() * c.width + 1);
        var yRandom = Math.floor(Math.random() * c.height + 1);
        ctx.fillStyle = document.getElementById("b_color").value;
        ctx.fillRect(xRandom, yRandom, width, height);
        ctx.lineWidth = Math.round(width / 20)
        ctx.strokeStyle = document.getElementById("l_color").value;
        ctx.strokeRect(xRandom, yRandom, width, height);}
}

function drawRegular(){
    var x_start = parseInt(document.getElementById("x_start").value);
    var y_start = parseInt(document.getElementById("y_start").value);
    var width = parseInt(document.getElementById("width").value);
    var height = parseInt(document.getElementById("height").value);
    c.width = document.getElementById("c_width").value;
    c.height = document.getElementById("c_height").value;
    ctx.fillStyle = document.getElementById("c_color").value;
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = document.getElementById("b_color").value;
    ctx.fillRect(x_start, y_start, width, height);
    ctx.lineWidth = Math.round(width / 20);
    ctx.strokeStyle = document.getElementById("l_color").value;
    ctx.strokeRect(x_start, y_start, width, height);
}

function drawSquare(){
    var x_start = parseInt(document.getElementById("x_start").value);
    var y_start = parseInt(document.getElementById("y_start").value);
    var width = parseInt(document.getElementById("width").value);
    var height = parseInt(document.getElementById("height").value);
    c.width = document.getElementById("c_width").value;
    c.height = document.getElementById("c_height").value;
    var s = Math.min(width, height);
    ctx.fillStyle = document.getElementById("c_color").value;
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = document.getElementById("b_color").value;
    ctx.fillRect(x_start, y_start, s, s);
    ctx.lineWidth = Math.round(width / 20)
    ctx.strokeStyle = document.getElementById("l_color").value;
    ctx.strokeRect(x_start, y_start, s, s);
}

function drawRandomSquare(){
    var width = parseInt(document.getElementById("width").value);
    var height = parseInt(document.getElementById("height").value);
    c.width = document.getElementById("c_width").value;
    c.height = document.getElementById("c_height").value;
    var s = Math.min(width, height);
    ctx.fillStyle = document.getElementById("c_color").value;
    ctx.fillRect(0, 0, c.width, c.height);
    for(i = 0; i < 10; i++){
        var xRandom = Math.floor(Math.random() * c.width + 1);
        var yRandom = Math.floor(Math.random() * c.height + 1);
        ctx.fillStyle = document.getElementById("b_color").value;
        ctx.fillRect(xRandom, yRandom, s, s);
        ctx.lineWidth = Math.round(width / 20)
        ctx.strokeStyle = document.getElementById("l_color").value;
        ctx.strokeRect(xRandom, yRandom, s, s);}
}

function checkData(){
    var x_start = parseInt(document.getElementById("x_start").value);
    var y_start = parseInt(document.getElementById("y_start").value);
    var width = parseInt(document.getElementById("width").value);
    var height = parseInt(document.getElementById("height").value);
    canvas = document.getElementById("c_color").value;
    c.width = document.getElementById("c_width").value;
    c.height = document.getElementById("c_height").value;
    if (x_start >= 0 && x_start <= c.width && y_start >= 0 && y_start <= c.height){
        if ((x_start + width) <= c.width && (y_start + height) <= c.height){
            if (document.getElementById("sq").checked && document.getElementById("r").checked){
                drawRandomSquare()
            } else if (document.getElementById("r").checked && !document.getElementById("sq").checked){
                drawRandom()
            } else if (document.getElementById("sq").checked && !document.getElementById("r").checked){
                drawSquare()
            } else {
                drawRegular()
            }
        } else {
            alert("Platums vai augstums nav ievadīts pareizi, mēģini vēlreiz!");
            return;
        }
    } else {
        alert("Kāda no sākuma koordinātām nav pareizi ievadīta, mēģini vēlreiz!");
        return;
    }
}