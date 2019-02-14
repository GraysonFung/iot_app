import axios from 'axios'
import { Toast } from 'antd-mobile'
import config from '../config'



async function getDeviceAlertList() {
	let res=null
	let result=null
	try{

		res=await axios({
			method: 'get',
			url: '/warning',
			baseURL: config.dataUrl
		});

	} catch (err) {
		console.log('%c [REQUEST-ERR]', 'color: red', err)
    	result = {
    		success: false,
    		message: err.message || err.errMsg,
    	}
	}
	if (!result) {
		result={
			success:true,
			data:{nodes:res.data}
		}
	}

	if (result.success) {
		Toast.success( '获取报警列表成功！',1)
	}

	if (!result.success) {
		Toast.fail('获取报警列表失败: ' + (result.message || '请稍后重试~'))
	}

	return result

}

export default getDeviceAlertList

