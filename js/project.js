import { projects } from '../resouces/lib/data.js'

const projectContainer = document.querySelector('.project-container')
const moreProjectContainer = document.querySelector('.moreProject-container')
const navMenu = document.querySelector('.nav-menu')
const closeMenuBtn = document.querySelector('.close-menu-btn')
const menuBtn = document.querySelector('.menu-btn')
const navItem = document.querySelectorAll('.nav-item')

const slider = document.querySelector('.slider')


const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const project = projects.find(obj => obj.id == id);

if (project) {
    const projectImages = project.images.map(img => `<div class="slider-item"><img src="${img}" alt="${project.name}"></div>`).join("")

    slider.innerHTML = `
        <div class="slider-list">
            ${projectImages}
        </div>
        <div class="buttons">
        <button id="prev"><</button>
        <button id="next">></button>
        </div>
    `

    projectContainer.innerHTML = `
        <div class="info-detail-projet">
            <h2>${project.name}</h2>
            <p>${project.shortDescription}</p>
            <p>${project.description}</p>
        </div>
      `;
} else {
      detalle.innerHTML = "<p>No se encontró información.</p>";
}

const filteredProject = projects.filter(project => project.id !== id).slice(0, 3)


filteredProject.forEach(project => {
    const cardProject = document.createElement("article")

    cardProject.classList.add('project-card')

    cardProject.innerHTML = `
        <div class="project-img-container">
            <img src=${project.images[0]} alt="">
        </div>
        <section class="info-project">
            <h3 class="project-card-title">${project.name}</h3>
            <p class="project-card-description">${project.shortDescription}</p>
            <a href="./projects.html?id=${project.id}" class="project-btn">Ver proyecto</a>
        </section>
    `

    moreProjectContainer.appendChild(cardProject)
})

const list = document.querySelector('.slider-list')
const items = document.querySelectorAll('.slider-item')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')

let active = 0
let lengthItems = items.length - 1

let refreshSlider = setInterval(() => {next.click()}, 5000)

const reloadSlider = () => {
    let checkLeft = items[active].offsetLeft
    list.style.left = `${-checkLeft}px`;
    let refreshSlider = setInterval(() => {next.click()}, 5000)
    clearInterval(refreshSlider)
}

next.addEventListener('click', () => {
    if (active + 1 > lengthItems) {
        active = 0
    } else {
        active = active + 1
    }
    reloadSlider()
})

prev.addEventListener('click', () => {
    if (active - 1 < 0) {
        active = lengthItems
    } else {
        active = active - 1
    }
    reloadSlider()
})


function closeMenu () {
    navMenu.style.transform = 'translateX(105%)'
    closeMenuBtn.style.display = 'none'
    menuBtn.style.display = 'block'
}

menuBtn.addEventListener('click', () => {
    navMenu.style.transform = 'translateX(0%)'
    closeMenuBtn.style.display = 'block'
    menuBtn.style.display = 'none'
})

closeMenuBtn.addEventListener('click', closeMenu)

navItem.forEach(item => {
    item.addEventListener('click', closeMenu)
})

