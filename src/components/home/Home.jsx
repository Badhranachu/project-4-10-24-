import React from 'react'
import { Topbar } from './Topbar'
import Sidebar from './Sidebar'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Topbar/>
        <Sidebar/>
        <h1 align="center">WELCOME TO BEKOLA</h1>
        <h2 align="center">"IF THE SHOES FITS,BUY it!!" </h2>
        <h3 align="center">-imelda marcos </h3>

    </div>
  )
}

export default Home