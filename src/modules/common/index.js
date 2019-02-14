import modelExtend from "dva-model-extend";
import { iotPlatform } from "../../constants";
import * as services from "../../services";

const { ROOTPATH } = iotPlatform;

// ------------- 基础model --------------
export const modelState = () => {
  return {};
};

export const model = {
  state: modelState(),
  reducers: {
    init(state) {
      // eslint-disable-line
      return {
        ...modelState()
      };
    },
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};

// ------------- 列表 model --------------
export const listModelState = () => {
  return {
    list: [], // 列表展示数据
    pagination: {
      // 分页设置
      current: 1, // 当前
      pageSize: 10, // 每页长度
      total: 0, // 总条数
      showTotal: total => `共 ${total} 条数据`
    },
    sort: {
      field: "createAt",
      type: "desc"
    },
    filter: {}, // 过滤字段
    enums: {} // 枚举字段
  };
};

export const listModel = modelExtend(model, {
  state: {
    ...listModelState()
  },
  effects: {
    *queryEnums({ payload }, { call, put }) {
      const res = yield call(services[payload.NAME]["queryEnums"], payload);
      if (res.success) {
        yield put({
          type: "updateState",
          payload: {
            enums: res.data
          }
        });
      }
    },

    *queryList({ payload }, { call, put }) {
      const res = yield call(services[payload.NAME]["queryList"], payload);
      if (res.success) {
        yield put({
          type: "updateState",
          payload: {
            list: res.data.nodes,
            pagination: {
              ...payload.pagination,
              total: res.data.totalCount
            },
            sort: payload.sort,
            filter: payload.filter
          }
        });
      }
    },

    *deleteRecord({ payload }, { call, put }) {
      const { NAME, TITLE, FIELDS, pagination, sort, filter, inputs } = payload;
      yield call(services[payload.NAME]["deleteRecord"], {
        NAME,
        inputs
      });
      yield put({
        type: "queryList",
        payload: {
          NAME,
          TITLE,
          FIELDS,
          pagination,
          sort,
          filter
        }
      });
    }
  },
  reducers: {}
});

// ------------- 单条记录 model --------------
export const recordModelState = () => {
  return {
    record: {}, // 单条记录数据
    enums: {} // 枚举字段
  };
};

export const recordModel = modelExtend(model, {
  state: {
    ...recordModelState()
  },
  effects: {
    *queryEnums({ payload }, { call, put }) {
      const res = yield call(services[payload.NAME]["queryEnums"], payload);
      if (res.success) {
        yield put({
          type: "updateState",
          payload: {
            enums: res.data
          }
        });
      }
    },

    *queryRecord({ payload }, { call, put }) {
      const res = yield call(services[payload.NAME]["queryRecord"], payload);
      if (res.success) {
        yield put({
          type: "updateState",
          payload: {
            record: res.data
          }
        });
      }
    },

    *createRecord({ payload }, { call, put }) {
      const res = yield call(services[payload.NAME]["createRecord"], payload);
      if (res.success) {
        yield put({
          type: `app/goPage`,
          payload: { pathname: `/${ROOTPATH}/list` }
        });
      }
    },

    *updateRecord({ payload }, { call, put }) {
      const res = yield call(services[payload.NAME]["updateRecord"], payload);
      console.log(ROOTPATH);
      if (res.success) {
        yield put({
          type: `app/goPage`,
          payload: { pathname: `/${ROOTPATH}/list` }
        });
      }
    }
  },
  reducers: {}
});
