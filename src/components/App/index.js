import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import { Layout } from 'antd'

import { Header, Logo, Menu, Sider, Content, Footer } from '../Layout'

import logo from '../../assets/logo.png'
import styles from './style.less'

class App extends Component {

  // handleEdit = (targetKey, action) => {
  //   if (action === 'add') {
  //     this.props.dispatch({ type: 'app/initPages' })
  //   }
  //   if (action === 'remove') {
  //     this.props.dispatch({ type: 'app/deletePage', payload: { targetKey }})
  //   }
  // }

  render() {
    const { 
      children,
      dispatch,
      app,
    } = this.props

    const { 
      isLogin,
      collapsed,
      menuSelectedKeys,
      menu, 
      openKeys,
      // pageIndex, 
      // pages,
    } = app

    return isLogin 
      ? (
          <Layout>
            <Sider
                className={styles.sider}
                trigger={null}
                width="260"
                collapsible
                collapsed={collapsed}
              >
                <Logo collapsed={collapsed} logo={logo} title="东浦 IOT 后台管理" />

                <Menu 
                  selectedKeys={menuSelectedKeys}
                  openKeys={openKeys}
                  onOpenChange={(openKeys) => dispatch({ type: 'app/openChange', payload: { openKeys } })}
                  dataSource={menu}
                />
              </Sider>
            <Layout>
              <Header collapsed={collapsed} onClick={() => dispatch({ type: 'app/switchSider' })} />
              <div className={styles.h} >123</div>
              {/* <div>
                <Pages 
                  onPageChange={(pageIndex) => dispatch({ type: 'app/changePage', payload: { pageIndex } })}
                  pageIndex={pageIndex}
                  onEdit={this.handleEdit}
                  onInitPages={() => dispatch({ type: 'app/initPages' })}
                  dataSource={pages}
                /> */}
              <Content className={styles.content}>
                {children}
              </Content>
              {/* </div> */}
              <Footer/>
            </Layout>
          </Layout>
        )
      : children
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
}

export default withRouter(connect(({ app }) => ({ app }))(App))