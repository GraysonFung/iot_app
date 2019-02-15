import axios from 'axios'
import { Toast } from 'antd-mobile'
import getDeepValue from './getDeepValue'
import config from '../config'

const NET_ERROR_TIP = '网络请求错误'

let _url = config.baseUrl
let _header = {} // 全局header

// 请求结果验证器（默认）， 判断服务端返回结果， 是否成功受理
function _validate(res) {
  const errCode = getDeepValue(res, 'data.errno')
  const errMsg = getDeepValue(res, 'data.errmsg')
  const data = getDeepValue(res, 'data.data')

  if (errCode === 0) {
    return {
      success: true,
      message: 'ok',
      data,
    }
  } else {
    return {
      success: false,
      message: errMsg || NET_ERROR_TIP,
      data,
    }
  }
}

const setHeader = function (header) {
  _header = header
}

const setValidate = function (validate) {
  request.validate = validate
}


async function request(option) {

  const {
    url = '',
    path = '',
    data,
    header = {},
    method = 'GET',
    label = '请求',
    successTip = false,
    errorTip = true,
    validate,
    convertReq,
    convertRes,
  } = option

  const reqData = typeof convertReq === 'function'
    ? convertReq(data)
    : data

  let res = null
  let result = null

  const token = window.localStorage.getItem('dpiot_token')

  if (token) {
    header['Authorization'] = 'Bearer ' + token
  }

  try {
    res = await axios({
      url: url === '' ? (_url + path) : url,
      data: reqData,
      query: method.toUpperCase() === 'GET' ? reqData : null,
      method,
      headers: {
        ..._header,
        ...header,
      },
    })
  } catch (err) {

    console.log('%c [REQUEST-ERR]', 'color: red', err)
    // 请求失败
    result = {
      success: false,
      message: err.message || err.errMsg || NET_ERROR_TIP,
    }
  }

  if (!result) {

    // 刷新 token
    if (res.headers['refresh-token'] && res.headers['token-expire']) {
      window.localStorage.setItem('dpiot_token', res.header['refresh-token']);
      window.localStorage.setItem('dpiot_expire', res.header['token-expire']);
    }
   
    // 请求结果验证
    const validateRes = typeof validate === 'function' ? validate(res) : request.validate(res)

    if (getDeepValue(validateRes, 'success') !== true) {
      result = {
        success: false,
        message: getDeepValue(validateRes, 'message') || NET_ERROR_TIP,
      }
    } else {
      const resData = typeof convertRes === 'function'
        ? convertRes(validateRes.data)
        : validateRes.data

      result = {
        success: true,
        data: resData,
      }
    }
  }

  if (result.success && successTip) {
    Toast.success(label + '成功！')
  }

  if (!result.success && errorTip) {
    Toast.fail(label + '失败: ' + (result.message || '请稍后重试~'))
  }

  return result
}

request.setHeader = setHeader
request.validate = _validate
request.setValidate = setValidate

export default request
