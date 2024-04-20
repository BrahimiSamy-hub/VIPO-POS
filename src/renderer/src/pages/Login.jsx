import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/users/login', {
        username,
        password
      })

      if (response.data.user.role === 'Cashier') {
        localStorage.setItem('jwt', response.data.token)
        navigate('/tables')
      } else {
        alert('Access Denied: You are not authorized as cashier.')
      }
    } catch (error) {
      console.error('Login failed', error.response || error)
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login

// import React, { useRef, useState } from 'react'
// import Keyboard from 'react-simple-keyboard'
// import 'react-simple-keyboard/build/css/index.css'
// import '../assets/keyboard.css'

// function Login() {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [layout, setLayout] = useState('default')
//   const [inputField, setInputField] = useState('username') // Track which input is active
//   const keyboardRef = useRef()

//   // Update the active input field in state and virtual keyboard
//   const onChange = (input) => {
//     if (inputField === 'password') {
//       setPassword(input)
//     } else {
//       setUsername(input)
//     }
//   }

//   const handleShift = () => {
//     const newLayoutName = layout === 'default' ? 'shift' : 'default'
//     setLayout(newLayoutName)
//   }

//   const onKeyPress = (button) => {
//     if (button === '{shift}' || button === '{lock}') handleShift()
//   }

//   const onChangeUsername = (event) => {
//     const { value } = event.target
//     setUsername(value)
//   }

//   const onChangePassword = (event) => {
//     const { value } = event.target
//     setPassword(value)
//   }

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={onChangeUsername}
//             onFocus={() => setInputField('username')} // Set active input field
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={onChangePassword}
//             onFocus={() => setInputField('password')} // Set active input field
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <Keyboard
//         keyboardRef={(r) => (keyboardRef.current = r)}
//         layoutName={layout}
//         onChange={onChange}
//         onKeyPress={onKeyPress}
//       />
//     </div>
//   )
// }

// export default Login
