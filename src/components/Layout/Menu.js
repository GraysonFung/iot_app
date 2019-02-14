import React from 'react'
import { Link } from 'dva/router'
import { Icon, Menu } from 'antd'

const SiderMenu = ({ selectedKeys, openKeys, onOpenChange, dataSource }) => (
  <Menu 
    theme="dark" 
    mode="inline" 
    selectedKeys={selectedKeys}
    openKeys={openKeys}
    onOpenChange={onOpenChange}
  >
    {      
      dataSource.map(parent => {
        if (parent.children.length !== 0) {
          return (
            <Menu.SubMenu key={parent.id} title={<span><Icon type={parent.icon} /><span>{parent.name}</span></span>}>
              {
                parent.children.map(children => (
                  <Menu.Item key={children.id}>
                    <Link to={{ pathname: children.path }}>
                      <Icon type={children.icon} />{children.name}
                    </Link>
                  </Menu.Item>)
                )
              }
            </Menu.SubMenu>
          )
        }
        return (
          <Menu.Item key={parent.id}>
            <Link to={{ pathname: parent.path }}>
              <Icon type={parent.icon} />
              <span>{parent.name}</span>
            </Link>
          </Menu.Item>
        )
      })
    }
  </Menu>
)

export default SiderMenu