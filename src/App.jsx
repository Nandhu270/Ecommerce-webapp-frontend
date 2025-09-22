import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/signup'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
