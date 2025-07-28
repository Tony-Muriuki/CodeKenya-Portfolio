const projectsSection = document.getElementById("projects-section");

const projects = [
  {
    name: "Code Kenya",
    jobDescription: {
      company: "Code Kenya",
      role: "Web Dev",
      year: "2025",
    },
    description: {
      featured:
        "Interning at Code Kenya, as a web developer. I'm learning and building projects with HTML, CSS, JavaScript, and React.",
      detailed:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar dummy text ever since the 1500s...",
    },
    languages: {
      featured: ["html", "Ruby on rails", "css", "javascript"],
      detailed: ["html", "css", "javascript", "github", "ruby", "Bootstrap"],
    },
    thumbnail: {
      featured: "codekenya.png",
      detailed: "codekenya.png",
    },
    liveUrl: "https://www.codekenya.org/about-us",
    sourceCode: "https://github.com/Tony-Muriuki/CodeKenya-Portfolio",
  },
  {
    name: "Usa Prospects Agent",
    jobDescription: {
      company: "USAPP",
      role: "Full Stack Dev",
      year: "2025",
    },
    description: {
      featured:
        "Integrating AI Workflows to automate tasks like college essay review, answer questions on the entire US college application process, and more.",
      detailed:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    languages: {
      featured: ["html", "Ruby on rails", "css", "javascript"],
      detailed: ["html", "css", "javascript", "github", "ruby", "Bootstrap"],
    },
    thumbnail: {
      featured: "usapp.png",
      detailed: "usapp.png",
    },
    liveUrl: "https://www.usaprospectsagent.com/",
    sourceCode: "https://github.com/Tony-Muriuki/CodeKenya-Portfolio",
  },
];

for (let i = 0; i < projects.length; i += 1) {
  const projectContainer = document.createElement("div");
  projectContainer.innerHTML = ` 
    <div class="project-snapshot ${i % 2 !== 0 ? "odd" : ""}">
      <a href="${projects[i].liveUrl}" target="_blank">
        <img src="assets/img/projects/${projects[i].thumbnail.featured}" alt="${
    projects[i].name
  }" />
      </a>
    </div>
    <div class="project-content">
      <h2>${projects[i].name}</h2>
      <ul class="project-details">
        <li class="client-name">${projects[i].jobDescription.company}</li>
        <li class="role">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
          </svg>
          ${projects[i].jobDescription.role}
        </li>
        <li class="yearlb">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
          </svg>
          ${projects[i].jobDescription.year}
        </li>
      </ul>
      <p>${projects[i].description.featured}</p>
      <ul class="technologies-used">
        ${projects[i].languages.featured
          .map((language) => `<li>${language}</li>`)
          .join("")}
      </ul>
      <div class="project-buttons">
        <a href="${
          projects[i].liveUrl
        }" target="_blank" class="btn">See Project</a>
        ${
          projects[i].sourceCode
            ? `<a href="${projects[i].sourceCode}" target="_blank" class="btn">Source Code</a>`
            : ""
        }
      </div>
    </div>`;

  projectContainer.classList.add("project-container", "container");
  projectsSection.appendChild(projectContainer);
}
