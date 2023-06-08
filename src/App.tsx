import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './routes/home.page'
import ShopPage from './routes/shop.page'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </>
  )
}

export default App
