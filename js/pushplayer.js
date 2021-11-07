"use strict"

import * as main from '../js/main.js'

const testPlayer = {
    name: "gggg head",
    age: 128,
    email: "ggggg@jurgen.dk",
    image: []
}

const restDB = "https://users-a042.restdb.io/rest/gamers"
const restAPIkey = "61884d7afc71545b0f5e05ad"

const postPlayer = JSON.stringify(testPlayer)

export async function pushPlayer(gamer) {
    console.log("Pushing a player to db")
    console.log(gamer)

    await fetch(restDB, {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-apikey": restAPIkey,
                "cache-control": "no-cache"
            },
            body: gamer,
        })
        .then(response => response.json())
        // .then(main.displayListFromGet())

}