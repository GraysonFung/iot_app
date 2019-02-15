import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'

import routes from './routes'

import Error from '../components/Error'

const { ConnectedRouter } = routerRedux

function Router({ history, app }) {
  return (
    <ConnectedRouter history={history}>

        
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
        

    </ConnectedRouter>
  );
}

Router.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Router;
