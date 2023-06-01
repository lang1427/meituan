export const actions = {
    async nuxtServerInit({ commit }, { req, app }) {
        // current_city
        const { status, data: { city } } = await app.$axios.get('/geo/current_city')
        commit('geo/setPosition', status === 200 ? { city } : { city: "" })

        // token
        let token = app.$cookies.get('token') ? app.$cookies.get('token') : ''
        commit('user/setToken', token)
        if (token != "") {
            let userRes = await app.$axios.get('/user/getUser', {
                headers: {
                    "authorization": token
                }
            })
            
            if (userRes.data.code === 1) {
                commit("user/setUserInfo", userRes.data.data)
            }
        }
    }
}
