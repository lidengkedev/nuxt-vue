<template></template>

<script>
    export default {
        props: ['error'],
        layout: 'blog', // 你可以为错误页面指定自定义的布局
        methods: {
            checkError() {
                if (this.error.statusCode === 404) {
                    this.$router.push('/error/404')
                } else if (this.error.statusCode === 401) {
                    this.$router.push('/error/401')
                }
            }
        },
        created() {
            this.checkError()
        }
    }
</script>

<style lang="scss" scoped>

</style>