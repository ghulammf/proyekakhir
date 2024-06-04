import { useState } from 'react'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import { Route, Routes } from 'react-router-dom'
import Stok from './pages/stok'
import Penjualan from './pages/penjualan'
import Karyawan from './pages/karyawan'
import DetailPenjualan from './pages/detailpenjualan'
import DetailKaryawan from './pages/detailkaryawan'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/' element={<Login/>} />
      <Route path='/stok' element={<Stok/>} />
      <Route path='/penjualan' element={<Penjualan/>} />
      <Route path='/detailpenjualan' element={<DetailPenjualan/>} />
      <Route path='/karyawan' element={<Karyawan/>} />
      <Route path='/detailkaryawan' element={<DetailKaryawan/>} />
    </Routes>
  )
}

export default App
