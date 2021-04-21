
//let navs = document.querySelector("nav li");
let navshome = document.getElementById("home");
let navsprog = document.getElementById("prog");
let navsgsd = document.getElementById("gsd");
let navscont = document.getElementById("cont");


function colorChange()
{
    navshome.style.backgroundColor =  "rgb(0, 0, 200)";

}
function colorChangeBack()
{
    navshome.style.backgroundColor =  "rgb(40, 57, 155)";

}
function colorChange2()
{
    navsprog.style.backgroundColor =  "rgb(0, 0, 200)";

}
function colorChangeBack2()
{
    navsprog.style.backgroundColor =  "rgb(40, 57, 155)";

}
function colorChange3()
{
    navsgsd.style.backgroundColor =  "rgb(0, 0, 200)";

}
function colorChangeBack3()
{
    navsgsd.style.backgroundColor =  "rgb(40, 57, 155)";

}
function colorChange4()
{
    navscont.style.backgroundColor =  "rgb(0, 0, 200)";

}
function colorChangeBack4()
{
    navscont.style.backgroundColor =  "rgb(40, 57, 155)";

}

navshome.onmouseover = colorChange;
navshome.onmouseout = colorChangeBack;
navsprog.onmouseover = colorChange2;
navsprog.onmouseout = colorChangeBack2;
navsgsd.onmouseover = colorChange3;
navsgsd.onmouseout = colorChangeBack3;
navscont.onmouseover = colorChange4;
navscont.onmouseout = colorChangeBack4;