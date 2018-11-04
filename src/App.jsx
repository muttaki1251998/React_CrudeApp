import React, { Component } from 'react';
import PostForm from './components/PostForm';
import AllForm from './components/AllForm';
import './App.css';

class App extends Component {
    render(){
        return(
            <div className="App">
            <div className="navbar">
              <h2 className="center ">Post It</h2>
              </div>
              <PostForm />
              <AllForm />
          </div>
        );
    }
}

export default App;