import React, { Component } from 'react'
import LoginButton from './LoginButton'
import Greetings from './Greetings'
import LogoutButton from './LogoutButton'

export class LoginControl extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }

    handleLoginClick = ()=>{
        this.setState({
            isLoggedIn:true
        })
    }

    handleLogoutClick = ()=>{
        this.setState({
            isLoggedIn:false
        })
    }

  render() {
    let isLoggedIn = this.state.isLoggedIn
    let button
    if(isLoggedIn){
        button = <LogoutButton onClick={this.handleLogoutClick} />
    }
    else
    {
        button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
            <br />
            <Greetings isLoggedIn={isLoggedIn}/>
            <br />
            {button}
      </div>
    )
  }
}

export default LoginControl