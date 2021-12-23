onload = initialize;

let header;
let work;
let main;
async function initialize()
{
    header = document.getElementById("header");
    work = document.getElementById("work");

    main = document.getElementsByTagName("main")[0];

    reizeWindow();
}

// let rate;
async function reizeWindow()
{
    // work = document.getElementById("main");
    // rate = window.innerWidth / 1000;
    // rate = (rate == 1) ? 1 : rate;
    // work.style.transform = "scale(" + rate + "," + rate + ")";
    main.style.width = `${window.innerWidth}px`;
    header.style.width = `${window.innerWidth}px`;

    console.log(main.style.width);
}