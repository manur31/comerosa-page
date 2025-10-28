import { projects } from '../resouces/lib/data.js'

const projectContainer = document.querySelector('.project-container')
const moreProjectContainer = document.querySelector('.moreProject-container')

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const project = projects.find(obj => obj.id == id);

if (project) {
      projectContainer.innerHTML = `
        <img src="${project.images[0]}" alt="${project.name}">
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
