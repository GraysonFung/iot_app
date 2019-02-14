import 'babel-polyfill'
import dva from 'dva'
import { createHashHistory as createHistory } from 'history'
import { message } from 'antd'
import model from './modules/common/app'
import router from './routes'

// 1. Initialize
const app = dva({
    history: createHistory(),
    onError(err) {
        message.error(err.message)
    },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(model);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
