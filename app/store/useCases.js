export const state = () => ({
  items: []
})

export const mutations = {
  setUseCases(state, useCases) {
    state.items = useCases
  },
  addUseCase(state, text) {
    state.items.push({
      text,
      done: false
    })
  },
  removeUseCase(state, { useCase }) {
    state.items.splice(state.items.indexOf(useCase), 1)
  }
}

export const actions = {
  async all({ commit }) {
    await this.$axios
      .get("/api/use-cases")
      .then((res) => {
        if (res.status === 200) {
          commit('setUseCases', res.data)
        }
      })
      .catch(console.error)
  }
}
