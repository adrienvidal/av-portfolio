const api = new Api();
const ui = new UI();

class App {
  initEventListeners() {
    // Event listeners
    document.querySelector('#portfolio-area .portfolio-grid').addEventListener('click', (e) => {
      this.showModal(e, 'portfolio');
    });
    document
      .querySelector('#side-projects-area .portfolio-grid')
      .addEventListener('click', (e) => {
        this.showModal(e, 'side-projects');
      });
  }

  displaySkills() {
    // Display Skills
    api.getSkills().then((data) => {
      ui.showSkills(data);
    });
  }

  displayGallery() {
    // Display portfolio
    const portfolioContainer = document.getElementById('portfolio-area');
    api.getPortfolio().then((data) => {
      ui.showGalleryCat(data.cats, portfolioContainer);
      ui.showGalleryProjects(data.projects, portfolioContainer);

      setTimeout(() => {
        portfolio.initIsotope('#portfolio-area');
      }, 1000);
    });

    const sideProjectsContainer = document.getElementById('side-projects-area');
    api.getSideProjects().then((data) => {
      ui.showGalleryCat(data.cats, sideProjectsContainer);
      ui.showGalleryProjects(data.projects, sideProjectsContainer);

      setTimeout(() => {
        portfolio.initIsotope('#side-projects-area');
      }, 1000);
    });
  }

  showModal(e, data) {
    if (e.target.parentElement.classList.contains('portfolio-item')) {
      const target = e.target.parentElement.dataset.target;
      const index = target.split('-').pop();

      if (data === 'portfolio') {
        api.getPortfolio().then((data) => {
          ui.showGalleryModals(data.projects[index], index);
        });
      }else if(data === 'side-projects'){
        api.getSideProjects().then((data) => {
          ui.showGalleryModals(data.projects[index], index);
        });
      }
    }
  }

  displaySocials() {
    api.getSocials().then((data) => {
      ui.showSocials(data);
    });
  }

  displayCopyrightYear() {
    const cYear = document.getElementById('c-year');
    const date = new Date();
    cYear.innerHTML = date.getFullYear();
  }
}

const app = new App();
app.initEventListeners();
app.displaySkills();
app.displayGallery();
app.displaySocials();
app.displayCopyrightYear();
