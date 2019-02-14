import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import routes from './routes'
import App from '../components/App'
import Error from '../components/Error'

const { ConnectedRouter } = routerRedux

function Router({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <LocaleProvider locale={zhCN}>
        <App>
          <Switch>
            {
              routes.map(({ path, component, models }, key) => (
                <Route
                  key={key}
                  exact
                  path={path}
                  component={dynamic({
                    app,
                    models,
                    component,
                  })}
                />
              ))
            }
            <Route render={() => <Error key={Math.random() + Date.now()} code={404} />} />
          </Switch>
        </App>
      </LocaleProvider>
    </ConnectedRouter>
  );
}

Router.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Router;
