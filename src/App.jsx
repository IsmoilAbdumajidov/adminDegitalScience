import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Register from './pages/login/Register'
import Admin from './pages/admin/Admin'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import AddKafedra from './pages/AddKafedra'

const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Routes>
        <Route path='/adminLogin' element={<Register />} />
        <Route path='/' element={<Admin />}>
          <Route index element={<AddKafedra />}></Route>
          <Route path='kafedra' element={<AddKafedra />}></Route>
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App