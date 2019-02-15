import axios from 'axios'
import { Toast } from 'antd-mobile'
import config from '../config'



async function getDeviceAlert(tab,label,index) {
	let res=null
	let result=null
	try{

		res=await axios({
			method: 'get',
			url: `/warning/${index}`,
			baseURL: config.dataUrl,
			params: {
				tab
			}
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
			data:res.data
		}
	}

	if (result.success) {
		Toast.success(label + '成功！',1)
	}

	if (!result.success) {
		Toast.error(label + '失败: ' + (result.message || '请稍后重试~'))
	}

	return result

}

export default getDeviceAlert

