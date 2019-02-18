import modelExtend from 'dva-model-extend'
import { model } from '../../common'

function initialData() {
  return {}
}

export default modelExtend(model, {
  namespace: 'repair', 
  state: {
    ...initialData(),
    status:0
  },
  subscriptions: {},
  effects: {

  },
  reducers: {
    
  },
})