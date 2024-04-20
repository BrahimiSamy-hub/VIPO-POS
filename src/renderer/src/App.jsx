import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Tables from './pages/Tables'
import Stat from './pages/Stat'
import Setting from './pages/Settings'
import Menu from './pages/Menu'
function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/stat" element={<Stat />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
