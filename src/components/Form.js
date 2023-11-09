import React from 'react'

const Form = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <form>
        <input type="text" />
        <input type="password" />
        <button type='button' onClick={()=>setIsLoggedIn(true)} >Login</button>
    </form>
  )
}

export default Form
