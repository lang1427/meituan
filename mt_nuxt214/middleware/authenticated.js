export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.user.userInfo.hasOwnProperty('id')) {
        return redirect('/user/login')
    }
}