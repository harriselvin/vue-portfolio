import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    aboutMe: null,
    projects: null,
    education: null,
    techSkills: null,
    softSkills: null,
    workExp: null,
    testimonials: null,
  },
  mutations: {
    setAboutMe(state, payload) {
      state.aboutMe = payload
    },
    setProjects(state, payload) {
      state.projects = payload
    },
    setEducation(state, payload) {
      state.education = payload
    },
    setTechSkills(state, payload) {
      state.techSkills = payload
    },
    setSoftSkills(state, payload) {
      state.softSkills = payload
    },
    setWorkExp(state, payload) {
      state.workExp = payload
    },
    setTestimonials(state, payload) {
      state.testimonials = payload
    }
  },
  actions: {
    async getItems({commit}) {
      try {
        let {data} = await axios.get('https://harriselvin.github.io/first_api/data/data.json')
        let {aboutMe, projects, education, techSkills, softSkills, workExp, testimonials} = data
  
        commit('setAboutMe', aboutMe)
        commit('setProjects', projects)
        commit('setEducation', education)
        commit('setTechSkills', techSkills)
        commit('setSoftSkills', softSkills)
        commit('setWorkExp', workExp)
        commit('setTestimonials', testimonials)
      } catch (error) {
        console.log("Error fetching data:", error);
        throw error
      }
    }
  },
  modules: {
  },
  getters: {
  }
})
