import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    aboutMe: null,
    projects: null,
    education: null,
    skills: null,
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
    setSkills(state, payload) {
      state.skills = payload
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
      let {data} = await axios.get('https://harriselvin.github.io/first_api/data/data.json')
      let {aboutMe, projects, education, skills, workExp, testimonials} = data

      commit('setAboutMe', aboutMe)
      commit('setProjects', projects)
      commit('setEducation', education)
      commit('setSkills', skills)
      commit('setWorkExp', workExp)
      commit('setTestimonials', testimonials)
    }
  },
  modules: {
  },
  getters: {
  }
})
