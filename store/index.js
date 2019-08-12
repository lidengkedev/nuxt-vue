import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

new Vuex.Store({
    state: () => ({
      counter: 0,
      token: ''
    }),
    getters,
    mutations: {
      increment (state) {
        state.counter++
      },
      REMOVE_TOKEN: (state) => {
          state.token = ''
          window.localStorage.removeItem('token')
      }
    },
    actions: {
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                commit('REMOVE_TOKEN')
                resolve()
            })
        }
    },
    modules: {
        user,
        todos: {
            namespaced: true,
            state: () => ({
                list: []
            }),
            mutations: {
                add (state, { text }) {
                    state.list.push({
                        text,
                        done: false
                    })
                },
                remove (state, { todo }) {
                    state.list.splice(state.list.indexOf(todo), 1)
                },
                toggle (state, { todo }) {
                    todo.done = !todo.done
                }
            }
        }
    }
})