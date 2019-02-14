import modelExtend from 'dva-model-extend'
import { model } from '../common'

function initialData() {
  return {}
}

export default modelExtend(model, {
  namespace: 'home', 
  state: {
    ...initialData(),
  },
  subscriptions: {},
  effects: {},
  reducers: {},
})