<template>
    <div>
        <button class="btn" @click="download">{{ btn_text }}</button>
    </div>
</template>

<script>
export default {
    props: {
        btnText: {
            type: String,
            default: '文件下载'
        }
    },
    asyncData (context) {
        return {
            name: 'Hello World !'
        }
    },
    computed: {
        btn_text() {
            return this.btnText
        }
    },
    methods: {
        // 文件下载
        download() {
            this.$emit('on-click')
        }
    }
}
</script>

<style lang="scss" scoped>
.btn {
    padding: 0 7px;
    height: 32px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    font-size: 14px;
    background-color: transparent;
    cursor: pointer;
    &:hover {
        color: #409eff;
        border-color: #409eff;
    }
}
</style>