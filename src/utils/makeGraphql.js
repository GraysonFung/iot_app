import  lowerCamelCaseToHyphen from './lowerCamelCaseToHyphen'

// 输入参数处理
export function createInputs(input = {}) {
  let res = ''
  Object.keys(input).forEach((key) => {
    // 过滤 undefined 情况
    if (!input[key]) {
      return
    }
    res += `
    ${key}:  ${JSON.stringify(input[key])},`
  })
  return res
}

// // 输出参数处理
// export function createOutputs(output = []) {
//   let res = ''
//   output instanceof Array && output.forEach((key) => {
//     switch (typeof key) {
//       case 'string': {
//         res += `
//         ${key}`
//         break
//       }
//       case 'object': {
//         res += `
//         ${key.field} {
//           ${key.children}
//         }
//         `
//         break
//       }
//       default: {
//         break
//       }
//     }
//   })
//   return res
// }

// // 搜索处理
// export function createFilterSearch(field, value) {
//   return field && value
//     ? `
//       ${field}: {
//         includesInsensitive: "${value}"
//       }
//     `
//     : ''
// }

// // 筛选参数处理
// export function createFilterParams(filter = {}) {
//   let res = ''
//   Object.keys(filter).forEach((key) => {
//     switch (typeof filter[key]) {
//       case 'number':
//       case 'string': {
//         res += `
//         ${key}: {
//           equalTo: ${JSON.stringify(filter[key])},
//         },
//         `
//         break
//       }
//       case 'object': {
//         if (filter[key] === null) {
//           return
//         }
//         res += `
//         ${key}: {`
//         Object.keys(filter[key]).forEach((subKey) => {
//           res += `${subKey}: ${JSON.stringify(filter[key][subKey])},
//           `
//         })
//         res += `
//         }`
//       }
//     }

//   })
//   return res
// }

// 分页参数处理
export function createPageParams(pagination) {
  return `
    first: ${pagination.pageSize}, 
    offset: ${(pagination.current - 1) * pagination.pageSize},
  `
}

// 排序参数处理
export function createSortParams(sort) {
  const { type, field } = sort
  if (!type || !field) {
    return ''
  }
  return `orderBy: ${lowerCamelCaseToHyphen(field).toUpperCase()}_${type === 'asc' ? 'ASC' : 'DESC'},`
}

// // 生成列表查询ql
// export function createListQuery(options = {}) {
//   const {
//     pagination,
//     search,
//     filter,
//     sorter,
//     searchField,
//     resFields = ['id'],
//     queryName,
//   } = options
//   return `
//   query {
//     ${queryName} (
//       ${createPageParams(pagination)}
//       ${createSorterParams(sorter)}
//       filter: {
//         ${createFilterSearch(searchField, search)}
//         ${createFilterParams(filter)}
//       }
//     ) {
//       total: totalCount,
//       list: nodes {
//         ${createOutputs(resFields)}
//       }
//     }
//   }
//   `
// }

// // 列表查询方法
// export function queryList(data) {
//   const { filter, pagination, searchField, resFields, queryName, ...extraProps } = data
//   const { search, ...extraFilter } = filter

//   return graphql(createListQuery({
//     pagination,
//     filter: extraFilter,
//     search,
//     searchField,
//     resFields,
//     queryName,
//     ...extraProps,
//   }), {
//       convertRes(res) {
//         return res[queryName]
//       },
//       ...extraProps,
//     })
// }

// export function convertNull(src = {}) {
//   let tar = {}
//   Object.keys(src).forEach((key) => {
//     if (src[key] === null) {
//       tar[key] = undefined
//     } else {
//       tar[key] = src[key]
//     }
//   })
//   return tar
// }
