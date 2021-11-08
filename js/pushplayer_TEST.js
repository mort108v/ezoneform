"use strict"

// import * as main from '../js/main.js'

// const gamer = {
//     name: "",
//     gamertag: "",
//     email: "",
//     password: "",
//     image: []
// }

// const gamerFiles = {
//     image: []
// }

// collectUserData()

// export function collectUserData() {
//     let gamerName = document.querySelector("#name").value
//     let gamerTag = document.querySelector("#gamertag").value
//     let gamerEmail = document.querySelector("#email").value
//     let gamerPass = document.querySelector("#password").value
//     let gamerImage = document.querySelector("#photo").value

//     gamer.name = gamerName
//     gamer.gamertag = gamerTag
//     gamer.email = gamerEmail
//     gamer.password = gamerPass
//     gamer.image = gamerImage

//     let postGamer = JSON.stringify(gamer)
//     pushPlayer(postGamer)
// }

// const restDB = "https://users-a042.restdb.io/rest/gamers"
// const restAPIkey = "61884d7afc71545b0f5e05ad"

const API_KEY = "61884d7afc71545b0f5e05ad"
const BASE_URL = "https://users-a042.restdb.io"
const REST_URL = "/rest/gamers"
const MEDIA_URL = "/media/"

let gamerName = document.querySelector("#name").value
let gamerTag = document.querySelector("#gamertag").value
let gamerEmail = document.querySelector("#email").value
let gamerPass = document.querySelector("#password").value
let gamerImage = document.querySelector("#photo").value

export async function collectUserData() {

    request = require(["request"]);

    var options = {
        method: 'POST',
        url: BASE_URL + REST_URL,
        headers: {
            'cache-control': 'no-cache',
            'x-apikey': API_KEY,
            'content-type': 'application/json'
        },
        body: { field1: gamerName, field2: gamerTag, field3: gamerEmail, field4: gamerPass, field5: gamerImage },
        json: true
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });
}

// async function pushPlayer(gamer) {
//     console.log("Pushing a player to db")
//     console.log(gamer)

//     await fetch(BASE_URL + REST_URL, {
//             method: "post",
//             headers: {
//                 "Content-Type": "application/json; charset=utf-8",
//                 "x-apikey": API_KEY,
//                 "cache-control": "no-cache"
//             },
//             body: gamer,
//         })
//         .then(response => response.json())
//         // .then(main.displayListFromGet())

// }