import React, { Component } from 'react';
import { Route } from "react-router-dom";

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';

import SoftwareList from './SoftwareToolsManage/SoftwareList';
import SoftwareView from './SoftwareToolsManage/SoftwareView';

class App extends Component {
  render () {
    return (
      <div className="App">
        <HeaderAdmin/> 
        <Route exact path='/' component={LoginForm} />
        <Route path='/SoftwareList' component={SoftwareList} />
        <Route path='/SoftwareView' component={SoftwareView} />
        <Footer/>
      </div>
    );
  }
}

export default App;