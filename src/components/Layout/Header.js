import React from 'react'
import { Layout, Icon, Dropdown, Menu, Avatar } from 'antd'
import styles from './style.less'

const menu = (
  <Menu>
    <Menu.Item 
      // onClick={() => dispatch({ type: 'app/logout' })}
    >
     退出登录
    </Menu.Item>
  </Menu>
);

const Header = ({ collapsed, onClick }) => (
  <Layout.Header className={styles.header}>
    <Icon
      className={styles.collapse}
      type={collapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={onClick}
    />

    <Dropdown overlay={menu}>
      <span className={styles.user} ><Avatar icon="user" /> 超级管理员</span>
    </Dropdown>
  </Layout.Header>
)

export default Header