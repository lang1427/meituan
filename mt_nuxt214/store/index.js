export const actions = {
    async nuxtServerInit({ commit }, { req, app }) {
        // current_city
        const { status, data: { city } } = await app.$axios.get('/geo/current_city')
        commit('geo/setPosition', status === 200 ? { city } : { city: "" })

        // token
        let token = `mt=${app.$cookies.get('mt')}; mt.sig=${app.$cookies.get('mt.sig')}`
        if (token != "") {
            let userRes = await app.$axios.get('/user/getUser', {
                headers: {
                    "Cookie": token
                }
            })
            if (userRes.data.code === 1) {
                commit("user/setUserInfo", userRes.data.data)
            }
        }
    }
}
