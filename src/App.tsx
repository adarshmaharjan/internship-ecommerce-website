import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './routes/home.page'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
