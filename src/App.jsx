import './App.css'
import { Box } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import router from './router'




function App() {
  return (
    
    <div className=" md:bg-[url('./assets/images/background.jpg')] h-auto bg-black bg-center bg-fixed">

      
      <RouterProvider router={router} />
      <Footer />
      </div>
    
  )
}

export default App
