export const state = () => ({
    userInfo: {}
})

export const mutations = {
    setUserInfo(state, val) {
        state.userInfo = { ...state.userInfo, ...val }
    },
    delUserInfo(state) {
        state.userInfo = {}
    }
}

export const actions = {
    setUserInfo({ commit }, userInfo) {
        commit('setUserInfo', userInfo)
    },
    delUserInfo({ commit }) {
        commit('delUserInfo')
    }
}
