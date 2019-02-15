import modelExtend from 'dva-model-extend'
import {listModel} from '../../common/common'
import getDeviceAlert from '../../../services'



export default modelExtend(listModel,{

  namespace: 'deviceAlert',

  state: {
    fixlog:[],
    history:[],
    spStore:[],
    faq:[],
    warningIndex:1,
    index:0
  },

  subscriptions: {

  },

  effects: {
    *getfixlog({ payload }, { call, put,select}) {  // eslint-disable-line
      const warningIndex = yield select(state => state.deviceAlert.warningIndex)

      let res = yield getDeviceAlert('fixlog','获取维修记录',warningIndex)

      yield put({type:'updateState',payload:{
        fixlog:res.data.fixlog,

      }})
    },
    *gethistory({ payload }, { call, put,select }) {  // eslint-disable-line
      const warningIndex = yield select(state => state.deviceAlert.warningIndex)

      let res = yield getDeviceAlert('history','获取维修记录',warningIndex)
      console.log(res.data.history)
      yield put({type:'updateState',payload:{
        history:res.data.history
      }})
    },
    *getspStore({ payload }, { call, put,select }) {  // eslint-disable-line
      const warningIndex = yield select(state => state.deviceAlert.warningIndex)

      let res = yield getDeviceAlert('spStore','获取维修记录',warningIndex)
      console.log(res.data.spStore)
      yield put({type:'updateState',payload:{
        spStore:res.data.spStore
      }})
    },
    *getfaq({ payload }, { call, put,select }) {  // eslint-disable-line
      const warningIndex = yield select(state => state.deviceAlert.warningIndex)

      let res = yield getDeviceAlert('faq','获取维修记录',warningIndex)
      console.log(res.data.faq)
      yield put({type:'updateState',payload:{
        faq:res.data.faq
      }})
    }
  },

  reducers: {

  },

});
