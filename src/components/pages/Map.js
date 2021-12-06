import React from 'react'
import {ReactComponent as MountainLogo} from '../../photos/mountain-logo.svg'
import IntraWebLink from '../util/IntraWebLink.js'
import Navbar from '../util/Navbar.js'
import Footer from '../util/Footer.js'

const Map = () => {
  return (
    <div className="bg-background-beige h-screen overflow-y-scroll">
    <Navbar/>
      <div>Map</div>
    <Footer/>
    </div>  )
}

export default Map
