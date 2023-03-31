import { Outlet } from "react-router-dom"
import Navbar from "./components/header/Navbar"


function App() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
