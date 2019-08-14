<template>
    <div class="app-container">
        <div class="download-warpper">
            <div class="download-item">
                <down-load-excel class="download-target" btn-text="Excel文件下载" @on-click="download"></down-load-excel>
            </div>
            <div class="download-item">
                <down-load-excel class="download-target" btn-text="PDF文件下载" @on-click="downloadPdf"></down-load-excel>
            </div>
        </div>
    </div>
</template>

<script>
import DownLoadExcel from '~/components/DownLoad/Excel/index'
import { DownLoadExcelApi, DownLoadPdfApi } from '~/api'
import { downloadFile } from '~/utils/auth'
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
                downloadFile(res.data, 'Excel模板文件下载', '.xls')
            })
        },
        // 文件下载
        downloadPdf() {
            DownLoadPdfApi().then(res => {
                console.log(res)
                downloadFile(res.data, 'pdf文件下载', '.pdf')
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.download-warpper {
    display: flex;
    align-items: center;
    .download-item {
        display: flex;
        align-items: center;
        width: 10%;
        height: 150px;
        margin-right: 20px;
        border: 1px solid #eaeaea;
        border-radius: 4px;
        &:last-child {
            margin-right: 0;
        }
        &:hover {
            box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
        }
        .download-target {
            margin: auto;
        }
    }
}
</style>