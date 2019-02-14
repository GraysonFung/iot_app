

/**
 * 获取对象中深层次节点数据， 避免 a && a.b && a.b.c 这样的代码
 *
 * 如果按照路径能找到，则返回期望值
 * 如果遇到任意异常， 便返回 undefined
 *
 * xioozq 2018.2.6
 *
 * @param obj 待查找的对象 e.g. { a: { b: [{name: 'hh'}] } }
 * @param path 查找路径 'a.b.0.name'
 *
 */

export default function getDeepValue(obj, path) {

  // 安全验证
  if (typeof obj !== 'object' || obj === null || !path || typeof path !== 'string') {
    return undefined
  }

  const paths = path.split('.')
  const length = paths.length

  // 递归结束, 返回目标结果
  if (length <= 1) {
    return obj[paths[0]]
  }

  // 路径未走完，继续递归
  if (paths[0] in obj) {
    return getDeepValue(obj[paths[0]], paths.slice(1, length).join('.'))
  }

}
