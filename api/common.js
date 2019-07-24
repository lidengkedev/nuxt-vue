import axios from '~/plugins/axios'

// Excel文件下载
export function DownLoadExcelApi(data) {
    return axios({
        method: 'get',
        url: '/api/download/file',
        headers: {
            'Accept': 'application/x-xls',
            // 'Content-Type': 'application/octet-stream'
            'Content-Type': 'application/x-xls'
        },
        params: data
    })
}
