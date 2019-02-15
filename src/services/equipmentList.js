import {graphql,makeGraphql} from '../utils'
const { createPageParams, createSortParams, createInputs } =makeGraphql

export function getEquipmentList(data) {
	const {pagination, sort ,filter} =data
	return graphql(`
			query {
				allIotEquipments(
					${createPageParams(pagination)}
					${createSortParams(sort)}

				){
					totalCount
					nodes {
						creationTime
						equipmentName
						equipmentBrand
						equipmentPrice
						equipmentId
						equipmentIp
						equipmentCode
						equipmentImage
						equipmentStatus
					}
				}
			}
		`,{
			successTip:true,
			label:'获取设备列表 ',
			convertRes(res){
				return res.allIotEquipments
			}
		})
}

