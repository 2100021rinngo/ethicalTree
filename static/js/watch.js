onload = reizeWindow;

let header;
let work;
let rate;
function reizeWindow()
{
    header = document.getElementById("header");
    work = document.getElementById("main");
    rate = window.innerWidth / 1000;
    rate = (rate == 1) ? 1 : rate;
    work.style.transform = "scale(" + rate + "," + rate + ")";
    header.style.width = `${window.innerWidth}px`;
}