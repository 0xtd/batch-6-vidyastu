import Navbar from "../components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Service from "../pages/Service"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Shopping from "../pages/Shopping"
import Footer from "../components/Footer"


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/services" element={<Service />}/>
          <Route path="/shop" element={<Shopping />}/>
          <Route path="/about-us" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
