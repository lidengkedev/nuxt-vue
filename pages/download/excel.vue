<template>
    <div>
        <down-load-excel btn-text="Excel文件下载" @on-click="download"></down-load-excel>
    </div>
</template>

<script>
import DownLoadExcel from '~/components/DownLoad/Excel/index'
import { DownLoadExcelApi } from '~/api/common'
export default {
    components: {
        DownLoadExcel
    },
    methods: {
        // 文件下载
        download() {
            // axios.get('http://localhost:4000/api/download/file').then(res => {
            //     console.log(res.data)
            // })
            DownLoadExcelApi().then(res => {
                console.log(res)
                const link = document.createElement('a')
                link.href = URL.createObjectURL(new Blob([res.data]))
                link.download = 'Excel模板文件下载.xls'
                link.target = '_blank'
                link.click()
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>