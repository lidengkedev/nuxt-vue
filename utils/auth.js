
export function downloadFile(data, filename, ext) {
    // 兼容IE浏览器 文件下载
    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(
            new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        )
    } else {
        // Chrome 浏览器 文件下载
        const element = document.createElement('a')
        const event = document.createEvent('MouseEvents')
        const url = window.URL.createObjectURL(
            new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        )
        element.download = ext ? `${filename}${ext}` : filename
        document.body.appendChild(element)
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        element.dispatchEvent(event)
        window.URL.revokeObjectURL(url)
        document.body.removeChild(element)
    }
}