<template></template>
<script>
export default {
    // 使用中间件实现退出登录操作；因为退出登录没有dom操作，由<next-link to=/user/exit />进行的
    middleware: async (ctx) => {
        let { status, data } = await ctx.$axios.post('/user/signout');
        if (status === 200 && data && data.code == 0) {
            ctx.store.dispatch('user/delUserInfo')
            ctx.redirect("/")
        }
    },
};
</script>