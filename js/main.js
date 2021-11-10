"use strict"

import './logohandler'

import * as pushScript from './pushplayer.js'
// import * as imagePushScript from '../js/pushimagefirst'
// import * as getScript from './getplayers.js'
// import * as putScript from './putdata.js'

const menuBtn = document.querySelector('.menu-btn')
const hamburger = document.querySelector('.menu-btn__burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.menu-nav__item')

const formNavBtn = document.querySelector('.signup-btn')
const userForm = document.querySelector('#signup')
const formNav = document.querySelector('.form-nav')
const formItems = document.querySelectorAll('.form-nav__item')
const submitData = document.querySelector(".form-button")

const showGamers = document.querySelector(".submit")

let showMenu = false
let showSignup = false

menuBtn.addEventListener('click', () => {

    toggleMenu()
})
formNavBtn.addEventListener('click', toggleForm)

$(function() {
    if ($('body').is('#home')) {
        listenForPlayerInput()
    }
});




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
    if (showSignup) {

        hamburger.classList.remove('open')
        userForm.classList.remove('open')
        formNav.classList.remove('open')
        formItems.forEach(item => item.classList.remove('open'))

        showSignup = false
    }
}

function toggleForm() {
    if (!showSignup) {
        hamburger.classList.add('open')
        userForm.classList.add('open')
        formNav.classList.add('open')
        formItems.forEach(item => item.classList.add('open'))
        showSignup = true
        nav.classList.remove('open')
        menuNav.classList.remove('open')
        navItems.forEach(item => item.classList.remove('open'))
    } else {

        hamburger.classList.remove('open')
        userForm.classList.remove('open')
        formNav.classList.remove('open')
        formItems.forEach(item => item.classList.remove('open'))

        showSignup = false
    }
}

function addActiveClass(element) {
    console.log("Add Active for ", element)
    element.classList.add('active');
}

function removeActiveClass(element) {
    console.log("Remove Active for ", element)
    element.classList.remove('active');
}

function addFinClass() {
    console.log("Add finished to ", this)
    this.classList.add('finished');
}

function listenForPlayerInput() {
    console.log("player input")

    submitData.addEventListener("click", (e) => {
        pushScript.collectUserData()
        addActiveClass(e.currentTarget)
        e.currentTarget.addEventListener('transitionend', removeActiveClass);
        e.currentTarget.addEventListener('transitionend', addFinClass);
        e.currentTarget.addEventListener('transitionend', loadUsersPage);
    })
}

function loadUsersPage() {
    window.location = "user.html"
}

// displayListFromGet()

// function displayListFromGet() {
//     getScript.init()
// }