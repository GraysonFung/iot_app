import modelExtend from 'dva-model-extend'

// ------------- 基础model --------------
export const modelState = () => {
  return {}
}
export const model = {
  state: modelState(),
  reducers: {
    init(state) { // eslint-disable-line
      return {
        ...modelState(),
      }
    },
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}

// ------------- 列表 model --------------
export const listModelState = () => {
  return {
    record: {}, // 当前数据
    list: [], // 列表展示数据
    pagination: { // 分页设置
      current: 1, // 当前
      pageSize: 8, // 每页长度
      total: 0, // 总条数
      showTotal: total => `共 ${total} 条数据`,
    },
    sort: { 
      field: 'primaryKey',
      type: 'desc'
    },
    filter: {}, // 过滤字段
    queryVisible: false,
    createVisible: false,
    updateVisible: false,
    modelType: ''
  }
}
export const listModel = modelExtend(model, {
  state: {
    ...listModelState()
  },
  effects: {
    * showQuery({ payload }, { put }) {
      yield put({ type: payload.type, payload })
      yield put({
        type: 'updateState',
        payload: {
          queryVisible: true,
          modelType: 'query'
        }
      })
    },
    * showUpdate({ payload }, { put }) {
      yield put({ type: payload.type, payload })
      yield put({
        type: 'updateState',
        payload: {
          updateVisible: true,
          modelType: 'update'
        }
      })
    },
  },
  reducers: {
    showCreate(state) {
      return {
        ...state,
        createVisible: true,
        modelType: 'create'
      }
    },
    closeModel(state) {
      return {
        ...state,
        queryVisible: false,
        createVisible: false,
        updateVisible: false,
        modelType: ''
      }
    }
  },
})
