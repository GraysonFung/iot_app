import React from 'react'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
// import { Form, Icon, Input, Button } from 'antd';
// import styles from './style.less'

class Home extends React.Component {
    render() {
        return (
            <div>首页</div>
        );
    }
}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(Home))