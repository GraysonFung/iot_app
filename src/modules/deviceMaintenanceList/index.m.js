import modelExtend from 'dva-model-extend'
import {listModel} from '../common/common'
// import {getDeviceMaintenanceList} from '../services/getDeviceMaintenanceList'
import {ListView} from 'antd-mobile'

export default modelExtend(listModel,{

  namespace: 'deviceMaintenanceList',
  state: {
  	dataSource:new ListView.DataSource({
  					getRowData:(dataBlob, sectionID, rowID) => dataBlob[rowID],
  					getSectionHeaderData: (dataBlob, sectionID) => dataBlob[sectionID],
  					rowHasChanged: (row1, row2) => row1 !== row2,
  					sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
  				}),
  	dataBlobs: {},
  	sectionIDs: [],
  	rowIDs:[],
  	Loaded:false,
  	haveInit:false,

  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *deviceMaintenanceList({ payload }, { call, put,select }) {  // eslint-disable-line
    	const Loaded=yield select(state=>state.deviceMaintenanceList.Loaded)
    	if(Loaded){
    		console.log("拦截请求")
    		return
    	}
    	// const res=yield call(getEquipmentList,payload)
      //先放假数据
      const res={
        success: true,
        data:{
          totalCount:3,
          nodes:[
            {
              name:'设备1',
              code:1322
            },{
              name:'设备2',
              code:1323
            },{
              name:'设备3',
              code:1324
            }
          ]
        }

      }

    	const dataSource = yield select(state => state.deviceMaintenanceList.dataSource) 
    	const current = yield select(state => state.deviceMaintenanceList.pagination.current) 
    	const pageSize = yield select(state => state.deviceMaintenanceList.pagination.pageSize) 
    	const dataBlobs = yield select(state => state.deviceMaintenanceList.dataBlobs) 
    	const sectionIDs = yield select(state => state.deviceMaintenanceList.sectionIDs) 
    	const rowIDs = yield select(state => state.deviceMaintenanceList.rowIDs) 
    	

    	if(res.success){
    		// console.log('res',res)

    		for (let i = 0; i < 1; i++) {
    			const ii = (payload.pagination.current-1)*1 + i;
    			const sectionName = `Section ${ii+1}`;
    			// sectionIDs.push(sectionName);
    			if(sectionIDs.indexOf(sectionName)==-1){
    				sectionIDs.push(sectionName);
    			}
    			dataBlobs[sectionName] = sectionName;
    			rowIDs[ii] = [];
          console.log(res.data.nodes.length)
    			for (let jj = 0; jj < res.data.nodes.length; jj++) {
    				const rowName = `S${ii}, R${jj}`;
    				rowIDs[ii].push(rowName);
    				// rowIDs[ii]=[...rowIDs[ii],rowName]
    				dataBlobs[rowName] = res.data.nodes[jj];
    			}
    			console.log('dataBlobs',dataBlobs)
    			console.log('sectionIDs',sectionIDs)
    			console.log('rowIDs',rowIDs)
    		}
    		yield put({ 
    			type: 'updateState',
    			payload:{
    				list:res.data.nodes,
    				pagination:{
    					...payload.pagination,
    					total:res.data.totalCount,
    				},
    				sort:payload.sort,
    				filter:payload.filter,
    				height:payload.height,
  					Loaded:res.data.nodes.length<pageSize?true:false,
  					haveInit:payload.haveInit,
  					dataBlobs,
  					sectionIDs,
  					rowIDs,
  					dataSource:dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs)
    			} 
    		})
    	}
    },

  },

  reducers: {},

})