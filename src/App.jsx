import { Outlet } from "react-router-dom"
import Footer from "./componet/home/Footer"
import Navbar from "./componet/home/Naver"


function App() {


  return (
    <>
      
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
