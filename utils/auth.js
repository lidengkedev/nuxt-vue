
export function downloadFile(data, filename, ext) {
    // 兼容IE浏览器 文件下载
    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(
            new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        )
    } else {
        // Chrome 浏览器 文件下载
        const link = document.createElement('a')
        link.href = URL.createObjectURL(
            new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        )
        link.download = ext ? `${filename}${ext}` : filename
        link.target = '_blank'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
}