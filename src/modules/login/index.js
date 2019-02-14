
import React from 'react';
import { connect } from 'dva';
import { Flex, List, InputItem, WhiteSpace,WingBlank,Button } from 'antd-mobile';
import { createForm } from 'rc-form';

import style from './index.less'

class login extends  React.Component {

  componentDidMount(){

    this.props.dispatch({
      type:"app/updateState",
      payload:{
        hidden:true
      }
    })
  }

  handleClick = (inputValue) => {

    //把用户名和密码传进modal（login）里面
    this.props.dispatch({
      type:"login/updateState",
      payload:{usermessage:inputValue}
    })
    //登录（自己练习effect通过select方法从state里面拿值故意这么写，其实可以和上一步写成一步）
    this.props.dispatch({
      type:'login/post'
    })

    // this.props.dispatch({
    //   type:'app/updateState',
    //   payload:{
    //     isLogin:true
    //   }
    // })
    // this.props.dispatch({
    //         type:'login/goPage',
    //         payload:{
    //           type:'push',
    //           pathname:'/'
    //         }
    // })

  }
  render(){
    const { getFieldProps,getFieldsValue } = this.props.form;
    const PlaceHolder = ({ className = '', ...restProps }) => (
        <div className={`${className} placeholder`} {...restProps}>Block</div>
      );
    const myHeader= ()=>{
      return(
        <Flex>
          <Flex.Item style={{textAlign:"center",fontSize:"25px"}}>东浦IOT</Flex.Item>
        </Flex>
        )
    }
    return(

        <div className={style.myLogin} style={{height:"100%",paddingTop:"50%",background:"url('https://upload-images.jianshu.io/upload_images/2337041-f6d581547ddd5b09.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240')",backgroundSize:"cover"}}>
          <List renderHeader={myHeader} className={style.InputItem}>
            <InputItem
                  {...getFieldProps('username')}
                  placeholder="请输入用户名"
                  
            >用户名
            </InputItem>
            <InputItem
                  {...getFieldProps('password')}
                  type="password"
                  placeholder="请输入密码"
            >密码
            </InputItem>
            <WhiteSpace />
            <WingBlank>
                <Button type="primary"  onClick={()=>this.handleClick(getFieldsValue())}>登录</Button>
                <WhiteSpace />
                <Flex justify="end">
                  <div className={style.register}>注册</div>
                </Flex>
               

            </WingBlank>
          </List>
        </div>

      )
  }
}





// 把form注入到组件的props里面
const loginWrapper = createForm()(login);





export default connect(({login,app})=>({login,app}))(loginWrapper)


