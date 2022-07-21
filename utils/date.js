// 格式化时间
function formatDate(time, format = 'YYYY-MM-DD hh:mm:ss') {
  const date = new Date(time)

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const min = date.getMinutes()
  const sec = date.getSeconds()

  const add0 = (str) => str < 10 ? '0' + str : str

  return format
    .replace(/Y+Y/g, year)
    .replace(/MM/g, add0(month))
    .replace(/DD/g, add0(day))
    .replace(/hh/g, add0(hour))
    .replace(/mm/g, add0(min))
    .replace(/ss/g, add0(sec))
}