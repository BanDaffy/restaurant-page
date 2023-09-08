import { pageLoad } from "./initial";
import { menu } from "./menu";
import { about } from "./about";



pageLoad()
initLinks()

function initLinks() {
    let homeLink = document.querySelector(".home")
    homeLink.addEventListener("click", function() {toHome()})
    
    let menuLink = document.querySelector(".menu")
    menuLink.addEventListener("click", function() {toMenu()})
    
    let aboutLink = document.querySelector(".about")
    aboutLink.addEventListener("click", function() {toAbout()})
}

function wipePage() {
    let cont = document.getElementById("content")
    while (cont.firstChild){
        cont.removeChild(cont.lastChild)
    }
}

function toHome() {
    wipePage()
    pageLoad()
    initLinks()
}

function toMenu() {
    wipePage()
    menu()
    initLinks()
}

function toAbout() {
    wipePage()
    about()
    initLinks()
}