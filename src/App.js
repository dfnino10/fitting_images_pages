import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import UserGreeting from './components/UserGreeting/UserGreeting';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false
    }
  }

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn: false});
    }else if(route === 'home'){
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  render(){
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>

        { this.state.route === 'home' ? 
            <>
              <Logo />
              <UserGreeting />
              <ImageLinkForm />
            </>
            : (
              this.state.route === 'signin'?
              <>
                <Signin onRouteChange={this.onRouteChange}/>
              </>:
              <>
                <Register onRouteChange={this.onRouteChange}/>
              </>
            )
        }
      </div>
    );
  }
}

export default App;
