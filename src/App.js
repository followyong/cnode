import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Topic from './components/Topic'
import User from './components/User'
import NewTopic from './components/NewTopic'

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Header />

          <Route path='/' exact component={Home} />
          <Route path='/topic/:id' component={Topic} />
          <Route path='/user/:loginname' component={User}/>
          <Route path='/newtopic' component={NewTopic} />

          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
