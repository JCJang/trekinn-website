import React from 'react'
import {ReactComponent as MountainLogo} from '../../photos/mountain-logo.svg'
import IntraWebLink from '../util/IntraWebLink.js'
import Navbar from '../util/Navbar.js'
import Footer from '../util/Footer.js'

const Destinations = () => {
  return (
    <div className="bg-background-beige w-screen h-screen overflow-y-scroll">
    <Navbar/>
      <div>Destinations</div>
    <Footer/>
    </div>
  )
}

export default Destinations
