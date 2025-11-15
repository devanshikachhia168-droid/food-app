import './App.css'
import Header from './components/layouts/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import { About } from './components/pages/About'
import { Blog } from './components/pages/Blog'
import { Contact } from './components/pages/Contact'
import { Service } from './components/pages/service'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
