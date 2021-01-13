import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    studentList : [
      {s_name:'엘컴퓨터학원',s_phone:"053-710-7965",s_age:'30'}
    ]
  },
  mutations: {
    NewStudent:(state,payload)=> {
      state.studentList.push(payload)
      console.log("mutations",state.studentList)
    }
  },
  actions: {
    NewStudent({commit}, payload) {
      commit("NewStudent",payload)
      console.log("actions",payload)
    }
  },
  modules: {
  }
})
