import {  Route, Link } from "react-router-dom"
import { Layout, Typography, Space, Switch } from "antd"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="app">
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="main">

        </div>
        <div className="footer">

        </div>
    </div>
  )
}

export default App