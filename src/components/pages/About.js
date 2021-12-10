import React from 'react'
import {Helmet} from "react-helmet";

import { useTranslation } from 'react-i18next'

import {ReactComponent as MountainLogo} from '../../photos/mountain-logo.svg'
import IntraWebLink from '../util/IntraWebLink.js'
import Navbar from '../util/Navbar.js'
import Footer from '../util/Footer.js'
import PhotoHolder from '../util/PhotoHolder.js'

//photos
import lobby from '../../photos/about/lobby-lg.jpg'
import exterior from '../../photos/about/exterior.jpg'
import biking from '../../photos/about/biking.jpg'
import bay from '../../photos/about/bay.jpg'

const About = () => {
  const {t, i18n} = useTranslation();
  return (
    <div className="bg-background-beige w-screen h-screen overflow-y-scroll overflow-x-hidden">
    <Helmet>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
<meta http-equiv="Content-Language" content="zh-tw"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<meta name="format-detection" content="telephone=yes"></meta>
<title>美崙遊記:花蓮民宿、市區住宿、旅遊行程門票協助</title>
<meta name="Description" content="花蓮民宿住宿平價花蓮市區-美崙遊記民宿,舒適便利空調客房,旅遊租車門票優惠,是近七星潭花蓮港區鬧區夜市各美食景點的優質民宿,民宿網推薦排名"></meta>
<meta name="keywords" content="花蓮民宿,花蓮市區住宿,花蓮旅遊,七星潭,花蓮海洋公園,泛舟,賞鯨,溯溪"></meta>
<meta name="robots" content="index,follow"></meta>
<meta name="rating" content="general"></meta>
<meta name="publisher" content="花蓮 美崙遊記 民宿"></meta>
<meta name="author" content="花蓮 美崙遊記 民宿-Administrator"></meta>
<meta name="copyright" content="花蓮 美崙遊記 民宿"></meta>
<meta name="distribution" content="global"></meta>
    </Helmet>
    <Navbar/>
      <div className="flex flex-row items-center">
      <div className="flex bg-background flex-col flex-grow p-6 sm:p-10 sm:pt-24 w-2/3 items-center text-left py-8">
        <PhotoHolder src={lobby} caption={t("About.lobbycaption")} className="sm:hidden w-full sm:w-3/4"/>
      <h1 className="h3 lg:h3-lg text-grey-darkest text-left w-full sm:w-3/4 hidden sm:block  opacity-50">{t("About.h1")}</h1>
      <h2 className="h2 lg:h2-lg text-warm w-full sm:w-3/4 py-4">
      <div>{t("About.h2-1")}<br></br>{t("About.h2-2")}</div></h2>
      <div className="body lg:body-lg text-warm w-full sm:w-3/4 my-2">{t("About.p1")}</div>
      <PhotoHolder src={exterior} caption={t("About.exteriorcaption")} className="w-full sm:hidden"/>
      <div className="body text-warm w-full sm:w-3/4 my-2">{t("About.p3")}</div>
      <PhotoHolder src={biking} caption={t("About.bikingcaption")} className="w-full sm:hidden"/>
      <div className="body lg:body-lg text-warm w-full sm:w-3/4 my-2">{t("About.p3")}</div>
      <PhotoHolder src={bay} caption={t("About.baycaption")} className="w-full sm:hidden"/>
      <div className="body lg:body-lg text-warm w-full sm:w-3/4 my-2">{t("About.p4")}</div>

      </div>
      <div className="hidden h-full sm:p-10 sm:pt-18 sm:flex flex-col w-1/3 bg-background-beige justify-center items-center">
      <PhotoHolder src={lobby} caption={t("About.lobbycaption")} className="hidden sm:block w-48 xl:w-64 my-2"/>
      <PhotoHolder src={exterior} caption={t("About.exteriorcaption")} className="w-48 xl:w-64 my-2"/>
      <PhotoHolder src={biking} caption={t("About.bikingcaption")} className="w-48 xl:w-64 my-2"/>
      <PhotoHolder src={bay} caption={t("About.baycaption")} className="w-48 xl:w-64 my-2"/>
      </div>
      </div>
    <Footer/>
    </div>  )
}

export default About
