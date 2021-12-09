import React from 'react'
import {Link} from 'react-router-dom'
import NavLink from './NavLink.js'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation();

  return (<>
      <div className="lg:hidden z-50 cursor-pointer absolute p-4 text-background" onClick={()=>{setNavOpen(!navOpen)}}>
      {navOpen?
      <CloseOutlinedIcon className="w-16 h-16 text-accent-red"/>
      :
      <MenuOutlinedIcon className="w-16 h-16 text-accent-blue"/>
      }
      </div>

      <nav className="glass z-20 shadow h-screen w-64 lg:h-12 pt-3 lg:pt-2 p-2 lg:w-nav-lg  absolute top-0 text-background flex flex-col lg:flex-row justify-between content-center px-4 duration-300" style={{
    left:navOpen?"0px":"-16rem"
  }}>

  <div className="hidden lg:block pl-64 font-semibold genwan text-center">
    <NavLink linkText="《 美崙遊記 》" linkRoute="/"/>
    </div>

    <div className="lg:hidden font-semibold text-base genwan mt-3 text-center">
    <Link to="/">《 美崙遊記 》</Link>
    </div>


    <div className="flex flex-col w-full gap-3 lg:gap-0 lg:w-auto lg:flex-row relative">
    <div className="flex lg:block">
    <NavLink linkText="簡介" linkRoute="/about" currentPath={location.pathname}/>
    </div>
    <div className="border-dark opacity-50"></div>

    <div className="flex lg:block">
    <NavLink linkText="訂房" linkRoute="/rooms" currentPath={location.pathname}/>
    </div>

    <div className="border-dark opacity-50"></div>

    <div className="flex lg:block">
      <NavLink linkText="觀光指南及地圖" linkRoute="/destinations+map" currentPath={location.pathname}/>
    </div>


    <div className="border-dark opacity-50"></div>

    <div className="flex lg:block">
    <NavLink linkText="聯絡資訊" linkRoute="/contact" currentPath={location.pathname}/>
    </div>

    <div className="lg:hidden border-dark opacity-50"></div>

    <div className="flex lg:hidden">
    <NavLink linkText="回首頁" linkRoute="/"/>
    </div>


  </div>

  <a href="tel:+886983661588"v className="font-semibold shadow font-base genwan text-center rounded-full pt-1 lg:pt-0 lg:pb-1 px-4 mx-6 border-grey-dark duration-200 hover:bg-accent-red hover:shadow-none" style={{borderWidth:"1.3px"}}>
    <PhoneInTalkOutlinedIcon className="pb-1"/>撥打民宿電話
  </a>

  </nav>
</>)
}

export default Navbar
