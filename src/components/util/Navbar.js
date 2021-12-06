import React from 'react'
import {Link} from 'react-router-dom'
import NavLink from './NavLink.js'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {useState} from 'react'

const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false)

  return (<>
      <div className="sm:hidden z-50 cursor-pointer absolute p-3 text-background-cool" onClick={()=>{setNavOpen(!navOpen)}}>
      {navOpen?
      <MenuOutlinedIcon className="w-12 h-12 text-background-cool"/>
      :
      <CloseOutlinedIcon className="w-12 h-12 text-background-cool"/>
      }
      </div>

      <div className="glass z-20 shadow h-screen w-48 sm:h-12 p-2 pt-3 sm:w-screen absolute top-0 text-background-cool flex flex-col sm:flex-row justify-between content-center px-4 duration-300" style={{
    left:navOpen?"-12rem":"0px"
  }}>

    <div className="hidden sm:inline-block font-semibold genwan text-center">
    <NavLink linkText="《 美崙遊記 》" linkRoute="/"/>
    </div>

    <div className="sm:hidden font-semibold text-base genwan mt-1 text-center">
    <Link to="/">《 美崙遊記 》</Link>
    </div>


    <div className="flex flex-col sm:flex-row relative gap-3 sm:gap-0">
    <NavLink linkText="簡介" linkRoute="/about"/>
    <div className="border-dark"></div>
    <div className="hidden m-auto sm:inline-block">
      <NavLink linkText="觀光指南及地圖" linkRoute="/destinations+map"/>
    </div>
    <div className="sm:hidden m-auto">
      <NavLink linkText="觀光指南" linkRoute="/destinations"/>
    </div>
    <div className="border-dark"></div>
    <NavLink linkText="訂房" linkRoute="/rooms"/>
    <div className="border-dark"></div>
    <NavLink linkText="聯絡資訊" linkRoute="/contact"/>
    <div className="border-dark sm:hidden"></div>
    <div className="sm:hidden m-auto"><NavLink linkText="地圖" linkRoute="/map"/></div>
  </div>

  <div className="font-semibold font-base genwan text-center rounded-full px-4 border-grey-dark" style={{borderWidth:"1.3px"}}>
    <PhoneInTalkOutlinedIcon className="pb-1"/>撥打民宿電話
  </div>

  </div>
</>)
}

export default Navbar
