import React from 'react'
import {ReactComponent as MountainLogo} from '../../photos/mountain-logo.svg'
import IntraWebLink from '../util/IntraWebLink.js'
import Navbar from '../util/Navbar.js'
import Footer from '../util/Footer.js'

const Contact = () => {
  return (
    <div className="bg-background-beige p-6 sm:p-10 sm:pt-18 w-screen h-screen overflow-y-scroll">
    <Navbar/>
      <div>Contact</div>
    <Footer/>
    </div>  )
}

export default Contact
