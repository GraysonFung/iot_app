import React from 'react'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import { Form, Icon, Input, Button } from 'antd';
import styles from './style.less'
import logo from '../../assets/logo.png'
import background from '../../assets/background.png'

class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) return
            this.props.dispatch({ type: 'app/login', payload: values })
        });
    }

    render() {
        const {
            // dispatch,
            // loading,
            form
        } = this.props

        const {
            getFieldDecorator
        } = form

        return (
            <div 
                style={{
                    background: `url(${background}) no-repeat fixed center`,
                    backgroundSize: '100% 100%',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    MozBackgroundSize: '100% 100%'
                }}
            >
                <Form onSubmit={this.handleSubmit} className={styles.form}>
                    <div className={styles.title}>
                        <img src={logo} alt="" />
                        <h2>东浦 IOT 后台管理</h2>
                    </div>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ 
                                required: true, 
                                message: '请输入用户名!' 
                            }],
                        })(
                            <Input 
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                placeholder="请输入用户名" 
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ 
                                required: true, 
                                message: '请输入密码!' 
                            }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                type="password" 
                                placeholder="请输入密码" 
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={styles.button}>登录</Button>                
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

Login = Form.create()(Login)

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(Login))