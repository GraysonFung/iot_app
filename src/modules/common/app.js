import { routerRedux } from 'dva/router'
import { login } from '../../services'
import { queryString } from '../../utils'

function initialState() {
  return {
    isLogin: false,
    user: {},
    collapsed: false,
    permission: [],
    menuSelectedKeys: ['0'],
    menu: [],
    openKeys: [],
  }
}

export default {
  namespace: 'app',
  state: {
    ...initialState(),
  },
  subscriptions: {
    setupHistory({ history, dispatch }) {
      history.listen((location) => {
        console.log(location)
        if (location.pathname === '/home') {
          dispatch({ type: 'updateState', payload: { openKeys: [] }})
        }
        // 检测登录状态
        dispatch({ type: 'isLogin', payload: { location }})
      })
    },
    // setup({ dispatch }) {
    //   dispatch({ type: 'isLogin' })
    // },
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },

    switchSider(state) {
      return {
        ...state,
        collapsed: !state.collapsed,
      }
    },

    openChange(state, { payload }) {
      return {
        ...state,
        openKeys: payload.openKeys.filter(key => key !== (state.openKeys[0] || '')),
      }
    }
  },
  effects: {
    * isLogin({ payload }, { call, put }) {
      const userId = window.localStorage.getItem('dpiot_userId');
      const token = window.localStorage.getItem('dpiot_token');
      const expire = window.localStorage.getItem('dpiot_expire');
      
      if (expire && expire > Date.now() && token && userId) {

        if (['/', '/login'].includes(payload.location.pathname)) return yield put({ type: 'goHome' })

        const res = yield call(login.isLogin)

        if (res.success) {
          const permission = [
            '/',
            '/login',
            '/home',
            ...res.data.permission
          ]
          const menu = [
            { id: '0', name: '首页', icon: 'home', path: '/home', children: [] },
            ...res.data.menu
          ]
          return yield put({ 
            type: 'updateState', 
            payload: {
              isLogin: true,
              permission,
              menu 
            } 
          })
        }
      }
      if (payload.location.pathname !== '/login') {
        window.localStorage.removeItem('dpiot_userId');
        window.localStorage.removeItem('dpiot_token');
        window.localStorage.removeItem('dpiot_expire');
        yield put({
          type: 'updateState',
          payload: {
            ...initialState(),
          },
        })
        yield put({
          type: 'goPage',
          payload: {
            pathname: '/login',
            type: 'replace'
          },
        })
      }
    },

    * login({ payload }, { call, put }) {
      const res = yield call(login.login, payload) 

      if (res.success) {
        window.localStorage.setItem('dpiot_userId', res.data.id);
        window.localStorage.setItem('dpiot_token', res.data.token);
        window.localStorage.setItem('dpiot_expire', res.data.tokenExpire);
        yield put({ type: 'goHome' })
      }
    },

    * logout(action, { call, put }) {
      const data = yield call(login.logout)

      if (data.success) {
        window.localStorage.removeItem('dpiot_userId');
        window.localStorage.removeItem('dpiot_token');
        window.localStorage.removeItem('dpiot_expire');
        // 退出成功后，直接跳登陆页
        yield put({
          type: 'updateState',
          payload: {
            ...initialState(),
          },
        })
        yield put({
          type: 'goPage',
          payload: {
            pathname: '/login',
            type: 'replace',
          },
        })
      }
    },

    * goPage({ payload }, { put, select }) {
      // 路由跳转，包含普通push, 重定向replace，返回goBack, 由type控制

      const { pathname, search, type = 'push' } = payload

      if (type === 'back') {
        window.history.back()
      } else {
        yield put(routerRedux[type]({
          pathname,
          search: typeof search === 'object' && encodeURI(queryString.stringify(search)),
        }))
      }
    },

    * goHome(action, { put }) {
      yield put({
        type: 'goPage',
        payload: {
          pathname: '/home',
          type: 'replace',
        },
      })
    }
  }
}