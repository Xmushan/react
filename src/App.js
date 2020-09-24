import React, { Component } from 'react'
import { HashRouter, Route, Link } from "react-router-dom";
import about from './pages/about';
import comment from './pages/comment';
import test from './pages/test';




class App extends Component{
  render(){
    return(
      <HashRouter>
          <div className="container">
            <h1>路由组件</h1>
            <Link to="/about">about</Link>
            <Link to="/test">test</Link>
            <Link to='/comment'>comment</Link>
          </div>
          <Route path="/comment" component={comment}></Route>
          <Route path="/about" component={about}></Route>
          <Route path="/test" component={test}></Route>
      </HashRouter>

    )
  }
}

export default App

