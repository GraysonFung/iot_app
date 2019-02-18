import {graphql,makeGraphql} from '../utils'
const { createPageParams, createSortParams, createInputs } =makeGraphql

export function getDeviceList(data) {
	const {pagination, sort ,filter} =data
	return graphql(`
			query {
				allIotDevices(
					${createPageParams(pagination)}
					${createSortParams(sort)}

				){
					totalCount
					nodes {
						creationTime
						deviceName
						deviceBrand
						devicePrice
						deviceId
						deviceIp
						deviceCode
						deviceImage
						deviceStatus
					}
				}
			}
		`,{
			successTip:true,
			label:'获取设备列表 ',
			convertRes(res){
				return res.allIotDevices
			}
		})
}

