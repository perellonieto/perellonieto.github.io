mouseDown = 0;
boxWidth = 32;
pixelSize = 10;
color = "#000000";
numPixels = boxWidth*boxWidth

function initPalette() {
    palette = document.getElementById("palette");
    content = "";
    for (r = 0; r < 257; r += 32) {
        for (g = 0; g < 257; g += 32) {
            for (b = 0; b < 257; b += 32) {
                content += "\t<div class=\"color\" onclick=\"selectColor(this)\" style=\"background-color:rgb("+ r +","+ g +","+ b +")\"></div>\r";
            }
        }
    }
    palette.innerHTML = content;
}

function initPaintBox() {
    content = "";
    for (i = 0; i < numPixels; i++)
    {
        content += "\t<div class=\"pixel\" id=\""+ i +"\" onmouseover=\"paint(this)\"></div>\r";
    }
    
    box = document.getElementById("paintBox");
    box.innerHTML = content;
    box.style.width = boxWidth*pixelSize + "px";
    box.style.height = boxWidth*pixelSize + "px";
}

function init() {
    document.body.onmousedown = function() { 
      ++mouseDown;
    }
    
    document.body.onmouseup = function() {
      --mouseDown;
    }
    
    initPaintBox();
    initPalette();
}

function selectColor(item) {
    color = item.style.backgroundColor;
    document.getElementById("selected").style.backgroundColor = color;
}

function paint(item)
{
    if (mouseDown == 1 && item.className == "pixel")
    {
        item.style.backgroundColor = color;
    }
}

window.onload = init;
