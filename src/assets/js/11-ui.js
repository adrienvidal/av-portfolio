class UI {
  constructor() {
    this.rootPath = window.location.href;
    this.skillsContainer = document.getElementById("skills-list");
    this.portfolioModals = document.getElementById("portfolio-modals");
    this.sideProjetsContainer = document.getElementById("side-projects-area");
    this.sideProjetsModals = document.getElementById("side-projects-modals");
    this.socialMedias = document.getElementById("social-medias");
  }

  showSkills(skills) {
    let output = "";

    skills.forEach((skill) => {
      if (skill.isShown) {
        output += `
                  <div class="skill-item">
                      <div class="skill-content">${skill.title}</div>
                  </div>
              `;
      }
    });

    this.skillsContainer.innerHTML = output;
  }

  showGalleryCat(cats, container) {
    const nav = container.querySelector(".filter-control");
    let categories = `
      <li class="list-inline-item tab-active" data-filter="*">
        All
      </li>
    `;
    cats.forEach((cat) => {
      categories += `
          <li class="list-inline-item" data-filter=".${cat}">${cat}</li>
        `;
    });
    nav.innerHTML = categories;
  }

  showGalleryProjects(projects, container) {
    let output = "";
    projects.forEach((project, index) => {
      let cats = "";
      project.cats.forEach((cat) => {
        cats += " " + cat;
      });

      // Display Tags
      let tags = "";
      project.tags.forEach((tag) => {
        tags += `
            <span>${tag}</span>
          `;
      });

      output += `
        <div class="single-item col-12 col-lg-4${cats}">
          <a class="portfolio-item" data-target="item-${index}">
            <div class="portfolio-wrapper">
              <img class="img-fluid" alt="Item" src="${this.rootPath+project.gallery[0]}" />
              <div class="item-content">
                <h6 class="content-title">${project.title}</h6>
                <div class="tags">${tags}</div>
                <span class="content-more">More Info</span>
              </div>
            </div>
          </a>
        </div>
        `;
    });

    container.querySelector(".portfolio-grid").innerHTML = output;
  }

  showGalleryModals(project, index) {
    const imgsLength = project.gallery.length;
    // Display controls
    let controls = "";
    if (imgsLength > 1) {
      controls = `
        <a
          class="carousel-control-prev"
          href="#project-carousel"
          role="button"
          data-slide="prev"
        >
          <span
            class="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#project-carousel"
          role="button"
          data-slide="next"
        >
          <span
            class="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Next</span>
        </a>
      `;
    }

    // Display indicators
    let indicatorsWrapper = "";
    if (imgsLength > 1) {
      let indicators = "";
      for (let index = 0; index < imgsLength; index++) {
        const isActive = index === 0 ? "active" : "";
        indicators += `
        <li
          data-target="#project-carousel"
          data-slide-to="${index}"
          class="${isActive}"
        ></li>
        `;
      }

      indicatorsWrapper = `
      <ol class="carousel-indicators">
        ${indicators}
      </ol>
      `;
    }

    // Display Images galleries
    let images = "";
    project.gallery.forEach((img, index) => {
      const isActive = index === 0 ? " active" : "";
      images += `
        <div class="carousel-item ${isActive}">
          <div class="carousel-item-inner">
            <img
              src="${this.rootPath+img}"
              alt="${this.rootPath+img}"
            />
          </div>
        </div>
        `;
    });

    // Display Tags
    let tags = "";
    project.tags.forEach((tag) => {
      tags += `
          <span>${tag}</span>
        `;
    });

    const output = `
    <div
      class="modal fade"
      id="item-${index}"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="project-gallery">
            <div id="project-carousel" class="carousel slide">
              ${indicatorsWrapper}
              <div class="carousel-inner">
                ${images}
              </div>
              ${controls}
            </div>
          </div>
          <div class="project-content">
            <h2>${project.title}</h2>
            <span class="highlight">${project.highlight}</span>
            <div class="tags">${tags}</div>
            <span>${project.desc}</span>
            ${project.desc2 ? `<span>${project.desc2}</span>` : ``}
            <div class="project-action">
              ${
                project.url
                  ? `
              <a
                class="btn show-site button-main button-scheme"
                href="${project.url}"
                target="_blank"
                role="button"
                >View Site</a
              >
              `
                  : ``
              }
              
              ${
                project.repo
                  ? `<a
                class="btn show-repo button-main button-scheme2"
                href="${project.repo}"
                target="_blank"
                role="button"
                ><i class="icon service-icon ion-logo-github"></i><span>Github</span></a
              >`
                  : ``
              }
              
              <button type="button" class="btn btn-secondary button-close" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

    this.portfolioModals.innerHTML = output;

    $(`#item-${index}`).modal("show");
  }

  showSocials(socials) {
    let output = "";
    socials.forEach((social) => {
      output += `
      <a class="${social.name}" href="${social.link}" target="_blank">
        <i class="icon ${social.icon}"></i>
      </a>
      `;
    });

    this.socialMedias.innerHTML = output;
  }
}
