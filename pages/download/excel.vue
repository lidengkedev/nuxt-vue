<template>
    <div class="app-container">
        <down-load-excel btn-text="Excel文件下载" @on-click="download"></down-load-excel>
    </div>
</template>

<script>
import DownLoadExcel from '~/components/DownLoad/Excel/index'
import { DownLoadExcelApi } from '~/api/common'
export default {
    head: {
        title: 'Excel文件下载',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', name: 'description', content: 'Excel文件下载' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    components: {
        DownLoadExcel
    },
    methods: {
        // 文件下载
        download() {
            DownLoadExcelApi().then(res => {
                console.log(res)
                const link = document.createElement('a')
                link.href = URL.createObjectURL(new Blob([res.data]))
                link.download = 'Excel模板文件下载.xls'
                link.target = '_blank'
                document.body.appendChild(link)
                link.click()
                document.removeChild(link)
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>