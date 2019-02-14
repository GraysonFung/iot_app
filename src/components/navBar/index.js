import React from 'react';
import { connect } from 'dva';
import { NavBar, Icon } from 'antd-mobile';
import {routerRedux,withRouter} from 'dva/router'
import './index.less'

class myNavBar extends React.Component {
  
  componentDidMount(){

  }


  render() {
    const {children}=this.props
    return (
            <NavBar
              mode="dark"
              icon={<Icon type="left" />}
              onLeftClick={() => this.props.dispatch(routerRedux.goBack())}
              rightContent={[
              <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
              <Icon key="1" type="ellipsis" />,
              ]}
              >
              {children}
              </NavBar>
    );
  }
}




export default withRouter(connect(({app})=>({app}))(myNavBar));
