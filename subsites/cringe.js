var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var w = h = 200

function drawRand(){
    ctx.fillStyle = document.getElementById("bgcol").value;
    ctx.fillRect(0, 0, 200, 200);
    for(i = 0; i < 3; i++){
        var xRand = Math.floor(Math.random() * 200 + 1);
        var yRand = Math.floor(Math.random() * 200 + 1);
        ctx.fillStyle = document.getElementById("lcol").value;
        ctx.fillRect(xRand, yRand, w, h);
        ctx.linew = Math.round(w / 20)
        ctx.strokeStyle = document.getElementById("lcol").value;
        ctx.strokeRect(xRand, yRand, w, h);}
}

function drawRegular(){
    var x_start = parseInt(document.getElementById("x_start").value);
    var y_start = parseInt(document.getElementById("y_start").value);
    ctx.fillStyle = document.getElementById("c_color").value;
    ctx.fillRect(0, 0, c.w, c.h);
    ctx.fillStyle = document.getElementById("b_color").value;
    ctx.fillRect(x_start, y_start, w, h);
    ctx.linew = Math.round(w / 20);
    ctx.strokeStyle = document.getElementById("l_color").value;
    ctx.strokeRect(x_start, y_start, w, h);
}

function checkData(){
    var x_start = parseInt(document.getElementById("x_start").value);
    var y_start = parseInt(document.getElementById("y_start").value);
    var w = parseInt(document.getElementById("w").value);
    var h = parseInt(document.getElementById("h").value);
    canvas = document.getElementById("c_color").value;
    c.w = document.getElementById("c_w").value;
    c.h = document.getElementById("c_h").value;
    if (x_start >= 0 && x_start <= c.w && y_start >= 0 && y_start <= c.h){
        if ((x_start + w) <= c.w && (y_start + h) <= c.h){
            if (document.getElementById("sq").checked && document.getElementById("r").checked){
                drawRandomSquare()
            } else if (document.getElementById("r").checked && !document.getElementById("sq").checked){
                drawRand()
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