function download(content, filename) {
  var link = document.createElement('a')
  link.download = filename
  link.style.display = 'none'
  var blob = new Blob([content], {type : 'application/json'})
  link.href = URL.createObjectURL(blob)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
