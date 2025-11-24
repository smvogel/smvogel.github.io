// scripts/main.js

document.getElementById("year").textContent = new Date().getFullYear();

const sections = [
    "sections/about.html",
    "sections/skills.html",
    "sections/experience.html",
    "sections/education.html",
    "sections/contact.html"
];

async function loadSections() {
    const container = document.getElementById("content");

    for (const file of sections) {
        const response = await fetch(file);
        const html = await response.text();
        const sectionWrapper = document.createElement("div");
        sectionWrapper.innerHTML = html;
        container.appendChild(sectionWrapper);
    }
}

loadSections();