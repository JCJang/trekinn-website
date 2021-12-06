import React from 'react'
import {ReactComponent as MountainLogo} from '../../photos/mountain-logo.svg'
import IntraWebLink from '../util/IntraWebLink.js'
import Navbar from '../util/Navbar.js'
import Footer from '../util/Footer.js'

//icons
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Contact = ({
  contacttitle="聯絡我們",
  contactbody1="夜間10點後，訂房工作人員已經休息，無法接聽電話。請傳簡訊、使用LINE聯絡或透過EMail與我們聯繫，我們會儘快回覆您。謝謝。"
}) => {
  return (
    <div className="bg-grey-darkest w-screen h-screen overflow-y-scroll">
    <Navbar/>
          <div className="flex flex-col h-full sm:flex-row items-center content-center text-background-cool p-6 sm:p-10 sm:pt-18">
            <div className="flex flex-col flex-grow w-full sm:w-5/12 items-center text-left sm:text-left py-8">
            <h3 className="h3 lg:h3-lg text-left w-full sm:w-64 opacity-50">{contacttitle}</h3>
            <div className="body py-4 lg:body-lg text-left w-full sm:w-64">{contactbody1}</div>
            </div>

            <div className="sm:p-10 sm:pt-18 grid grid-rows-3 sm:mr-16 w-full sm:w-5/12 justify-center items-center row-gap-1 col-gap-3" style={{gridTemplateColumns:"2.5rem 1fr 1fr"}}>
            <LocalPhoneSharpIcon className="text-accent-blue w-3"/><div className="card">電話、簡訊</div>
            <div className="card">0983-661-588<br></br>03-8228430</div>
            <AlternateEmailSharpIcon className="text-accent-blue w-3"/><div className="card">Email</div><div className="card">trekinnez@gmail.com</div>
            <span className="text-sm font-medium text-accent-blue w-3 tracking-tighter">LINE</span>
            <div className="card">LINE ID</div>
            <div className="card">trekinnez</div>
            <FacebookOutlinedIcon className="text-accent-blue w-3"/>
            <div className="card">Facebook ID</div>
            <div className="card">trekinnez</div>
            </div>
          </div>
          <Footer/>
    </div>
)
}

export default Contact
