import React from 'react'
import { Tag, Icon } from 'antd'
import styles from './style.less'

const Pages = ({ pageIndex, onPageChange, onOpen, onClose , dataSource }) => (
    <div>
        <Icon classname={styles['pages-button']} type="left" />
        {
            dataSource.map((page, index) => (
                <Tag 
                    key={page.pageId}
                    closable
                    color={pageIndex === index ? '#108ee9' : null}
                    // onClose={onClose}
                >
                    {page.pageName}
                </Tag>
            ))
        }
        <Icon classname={styles['pages-button']} type="right" />
        <Icon classname={styles['pages-button']} type="close" />
    </div>
    // <Tabs
    //     className={styles.tabs}
    //     onChange={onPageChange}
    //     activeKey={pageIndex}
    //     type="editable-card"
    //     onEdit={onEdit}
    // >
    //     {
    //         dataSource.map((page) => (
    //             <Tabs.TabPane
    //                 tab={page.pageName} 
    //                 key={page.pageId} 
    //                 closable={page.closable}
    //             > 
    //             </Tabs.TabPane>
    //         ))
    //     }
    // </Tabs>
)

export default Pages