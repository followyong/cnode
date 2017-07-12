import React from 'react'
import {url} from '../config'
import {message,Spin,BackTop} from 'antd'
import axios from 'axios'
import moment from 'moment';

class Topic extends React.Component{
  constructor(){
    super()
    this.state={
      data:null,
      tabs:{
        ask:"问答",
        share:"分享",
        job:"招聘"
      }
    }
  }
  componentDidMount(){
    let id=this.props.match.params.id
    axios.get(`${url}/topic/${id}`)
    .then(res => {
      console.log(res)
      this.setState({data:res.data.data})
    })
    .catch(error => message.error('数据请求失败'))
  }
  render(){
    let {data,tabs} =this.state
    return(
      <div>
        {
          data ? (
            <div className="content">
              <div className="titleBar">
                <span className="tab">
                  {
                  data.top ? "置顶" :
                  data.good ? "精华" :
                  tabs[data.tab]
                  }
                </span>
                &nbsp;&nbsp;&nbsp;
                <h2>{data.title}</h2>
              </div>
              <p className="author">
                <strong>
                  ·发布于{moment(data.create_at).fromNow()}&nbsp;&nbsp;
                  ·作者{data.author.loginname}&nbsp;&nbsp;
                  ·来自 {tabs[data.tab]}
                </strong>
              </p>
              <div dangerouslySetInnerHTML={{__html: data.content}} className="substance" />
            </div>
          ) :
          <div style={{textAlign:'center'}}><Spin size="large" /></div>
        }
        <BackTop style={{position:'fixed',right:'15px'}} />
      </div>
    )
  }
}

export default Topic
