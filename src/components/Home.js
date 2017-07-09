import React from 'react'
import axios from 'axios'
import {url} from '../config'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class Home extends React.Component{
  constructor(){
    super()
    this.state={


    }
  }
  render(){
    console.log(this.state)
    return(
      <div>
        <Tabs defaultActiveKey="all" onChange={null} >
          <TabPane tab="全部" key="all">Content of Tab Pane 1</TabPane>
          <TabPane tab="精华" key="good">Content of Tab Pane 2</TabPane>
          <TabPane tab="问答" key="ask">Content of Tab Pane 3</TabPane>
          <TabPane tab="分享" key="share">Content of Tab Pane 3</TabPane>
          <TabPane tab="招聘" key="job">Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Home
