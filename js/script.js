import { projects, services } from '../resouces/lib/data.js'

const serviceContainer = document.querySelector('.services-container')
const projectContainer = document.querySelector('.projects-container')
const $header = document.querySelector('.header')   
const navMenu = document.querySelector('.nav-menu')
const closeMenuBtn = document.querySelector('.close-menu-btn')
const menuBtn = document.querySelector('.menu-btn')
const navItem = document.querySelectorAll('.nav-item')

services.forEach(service => {
    const cardService = document.createElement("article")

    cardService.classList.add('service-card')

    cardService.innerHTML = `
        <img class="services-img" src=${service.img} alt="">
        <h3 class="service-name">${service.name}</h3>
    `

    serviceContainer.appendChild(cardService)
})

projects.forEach(project => {
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

    projectContainer.appendChild(cardProject)
})

let lastScrollY = 0;

window.addEventListener('scroll', () => {
    let currentScrollY = window.scrollY

    if (currentScrollY > 1) {
        if (currentScrollY > lastScrollY) {
            $header.classList.add('stuck')
            $header.classList.remove('stuck2')
        } else {
            $header.classList.add('stuck2')
            $header.classList.remove('stuck')
        }

        lastScrollY = currentScrollY
    } else {
        $header.classList.remove('stuck2')
    }
})

menuBtn.addEventListener('click', () => {
    navMenu.style.transform = 'translateX(0%)'
    closeMenuBtn.style.display = 'block'
    menuBtn.style.display = 'none'
})

closeMenuBtn.addEventListener('click', () => {
    navMenu.style.transform = 'translateX(105%)'
    closeMenuBtn.style.display = 'none'
    menuBtn.style.display = 'block' 
})

navItem.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth < 868) {
            navMenu.style.transform = 'translateX(105%)'
            closeMenuBtn.style.display = 'none'
            menuBtn.style.display = 'block'
        }
    })
})