"use strict"

import './logohandler'
import * as pushScript from '../js/pushplayer.js'
import * as getScript from '../js/getplayers.js'
import * as putScript from '../js/putdata.js'

const menuBtn = document.querySelector('.menu-btn')
const hamburger = document.querySelector('.menu-btn__burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.menu-nav__item')

const formBtn = document.querySelector('.signup-btn')
const userForm = document.querySelector('#signup')
const formNav = document.querySelector('.form-nav')
const formItems = document.querySelectorAll('.form-nav__item')

let showMenu = false
let showSignup = false

menuBtn.addEventListener('click', toggleMenu)
formBtn.addEventListener('click', toggleForm)
const submitData = document.querySelector(".form-nav__item--signup")
listenForPlayerInput()


function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open')
        nav.classList.add('open')
        menuNav.classList.add('open')
        navItems.forEach(item => item.classList.add('open'))

        showMenu = true
    } else {
        hamburger.classList.remove('open')
        nav.classList.remove('open')
        menuNav.classList.remove('open')
        navItems.forEach(item => item.classList.remove('open'))

        showMenu = false
    }
}

function toggleForm() {
    toggleMenu()
    if (!showSignup) {
        hamburger.classList.add('open')
        userForm.classList.add('open')
        formNav.classList.add('open')
        formItems.forEach(item => item.classList.add('open'))

        showSignup = true
    } else {
        hamburger.classList.remove('open')
        userForm.classList.remove('open')
        formNav.classList.remove('open')
        formItems.forEach(item => item.classList.remove('open'))

        showSignup = false
    }
}

export function listenForPlayerInput() {
    console.log("player input")

    submitData.addEventListener("click", () => {
        pushScript.pushPlayer(this)
    })

}