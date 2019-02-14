import 'babel-polyfill'
import dva from 'dva'
import { createHashHistory as createHistory } from 'history'
import { Toast } from 'antd-mobile'
import model from './modules/common/app'
import router from './routes'

// 1. Initialize
const app = dva({
    history: createHistory(),
    onError(err) {
        Toast.fail(err.message, 1)
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
