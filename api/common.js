import axios from '~/plugins/axios'

// Excel文件下载
export function DownLoadExcelApi(data) {
    return axios({
        method: 'get',
        url: '/api/download/file',
        responseType: 'arraybuffer',
        params: data
    })
}
