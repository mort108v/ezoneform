"use strict"

// import { primaryColor, secondaryColor } from '../scss/_config.scss';

let gSpots
let logoGs



init()

async function init() {
    let response = await fetch("../logo.svg");
    let mySVGdata = await response.text();
    document.querySelector(".menu-logo__svg").innerHTML = mySVGdata;

    manipulateSVG();
}

function manipulateSVG() {
    console.log("manipulateSVG");
    // DO shit

    logoGs = document.querySelectorAll(".logo g")

    logoGs.forEach(logoG => {
        logoG.classList.add("g_to_interact_with")
    })

    gSpots = document.querySelectorAll(".g_to_interact_with");


    gSpots.forEach(gSpot => {

        gSpot.style.fill = "#CACEFC"

        gSpot.addEventListener("mouseover", mouseoverP);
        gSpot.addEventListener("mouseout", mouseoutP);
        // pSpot.addEventListener("click", clickP);
        const zSpot = document.querySelector("#z");
        zSpot.style.fill = "#F48D69";
    });



}

function mouseoverP() {
    console.log("mouseover path");
    const zSpot = document.querySelector("#z");

    if (this === zSpot) {
        this.style.fill = "#CACEFC";
    } else {

        this.style.fill = "#F48D69";
    }
}

function mouseoutP() {
    console.log("mouseout from path");
    const zSpot = document.querySelector("#z");

    if (this === zSpot) {
        this.style.fill = "#F48D69";
    } else {

        this.style.fill = "#CACEFC";
    }
}

// function clickP() {
//     console.log("clickG");
//     this.classList.remove("animatefill");
//     elementToPaint = this;
//     elementToPaint.style.fill = "rgba(80, 163, 230, 0.3)";
// }