import React from 'react'
import {ReactComponent as MountainLogo} from '../../photos/mountain-logo.svg'
import IntraWebLink from '../util/IntraWebLink.js'
import NavbarDark from '../util/NavbarDark.js'
import Footer from '../util/Footer.js'
import {Helmet} from 'react-helmet'
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

<meta http-equiv="content-type" content="text/html;charset=utf-8"></meta>
<meta http-equiv="Content-Language" content="zh-tw"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<meta name="format-detection" content="telephone=yes"></meta>
<title>美崙遊記:聯絡資訊</title>
<meta name="Description" content="歡迎使用電話、簡訊、Line或EMail與我們聯繫"></meta>
<meta name="keywords" content="聯絡,詢問"></meta>
<meta name="robots" content="index,follow"></meta>
<meta name="rating" content="general"></meta>
<meta name="publisher" content="花蓮民宿,花蓮美崙遊記民宿"></meta>
<meta name="author" content="花蓮美崙遊記民宿-Administrator"></meta>
<meta name="copyright" content="花蓮民宿,花蓮美崙遊記民宿"></meta>
<meta name="distribution" content="global"></meta>
    <NavbarDark/>
          <div className="flex flex-col h-full md:flex-row items-center content-center text-background-cool p-6 md:p-10 md:pt-18">
            <div className="flex flex-col md:flex-grow w-full md:w-5/12 items-center text-left md:text-left py-8">
            <h3 className="h3 lg:h3-lg text-left w-full md:w-64 opacity-50">{contacttitle}</h3>
            <div className="body py-4 lg:body-lg text-left w-full md:w-64">{contactbody1}</div>
            </div>

            <div className="md:p-10 md:pt-18 grid grid-rows-3 md:mr-16 w-full md:w-5/12 justify-center items-center row-gap-1 col-gap-3" style={{gridTemplateColumns:"2.5rem 1fr 1fr"}}>
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
