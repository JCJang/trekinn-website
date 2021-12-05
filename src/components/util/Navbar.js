import React from 'react'
import NavLink from './NavLink.js'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
const Navbar = () => {
  return (<div className="glass z-50 shadow h-12 p-2 pt-3 w-screen absolute top-0 text-background-cool flex flex-col sm:flex-row justify-between content-center px-8">
    <div className="font-semibold font-base genwan text-center">
      《 美崙遊記 》
    </div>


    <div className="flex flex-col sm:flex-row">
    <NavLink linkText="簡介" linkRoute="/about"/>
    <div className="border-dark"></div>
    <div className="hidden sm:inline-block">
      <NavLink linkText="觀光指南及地圖" linkRoute="/destinations+map"/>
    </div>
    <div className="sm:hidden">
      <NavLink linkText="觀光指南" linkRoute="/destinations"/>
    </div>
    <div className="border-dark"></div>
    <NavLink linkText="訂房" linkRoute="/rooms"/>
    <div className="border-dark"></div>
    <NavLink linkText="聯絡資訊" linkRoute="/contact"/>
    <div className="border-dark sm:hidden"></div>
    <div className="sm:hidden"><NavLink linkText="地圖" linkRoute="/map"/></div>
  </div>

  <div className="font-semibold font-base genwan text-center rounded-full px-4 border-grey-dark" style={{borderWidth:"1.3px"}}>
    <PhoneInTalkOutlinedIcon className="pb-1"/>撥打民宿電話
  </div>

  </div>)
}

export default Navbar
