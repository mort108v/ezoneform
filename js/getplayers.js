"use strict"

// import * as deleteScript from '../js/deleteplayer.js'

const API_KEY = "61884d7afc71545b0f5e05ad"
const BASE_URL = "https://users-a042.restdb.io"
const REST_URL = "/rest/gamers"
const MEDIA_URL = "/media/"

const Player = {
    name: "",
    gamertag: "",
    email: "",
    password: "",
    image: [],
}

init()

async function init() {

    await fetch(BASE_URL + REST_URL, {
            method: "get",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-apikey": API_KEY,
                "cache-control": "no-cache"
            }
        })
        .then(response => response.json())
        .then(data => prepData(data))
}
let players

function prepData(data) {

    players = data.map(makePlayer)

    buildPlayerList()
}

function makePlayer(data) {

    // const metaDataURL = "https://pokerplayers-806c.restdb.io/media/" + data.image + "/meta"
    // console.log(metaDataURL)

    // fetch(metaDataURL, {
    //         method: "get",
    //         headers: {
    //             "Content-Type": "application/json; charset=utf-8",
    //             "x-apikey": API_KEY,
    //             "cache-control": "no-cache"
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log(data))

    const player = Object.create(Player)

    player.name = data.name
    player.gamertag = data.gamertag
    player.email = data.email
    player.password = data.password
    player.image = data.image[0]

    console.log(player)
    return player

}

function buildPlayerList() {

    document.querySelector(".userinfo tbody.userinfo__table--tbody").innerHTML = ""
    players.forEach(displayPlayerList)
}

function displayPlayerList(player) {

    const playerClone = document.querySelector("template#aboutinfo").content.cloneNode(true)

    playerClone.querySelector("[data-field=name]").textContent = player.name
    playerClone.querySelector("[data-field=gamertag]").textContent = player.gamertag
    playerClone.querySelector("[data-field=email]").textContent = player.email
    playerClone.querySelector("[data-field=password]").textContent = player.password
        // playerClone.querySelector("[data-field=image]").src = BASE_URL + MEDIA_URL + player.pic + "?s=t"
        // playerClone.querySelector(".subtract").addEventListener("click", () => deleteScript.deletePlayer(player.id))

    document.querySelector(".userinfo tbody.userinfo__table--tbody").appendChild(playerClone)

}