// 驼峰转为连词符
export default function hyphen(field = '', symbol = '_') {
  if (!field) {
    return ''
  }
  let res = field[0]
  // 从第二个开始遍历
  for (let i = 1; i < field.length; i++) {
    const code = field.charCodeAt(i)
    if (code >= 65 && code <= 90) {
      res += symbol
    }
    res += field[i]
  }
  return res.toLowerCase()
}
  