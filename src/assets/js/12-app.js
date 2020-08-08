const api = new Api();
const ui = new UI();

class App {
  initEventListeners() {
    // Event listeners
    document
      .querySelector(".portfolio-grid")
      .addEventListener("click", this.showModal);
  }

  displaySkills() {
    // Display Skills
    api.getSkills().then((data) => {
      ui.showSkills(data);
    });
  }

  displayPortfolio() {
    // Display portfolio
    api.getPortfolio().then((data) => {
      ui.showPortfolioCat(data.catPortfolio);
      ui.showPortfolioProjects(data.projectPortfolio);

      setTimeout(() => {
        portfolio.initIsotope();
      }, 1000);
    });
  }

  showModal(e) {
    if (e.target.parentElement.classList.contains("portfolio-item")) {
      const target = e.target.parentElement.dataset.target;
      const index = target.split("-").pop();

      api.getPortfolio().then((data) => {
        ui.showPortfolioModals(data.projectPortfolio[index], index);
      });
    }
  }

  displaySocials() {
    api.getSocials().then((data) => {
      ui.showSocials(data);
    });
  }

  displayCopyrightYear() {
    const cYear = document.getElementById("c-year");
    const date = new Date();
    cYear.innerHTML = date.getFullYear();
  }
}

const app = new App();
app.initEventListeners();
app.displaySkills();
app.displayPortfolio();
app.displaySocials();
app.displayCopyrightYear();
