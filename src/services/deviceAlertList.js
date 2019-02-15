import {graphql,makeGraphql} from '../utils'
const { createPageParams, createSortParams, createInputs } =makeGraphql

export function getDeviceAlertList(data) {
	const {pagination, sort ,filter} =data
	return graphql(`
			query {
				allIotWarningNotifies(
					${createPageParams(pagination)}
					${createSortParams(sort)}

				){
					totalCount
					nodes {
						warningNotifyId
						warningNotifyName
						creationTime
						warningNotifyType
						warningNotifyStatus
						warningNotifyContent
						warningNotifyParameter1
						warningNotifyParameter2
						warningNotifyParameter3
					}
				}
			}
		`,{
			successTip:true,
			label:'获取设备报警信息 ',
			convertRes(res){
				return res.allIotWarningNotifies
			}
		})
}

