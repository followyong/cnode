import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
<<<<<<< HEAD
import Topic from './components/Topic'
import User from './components/User'
=======
>>>>>>> 46ac287f1aefc5c4823671e0b86a7112bc3b8e48

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Header />


<<<<<<< HEAD
          <Route path='/' exact component={Home} />
          <Route path='/topic/:id' component={Topic} />
          <Route path='/user/:loginname' component={User}/>
=======
          <Route path='/' component={Home} />

>>>>>>> 46ac287f1aefc5c4823671e0b86a7112bc3b8e48

          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
