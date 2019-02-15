import modelExtend from 'dva-model-extend'
import {model} from '../../common/common'
import getDeviceAlert from '../../../services'



export default modelExtend(model,{

  namespace: 'equipmentMaintenance',

  state: {
    files:[]
  },

  subscriptions: {

  },

  effects: {

  },

  reducers: {
    addToFiles(state, { payload }) {
        const files=state.files.concat(payload.file)
        
        return {
          ...state,
          files,
        }
      },
  },

});
