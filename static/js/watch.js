onload = reizeWindow;

function reizeWindow()
{
    let work = document.getElementById("main");

    let rate = window.innerWidth / 1000;
    rate = rate == 1 ? 1 : rate;
    work.style.transform = "scale(" + rate + "," + rate + ")";
    console.log(rate);
    console.log(window.innerWidth);
}