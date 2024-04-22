import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!username || !password) {
      setError('Username and password are required.')
      return
    }
    try {
      const response = await axios.post('http://localhost:3000/users/login', {
        username,
        password
      })

      if (response.data.user.role === 'Cashier') {
        localStorage.setItem('jwt', response.data.token)
        navigate('/tables')
      } else {
        setError('Access Denied: You are not authorized.')
      }
    } catch (error) {
      setError(
        error.response ? error.response.data.message : 'Login failed: Please check your credentials'
      )
    }
  }

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#1f1d2b',
            padding: '24px',
            borderRadius: '50px',
            width: '700px'
          }}
        >
          <Typography component="h1" variant="h3" sx={{ color: '#ea7c69' }}>
            <h1>VIPO CHICKEN&FRIES</h1>
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Nom d'utilisateur"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#ea7c69',
                  '& fieldset': {
                    borderColor: '#393c49'
                  },
                  '&:hover fieldset': {
                    borderColor: '#ea7c69'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ea7c69'
                  }
                },
                '& .MuiInputLabel-root': {
                  color: '#ea7c69',
                  '&.Mui-focused': {
                    color: '#ea7c69'
                  }
                }
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#ea7c69',
                  '& fieldset': {
                    borderColor: '#393c49'
                  },
                  '&:hover fieldset': {
                    borderColor: '#ea7c69'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ea7c69'
                  }
                },
                '& .MuiInputLabel-root': {
                  color: '#ea7c69',
                  '&.Mui-focused': {
                    color: '#ea7c69'
                  }
                }
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color: 'white', backgroundColor: '#ea7c69' }}
            >
              Sign In
            </Button>
            {error && (
              <Alert severity="error" variant="filled" sx={{ width: '100%', mt: 2 }}>
                {error}
              </Alert>
            )}
            {!error && <div style={{ height: '64px' }}></div>}
          </Box>
        </Box>
      </Container>
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
