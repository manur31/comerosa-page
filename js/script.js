import { projects, services } from '../resouces/lib/data.js'

const serviceContainer = document.querySelector('.services-container')
const projectContainer = document.querySelector('.projects-container')

services.forEach(service => {
    const cardService = document.createElement("article")

    cardService.classList.add('service-card')

    cardService.innerHTML = `
        <div class="img-container">
            <img class="services-img" src=${service.img} alt="">
        </div>
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



