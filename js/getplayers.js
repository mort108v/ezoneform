"use strict"

import * as deleteScript from '../js/deleteplayer.js'

// addEventListener("DOMContentLoaded", init)

const API_KEY = "617812ed8597142da1745ad1"
const BASE_URL = "https://pokerplayers-806c.restdb.io"
const REST_URL = "/rest/players"
const MEDIA_URL = "/media/"

const Player = {
    name: "",
    age: "",
    email: "",
    pic: [],
    id: ""
}

export async function init() {

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
    player.age = data.age
    player.email = data.email


    player.pic = data.image[0]
    player.id = data._id

    console.log(player)
    return player

}

function buildPlayerList() {

    document.querySelector("#list tbody").innerHTML = ""
    players.forEach(displayPlayerList)
}

function displayPlayerList(player) {

    const playerClone = document.querySelector("template#playerTemplate").content.cloneNode(true)

    playerClone.querySelector("[data-field=name]").textContent = player.name
    playerClone.querySelector("[data-field=age]").textContent = player.age
    playerClone.querySelector("[data-field=email]").textContent = player.email
    playerClone.querySelector(".playerpic").src = BASE_URL + MEDIA_URL + player.pic + "?s=t"
    playerClone.querySelector("tr").dataset.id = player.id
    playerClone.querySelector(".subtract").addEventListener("click", () => deleteScript.deletePlayer(player.id))

    document.querySelector("#list tbody").appendChild(playerClone)

}