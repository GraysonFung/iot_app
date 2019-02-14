import modelExtend from 'dva-model-extend'
import {listModel} from './common'
import {getDeviceAlertList} from '../services/deviceAlertList'
import getDeviceAlertList2 from '../services/deviceAlertList2'

import {ListView} from 'antd-mobile'

export default modelExtend(listModel,{

  namespace: 'deviceAlertList',
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
    *deviceAlertList({ payload }, { call, put,select }) {  // eslint-disable-line
    	const Loaded=yield select(state=>state.deviceAlertList.Loaded)
    	if(Loaded){
    		console.log("拦截请求")
    		return
    	}
    	// const res=yield call(getDeviceAlertList,payload)   //用graphql直接从数据库取，先屏蔽了
      const res=yield call(getDeviceAlertList2)
      console.log("res",res)



    	const dataSource = yield select(state => state.deviceAlertList.dataSource) 
    	const current = yield select(state => state.deviceAlertList.pagination.current) 
    	const pageSize = yield select(state => state.deviceAlertList.pagination.pageSize) 
    	const dataBlobs = yield select(state => state.deviceAlertList.dataBlobs) 
    	const sectionIDs = yield select(state => state.deviceAlertList.sectionIDs) 
    	const rowIDs = yield select(state => state.deviceAlertList.rowIDs) 
    	

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