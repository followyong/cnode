import React from 'react'
import axios from 'axios'
import {url} from '../config'
import {message} from 'antd'

class User extends React.Component{
  componentDidMount(){
    axios.get(`${url}/user/${loginname}`)
    .then(res => console.log(res))
    .catch(err => message.error('数据请求失败'))
  }
  render(){
    console.log(this.props)
    return(
      <div>
        user
      </div>
    )
  }
}

export default User
