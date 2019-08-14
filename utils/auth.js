
export function downloadFile(data, filename, ext) {
    const link = document.createElement('a')
    link.href = URL.createObjectURL(new Blob([data]))
    link.download = filename + ext
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}