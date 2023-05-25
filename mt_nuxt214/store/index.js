export const actions = {
    async nuxtServerInit({ commit }, { req, app }) {
        const { status, data: { city } } = await app.$axios.get('/geo/current_city')
        commit('geo/setPosition', status === 200 ? { city } : { city: "" })
    }
}
