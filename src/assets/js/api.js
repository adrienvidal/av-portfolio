class Api {
  constructor() {
    this.rootPath = window.location.origin
  }

  async getSkills() {
    const res = await fetch(this.rootPath + '/src/api/skillsData.json')
    return await res.json()
  }

  async getPortfolio() {
    const res = await fetch(this.rootPath + '/src/api/portfolioData.json')
    return await res.json()
  }

  async getSideProjects() {
    const res = await fetch(this.rootPath + '/src/api/sideProjectsData.json')
    return await res.json()
  }

  async getSocials() {
    const res = await fetch(this.rootPath + '/src/api/socialData.json')
    return await res.json()
  }
}

const api = new Api()
export default api
