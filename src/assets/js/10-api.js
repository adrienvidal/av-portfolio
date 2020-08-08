class Api {
  constructor() {
    this.rootPath = window.location.href;
  }

  async getSkills() {
    const skillsResponse = await fetch(this.rootPath + "public/api/skillsData.json");

    const skills = await skillsResponse.json();

    return skills;
  }

  async getPortfolio() {
    const portfolioResponse = await fetch(
      this.rootPath + "public/api/portfolioData.json"
    );

    const portfolio = await portfolioResponse.json();

    return portfolio;
  }

  async getSocials() {
    const socialsResponse = await fetch(this.rootPath + "public/api/socialData.json");

    const socials = await socialsResponse.json();

    return socials;
  }
}
