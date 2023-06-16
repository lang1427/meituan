export const state = () => ({
    token: "",
    userInfo: {}
})

export const mutations = {
    setToken(state, val) {
        state.token = val
    },
    setUserInfo(state, val) {
        state.userInfo = { ...state.userInfo, ...val }
    },
    delUserInfo(state) {
        state.userInfo = {}
    }
}

export const actions = {
    setToken({ commit }, token) {
        commit('setToken', token)
    },
    setUserInfo({ commit }, userInfo) {
        commit('setUserInfo', userInfo)
    },
    delUserInfo({ commit }) {
        commit('delUserInfo')
    }
}
