"use strict"

// import * as main from '../js/main.js'



// const gamerFiles = {
//     image: []
// }

// collectUserData()

// export function collectUserData() {
//     let gamerName = document.querySelector("#name").value
//     let gamerTag = document.querySelector("#gamertag").value
//     let gamerEmail = document.querySelector("#email").value
//     let gamerPass = document.querySelector("#password").value
//     gamer.name = gamerName
//     gamer.gamertag = gamerTag
//     gamer.email = gamerEmail
//     gamer.password = gamerPass

//     let postGamer = JSON.stringify(gamer)
//     let gamerImage = document.querySelector("#photo").value
//     gamer.image = gamerImage
//     pushPlayer(postGamer, gamerImage)

//     // pushPlayerImage(gamerImage)
// }

const gamerfile = {
    image: []
}

let gamerImage
gamerfile.image = document.querySelector("#photo").value
gamerImage = gamerfile.image

const API_KEY = "61884d7afc71545b0f5e05ad"
const BASE_URL = "https://users-a042.restdb.io"
const REST_URL = "/rest/gamers"
const MEDIA_URL = "/media"

export async function pushPlayerImage(gamerImage) {
    console.log("Pushing a player to db")
    console.log(gamerImage)

    await fetch(BASE_URL + MEDIA_URL, {
            formData: "data",
            method: "post",
            headers: {
                "Content-Type": "multipart/form-data",
                "x-apikey": API_KEY,
                "cache-control": "no-cache"
            },
            body: gamerImage,
        })
        // .then(response => response.json())
        // .then(console.log(response))
        // .then(pushPlayerImage(id, image))
        // .then(main.displayListFromGet())

}
// async function pushPlayerImage(image, id) {
//     console.log("Pushing an image to db")
//     console.log(gamer, id)

//     let gamerImageURL = BASE_URL + MEDIA_URL + id + '/'

//     await fetch(gamerImageURL, {
//             formData: "data",
//             method: "post",
//             headers: {
//                 "Content-Type": File,
//                 "x-apikey": API_KEY,
//                 "cache-control": "no-cache"
//             },
//             body: image,
//         })
//         .then(response => response.json())
//         // .then(main.displayListFromGet())

// }

// export async function collectUserData() {

//     request = require(["request"]);

//     var options = {
//         method: 'POST',
//         url: BASE_URL + REST_URL,
//         headers: {
//             'cache-control': 'no-cache',
//             'x-apikey': API_KEY,
//             'content-type': 'application/json'
//         },
//         body: { field1: gamerName, field2: gamerTag, field3: gamerEmail, field4: gamerPass, field5: gamerImage },
//         json: true
//     };

//     request(options, function(error, response, body) {
//         if (error) throw new Error(error);

//         console.log(body);
//     });
// }