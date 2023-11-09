
import React, { useState } from "react";
import './../styles/App.css';
import Form from "./Form";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
        {/* Do not remove the main div */}
        <h2>Parent Component</h2>
        {
          isLoggedIn ? 
          <p>You are logged in!</p>
          :
          <Form isLoggedIn setIsLoggedIn={setIsLoggedIn} />
        }
    </div>
  )
}

export default App
