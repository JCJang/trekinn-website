import React from 'react'
import i18n from './../../i18n.js'
import useClickOutside from './useClickOutside'

import {Link} from 'react-router-dom'
import NavLinkDark from './NavLinkDark.js'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import {useState, useEffect, useRef} from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const NavbarDark = () => {
  const {t, i18n} = useTranslation();
  const [navOpen, setNavOpen] = useState(false)
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false)

  const location = useLocation();
  const navRef = useRef()
    useClickOutside(navRef, () => {
      if (navOpen)
        setNavOpen(false)
    })
  return (<>
      <div className="lg:hidden z-50 cursor-pointer absolute p-4 text-background-cool" onClick={()=>{setNavOpen(!navOpen)}}>
      {navOpen?
      <CloseOutlinedIcon className="w-16 h-16 text-accent-red"/>
      :
      <MenuOutlinedIcon className="w-16 h-16 text-accent-blue"/>
      }
      </div>

      <nav ref={navRef} className="glassDark z-20 shadow h-screen w-64 lg:h-12 pt-3 lg:pt-2 p-2 lg:w-nav-lg  absolute top-0 text-background-cool flex flex-col lg:flex-row justify-between content-center px-4 duration-300" style={{
    left:navOpen?"0px":"-16rem"
  }}>

  <div className="hidden lg:block lg:mt-1 pl-64 font-medium genwan text-center">
    <NavLinkDark linkText={t("Navbar.trekinn")} linkRoute="/"/>
    </div>

    <div className="lg:hidden font-medium text-base genwan mt-3 text-center">
    <Link to="/">{t("Navbar.trekinn")}</Link>
    </div>


    <div className="flex flex-col w-full gap-3 lg:gap-0 lg:w-auto lg:mt-1 lg:flex-row relative">
    <div className="flex lg:block">
    <NavLinkDark linkText={t("Navbar.about")} linkRoute="/about" currentPath={location.pathname}/>
    </div>
    <div className="border-dark opacity-50"></div>

    <div className="flex lg:block">
    <NavLinkDark linkText={t("Navbar.rooms")} linkRoute="/rooms" currentPath={location.pathname}/>
    </div>

    <div className="border-dark opacity-50"></div>

    <div className="flex lg:block">
      <NavLinkDark linkText={t("Navbar.destinations+map")} linkRoute="/destinations+map" currentPath={location.pathname}/>
    </div>


    <div className="border-dark opacity-50"></div>

    <div className="flex lg:block">
    <NavLinkDark linkText={t("Navbar.contact")} linkRoute="/contact" currentPath={location.pathname}/>
    </div>

    <div className="lg:hidden border-dark opacity-50"></div>

    <div className="flex lg:hidden">
    <NavLinkDark linkText={t("Navbar.home")} linkRoute="/"/>
    </div>


  </div>
<div className="flex flex-col gap-1 lg:flex-row">
  <a href="tel:+886983661588" className="font-medium shadow font-base genwan text-center rounded-full py-2 px-4 mx-6 lg:mr-0 border-grey-dark duration-200 hover:bg-accent-red hover:shadow-none items-center flex gap-1" style={{borderWidth:"1.3px"}}>
  <div class="flex items-center mx-auto">
    <PhoneInTalkOutlinedIcon className=""/>{t("Navbar.callus")}
  </div>
  </a>

  {t("Navbar.language")==="en"?
  <div onClick={()=>{ setLanguageDropdownOpen(false); i18n.changeLanguage(t("Navbar.language"))}} className="font-medium shadow font-base genwan text-center rounded-full py-2 px-4 mx-6 lg:ml-2 border-grey-dark duration-200 hover:bg-accent-blue hover:shadow-none items-center flex gap-1" style={{borderWidth:"1.3px", cursor:"pointer"}}>
  <div class="flex items-center mx-auto">
    <LanguageOutlinedIcon className=""/>{t("Navbar.changeTo")}
  </div>
  </div>
  :
  <>
      <button type="button" onClick={()=>setLanguageDropdownOpen(!languageDropdownOpen)} className="font-medium shadow font-base genwan flex items-center gap-1 text-center rounded-full py-2 lg:py-0 px-4 mx-6 mt-2 my-3 lg:my-0 lg:ml-2 lg:pt-0.5 border-grey-dark duration-200 hover:bg-accent-blue hover:shadow-none" style={{borderWidth:"1.3px"}} id="menu-button" aria-expanded="true" aria-haspopup="true">
        <div class="mx-auto">

        <LanguageOutlinedIcon className="lg:pb-1"/>
        中文版
        <ExpandMoreOutlinedIcon className="lg:pb-1"/>
        </div>
      </button>
      <div className="bg-background lg:origin-top-right absolute origin-bottom bottom-2 lg:bottom-auto mb-16 lg:mb-0 mr-12 lg:right-0 lg:mt-9 w-56 rounded-md shadow-lg bg-transparent focus:outline-none" style={{display:!languageDropdownOpen && "none"}} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div className="" role="none">
          <div className="text-center py-2 text-accent hover:bg-accent-blue hover:shadow-none" style={{cursor:"pointer"}} onClick={()=>{i18n.changeLanguage("zhtw")}}>繁體</div>
          <div className="text-center py-2 text-accent hover:bg-accent-blue hover:shadow-none" style={{cursor:"pointer"}} onClick={()=>{i18n.changeLanguage("zhcn")}}>简体</div>
      </div>
  </div>
  </>
}
</div>
  </nav>
</>)
}

export default NavbarDark
