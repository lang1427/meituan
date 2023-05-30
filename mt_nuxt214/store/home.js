export const state = () => ({
    category: [],
    recomend: []
})

export const mutations = {
    setCategory(state, val) {
        state.category = val
    },
    setRecomend(state, val) {
        state.recomend = val
    }
}

export const actions = {
    setCategory({ commit }, category) {
        commit('setCategory', category)
    },
    setRecomend({ commit }, recomend) {
        commit('setRecomend', recomend)
    }
}
