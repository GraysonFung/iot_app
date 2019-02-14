import getDeepValue from './getDeepValue'
import request from './request'
import config from '../config'

// graphql请求验证器
function _validate(res) {
  const data = getDeepValue(res, 'data.data')
  const errors = getDeepValue(res, 'data.errors')

  if (errors) {
    // GraphQL错误
    console.log('%c[GraphQL-ERROR]', 'color: red', errors)
    return {
      success: false,
      message: errors[0].message,
    }
  } else {
    // 正常
    return {
      success: true,
      data,
    }
  }

}

async function graphql(query, option = {}) {
  const { header, variables = {}, successTip, errorTip, label, convertRes } = option

  return request({
    path: config.graphqlPath,
    method: 'POST',
    header,
    data: {
      query,
      variables,
    },
    validate: _validate,
    label,
    successTip,
    errorTip,
    convertRes,
  })

}

export default graphql
