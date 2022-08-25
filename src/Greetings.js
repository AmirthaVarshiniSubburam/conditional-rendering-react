import React from 'react'
import GuestGreeting from './GuestGreeting'
import UserGreetings from './UserGreetings'

function Greetings(props) {
  let isLoggedIn = props.isLoggedIn
   if(isLoggedIn){
    return (
    <UserGreetings />
  )
    }
    else
    {
        return(
            <GuestGreeting />
        )
    }
}

export default Greetings