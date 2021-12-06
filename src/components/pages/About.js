import React from 'react'
import {ReactComponent as MountainLogo} from '../../photos/mountain-logo.svg'
import IntraWebLink from '../util/IntraWebLink.js'
import Navbar from '../util/Navbar.js'
import Footer from '../util/Footer.js'

const About = () => {
  return (
    <div className="bg-background-beige w-screen h-screen overflow-y-scroll overflow-x-hidden">
    <Navbar/>
      <div>About</div>
    <Footer/>
    </div>  )
}

export default About
