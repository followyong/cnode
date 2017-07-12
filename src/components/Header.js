import React from 'react'
import axios from 'axios'
<<<<<<< HEAD
import {Link} from 'react-router-dom'
=======
>>>>>>> 46ac287f1aefc5c4823671e0b86a7112bc3b8e48
import { Modal,Button,Input, message, Menu, Dropdown, Avatar } from 'antd';

import {url} from '../config.js'

class Header extends React.Component{
  constructor(){
    super()
    this.state = {
      isLogin:false,
      visible:false,
<<<<<<< HEAD
      input:'139c1e33-eb93-48f0-93d4-329f3fdb348d',
=======
      input:'3f77acb1-d753-4393-b784-44913190e6a8',
>>>>>>> 46ac287f1aefc5c4823671e0b86a7112bc3b8e48
      confirmLoading:false,
      user:null
    }
  }
  handleOk(){
    this.setState({confirmLoading:true})
    let accesstoken=this.state.input.trim()
    axios.post(`${url}/accesstoken`,{accesstoken})
    .then(res=>{
      message.success="登录成功"
      console.log(res)
      this.setState({
        isLogin:true,
        visible:false,
        input:'',
        confirmLoading:false,
        user:res.data
      })
      sessionStorage.accesstoken = accesstoken
    })
    .catch(err=>{
      message.error="登录失败，请重试"
      this.setState({
        confirmLoading:false,
        input:''
      })
    })
  }
  handleLogout(){
    this.setState({
      isLogin:false,
      user:null
    })
    sessionStorage.removeItem('accesstoken')
  }
  render(){
    let {isLogin,visible,input,confirmLoading,user}=this.state
    const menu = !isLogin ? null : (
        <Menu>
          <Menu.Item>
            <h3>{user.loginname}</h3>
          </Menu.Item>
          <Menu.Item>
<<<<<<< HEAD
            <Link to='/user'>个人中心</Link>
=======
            <a href="#">个人中心</a>
>>>>>>> 46ac287f1aefc5c4823671e0b86a7112bc3b8e48
          </Menu.Item>
          <Menu.Item>
            <Button type="danger" onClick={this.handleLogout.bind(this)}>退出</Button>
          </Menu.Item>
        </Menu>
      );
    return(
      <header className="header">
<<<<<<< HEAD
        <Link to='/' style={{width:'40%'}}>
          <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" ></img>
        </Link>
=======
        <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" ></img>
>>>>>>> 46ac287f1aefc5c4823671e0b86a7112bc3b8e48
        {
          isLogin ?
          <div>
            <Dropdown overlay={menu}>
              <Avatar size="large" src={user.avatar_url} />
            </Dropdown>
          </div>
           :
          <div>
            <Button type="primary" onClick={() => this.setState({visible:true})}>登录</Button>
            <Modal
              title="登录"
              visible={this.state.visible}
              onOk={this.handleOk.bind(this)}
              onCancel={()=>this.setState({visible:false})}
              confirmLoading={confirmLoading}
              okText="登录"
              cancelText="取消"
            >
              <Input  placeholder='accesstoken' value={input} onChange={(e)=> this.setState({input:e.target.value})} />
            </Modal>
          </div>
        }

      </header>
    )
  }
}

export default Header
