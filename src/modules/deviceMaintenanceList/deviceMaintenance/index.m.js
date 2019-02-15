import modelExtend from 'dva-model-extend'
import {model} from '../../common/common'




export default modelExtend(model,{

  namespace: 'deviceMaintenance',

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
