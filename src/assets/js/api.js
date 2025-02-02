import skillsData from '../../conf/skillsData.json'
import sideProjectsData from '../../conf/sideProjectsData.json'
import portfolioData from '../../conf/portfolioData.json'
import socialData from '../../conf/socialData.json'

class Api {
  constructor() {}

  async getSkills() {
    return await skillsData
  }

  async getPortfolio() {
    return await portfolioData
  }

  async getSideProjects() {
    return await sideProjectsData
  }

  async getSocials() {
    return await socialData
  }
}

const api = new Api()
export default api
