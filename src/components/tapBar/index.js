import React from 'react';
import { connect } from 'dva';
import { TabBar } from 'antd-mobile';
import {routerRedux,withRouter} from 'dva/router'
import style from './index.css'

class TabBarDown extends React.Component {
  
  componentDidMount(){
    this.props.dispatch({
      type:"app/updateState",
      payload:{
        fullScreen: true,
        messageNum:7
      }
    })
  }


  render() {
    
    const {children,app}=this.props
    return (
      <div style={app.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#982837"
          barTintColor="white"
          hidden={app.hidden}
        >
          <TabBar.Item
            title="消息"
            key="message"
            icon={<div className={style.message} />}
            selectedIcon={<div className={style.message1} />}
            selected={app.selectedTab === 'messageTab'}
            badge={app.messageNum}
            onPress={() => {
              this.props.dispatch(routerRedux.push({pathname:"/message"}))
              this.props.dispatch({
                type:'app/updateState',
                payload:{ selectedTab: 'messageTab'}
              })
            }}
            data-seed="logId"
          >
            {children}
          </TabBar.Item>
          <TabBar.Item
            icon={<div className={style.app} />}
            selectedIcon={<div className={style.app1} />}
            title="应用"
            key="application"
            badge={''}
            selected={app.selectedTab === 'applicationTab'}
            onPress={() => {
              this.props.dispatch(routerRedux.push({pathname:"/"}))
              this.props.dispatch({
                type:'app/updateState',
                payload:{ selectedTab: 'applicationTab'}
              })
            }}
            data-seed="logId1"
          >
            {children}
          </TabBar.Item>
          <TabBar.Item
            icon={<div className={style.my} />}
            selectedIcon={<div className={style.my1} />}
            title="个人中心"
            key="my"
            dot
            selected={app.selectedTab === 'myTab'}
            onPress={() => {
              this.props.dispatch(routerRedux.push({pathname:"/my"}))
              this.props.dispatch({
                type:'app/updateState',
                payload:{ selectedTab: 'myTab'}
              })
            }}
          >
            {children}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}




export default withRouter(connect(({app})=>({app}))(TabBarDown));
