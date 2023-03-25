import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="box">
      /* so here we'll add the nav bar */
      <h1>Class Criqitue</h1>
      
      <h1>Login</h1>
      <input type="text" placeholder='username'  />
      <input type="password" placeholder='password' />
      <div>
        <button type="button">Login</button>
      </div>
      <div>
        <a href="www.google.com">Sign up Here!</a>
      </div>
    </div>
  )
}

export default App


