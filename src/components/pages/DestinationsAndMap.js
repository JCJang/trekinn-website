import React from 'react'
import {Helmet} from "react-helmet";

import { useTranslation } from 'react-i18next'

import {ReactComponent as MountainLogo} from '../../photos/mountain-logo.svg'
import Carousel from '../util/Carousel.js'
import Navbar from '../util/Navbar.js'
import Footer from '../util/Footer.js'
import PhotoHolder from '../util/PhotoHolder.js'
import IntraWebLink from '../util/IntraWebLink.js'

//photos
import lakePeaceful from '../../photos/destinations/lake-peaceful.jpg'
import tarokoTrial from '../../photos/destinations/taroko-trail.jpg'
import lakeCanoing from '../../photos/destinations/lake-canoing.jpg'
import hualienCoast from '../../photos/destinations/hualien-coast.jpg'

// <h1 className="mt-20 mx-16 h3 lg:h3-lg text-grey-darkest text-left w-full sm:w-3/4 opacity-50">客房介紹</h1>

const DestinationsAndMap = () => {
  const {t, i18n} = useTranslation();

  return (<div className="bg-background h-screen overflow-y-scroll">
    <Helmet>
<meta http-equiv="content-type" content="text/html;charset=utf-8"></meta>
<meta http-equiv="Content-Language" content="zh-tw"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<meta name="format-detection" content="telephone=yes"></meta>
<title>{t("DestinationsAndMap.title")}</title>
<meta name="Description" content="民宿重要資訊公告,花蓮 景點 行程 活動 美食,花蓮民宿 住宿 合作商家"></meta>
<meta name="keywords" content="花蓮民宿資訊,花蓮景點,花蓮旅遊,花蓮行程,花蓮活動,花蓮美食,花蓮好吃"></meta>
<meta name="robots" content="index,follow"></meta>
<meta name="rating" content="general"></meta>
<meta name="publisher" content="花蓮 美崙遊記 民宿"></meta>
<meta name="author" content="花蓮 美崙遊記 民宿-Administrator"></meta>
<meta name="copyright" content="花蓮 美崙遊記 民宿"></meta>
<meta name="distribution" content="global"></meta>
       </Helmet>
    <Navbar/>
    <div>
      <div id="payment" className="sm:mb-6 flex sm:px-16 sm:py-6 pt-2 sm:pt-12 sm:px-20 flex-col bg-background-cool">

        <div className="flex flex-col  lg:flex-row">
          <div id="overview" className="w-full flex-col-reverse sm:flex-col lg:w-1/2 p-6 ">
            <h1 className="h3 hidden sm:block my-6 lg:h3-lg text-grey-darkest text-left w-full opacity-50">{t("DestinationsAndMap.h1")}</h1>
            <h2  className={t("Navbar.language")!=="en"
            ?
            "h2 lg:h2-lg lg:mb-6 text-accent tracking-wide"
            :
            "h2 lg:h2-lg lg:mb-6 text-accent tracking-widest"
          }>
              {t("DestinationsAndMap.destinations+traffic.h2")}
            </h2>
            <div className="card lg:card-lg flex flex-row mt-3 shadow-xl" style={{
                borderRadius: "7px",
                border: "1.5px solid #c4c4c4",
                height: "22rem"
              }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12260.32208819209!2d121.62286412301299!3d23.995227456828072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34689e2baebff605%3A0x92d1b4b981f0171c!2zOTcw6Iqx6JOu57ij6Iqx6JOu5biC5Lit6IiI6LevMTc56Jmf!5e0!3m2!1szh-TW!2stw!4v1462847137894" width="100%" height="100%" frameborder="0" style={{
                  border: "0"
                }} allowfullscreen=""></iframe>
            </div>
            <div className="self-end text-right captions mt-2 text-grey-dark">
              <a href="https://goo.gl/maps/eNXLrehNP472" target="_blank">{t("DestinationsAndMap.destinations+traffic.mapcaptions")}</a>
            </div>

            <a className="lg:hidden h3 lg:h3-lg map-btn bg-background text-accent self-end text-center mt-3 lg:mt-6" name="GotoGoogleMap" type="button" href='https://goo.gl/maps/eNXLrehNP472' target="_blank">{t("DestinationsAndMap.destinations+traffic.mapbutton")}</a>
          </div>
          <div className="border-rooms-cool"></div>
          <div id="region" className="w-full flex flex-col lg:w-1/2 p-6 lg:pl-16">
            <div id="local" className="mb-3 lg:mt-16 lg:pt-2">
              <div className="body sm:body text-grey-darkest">
                  {t("DestinationsAndMap.destinations+traffic.p1")}<span className='text-grey-dark'>               {t("DestinationsAndMap.destinations+traffic.p2")}</span>                 {t("DestinationsAndMap.destinations+traffic.p3")}
              </div>
              <div className="card grid lg:card-lg flex flex-row mt-3 grid-cols-2 gap-x-6 gap-y-2">
                <div className="text-right text-grey-dark">
                    <a href="https://goo.gl/maps/SdUnjRRLac62" target="_blank">
                      {t("DestinationsAndMap.destinations+traffic.l1")}</a>
                  </div>
                  <div className="text-left text-grey-darkest">
                    <div>5.3 {t("units.km")}, 13 {t("units.min")}</div>
                  </div>
                  <div className="text-right text-grey-dark">
                    <a href="https://goo.gl/maps/ihEASB1PnYs" target="_blank">
                      {t("DestinationsAndMap.destinations+traffic.l2")}</a>
                  </div>

                  <div className="text-left text-grey-darkest">
                    <div>4.8 {t("units.km")}, 11 {t("units.min")}</div>
                    </div>
                  <div className="text-right text-grey-dark">
                    <a href="https://goo.gl/maps/pzg8NiHVVnr" target="_blank">
                      {t("DestinationsAndMap.destinations+traffic.l3")}</a>
                  </div>

                  <div className="text-left text-grey-darkest">
                  <div>3.4 {t("units.km")}, 8 {t("units.min")}</div>
                  </div>

                  <div className="text-right text-grey-dark">
                    <a href="https://goo.gl/maps/FtBv1AmhT9U2" target="_blank">
                      {t("DestinationsAndMap.destinations+traffic.l4")}</a>
                  </div>

                  <div className="text-left text-grey-darkest">
                  <div>5.3 {t("units.km")}, 11 {t("units.min")}</div>
                  </div>
                  <div className="text-right text-grey-dark">
                    <a href="https://goo.gl/maps/AWRmLcdfsaE2" target="_blank">
                      {t("DestinationsAndMap.destinations+traffic.l5")}</a>
                  </div>


                  <div className="text-left text-grey-darkest">
                  <div>3.5 {t("units.km")}, 10 {t("units.min")}</div>
                  </div>

                  <div className="text-right text-grey-dark">
                    <a href="https://goo.gl/maps/jiNoTa3kut62" target="_blank">
                      {t("DestinationsAndMap.destinations+traffic.l6")}</a>
                  </div>

                  <div className="text-left text-grey-darkest">
                  <div>3.5 {t("units.km")}, 10 {t("units.min")}</div>
                  </div>
                  <div className="text-right text-grey-dark">
                    <a href="https://goo.gl/maps/BFhoyMzW1ft" target="_blank">
                      {t("DestinationsAndMap.destinations+traffic.l7")}</a>
                  </div>


                  <div className="text-left text-grey-darkest">
                  <div>21 {t("units.km")}, 35 {t("units.min")}</div>
                  </div>

                  <div className="text-right text-grey-dark">
                    <a href="https://goo.gl/maps/CpQ7zZhycy72" target="_blank">
                      {t("DestinationsAndMap.destinations+traffic.l8")}</a>
                  </div>

                  <div className="text-left text-grey-darkest">
                  <div>1.9 {t("units.km")}, 5 {t("units.min")}</div>
                  </div>

                  <div className="text-right text-grey-dark">
                    <a href="https://goo.gl/maps/DfGwa2Cx8mP2" target="_blank">
                      {t("DestinationsAndMap.destinations+traffic.l9")}</a>
                  </div>

                  <div className="text-left text-grey-darkest">
                  <div>9.4 {t("units.km")}, 20 {t("units.min")}</div>
                  </div>

                  <div className="text-right text-grey-dark">
                    <a href="https://goo.gl/maps/3C4VQiMxbFK2" target="_blank">
                      {t("DestinationsAndMap.destinations+traffic.l10")}</a>
                  </div>

                  <div className="text-left text-grey-darkest">
                  <div>14.5 {t("units.km")}, 25 {t("units.min")}</div>
                  </div>

                  <div className="text-right text-grey-dark">
                    <a href="https://goo.gl/maps/cFaq1jThk4o" target="_blank">
                      {t("DestinationsAndMap.destinations+traffic.l11")}</a>
                  </div>

                  <div className="text-left text-grey-darkest">
                  <div>22.6 {t("units.km")}, 34 {t("units.min")}</div>
                  </div>
                </div>

                </div>
              </div>
            </div>

          </div>
        </div>

      <div id="agreement" className="captions flex flex-col lg:flex-row text-grey-dark sm:px-16 lg:flex-row">
        <div className="w-full lg:w-3/5 p-6">
          <h2  className={t("Navbar.language")!=="en"
          ?
          "h2 lg:h2-lg text-accent mt-2 mb-5 sm:my-5 tracking-wide"
          :
          "h2 lg:h2-lg text-accent mt-2 mb-5 sm:my-5 tracking-widest"
        }
          >
            {t("DestinationsAndMap.packages.h2")}
          </h2>
          <h3 className="h3 lg:h3-lg text-warm my-5">
          {t("DestinationsAndMap.packages.h3-1")}
          </h3>
          <div className="body sm:body text-grey-darkest">
          {t("DestinationsAndMap.packages.p1")}
          </div>
          <h3 className="h3 lg:h3-lg text-warm  mt-2 mb-5 sm:my-5">
          {t("DestinationsAndMap.packages.h3-2")}
          </h3>
          <div className="body sm:body text-grey-darkest">
          {t("DestinationsAndMap.packages.p2")}
          </div>
          <h3 className="h3 lg:h3-lg text-warm my-5">
          {t("DestinationsAndMap.packages.h3-3")}
          </h3>
          <div className="body sm:body text-grey-darkest">
          {t("DestinationsAndMap.packages.p3")}
          </div>
        </div>

        <div className="w-full lg:w-2/5 lg:pl-16 p-6">
          <div className="body sm:body text-grey-darkest mt-2">
            <PhotoHolder src={lakeCanoing} caption=          {t("DestinationsAndMap.packages.lakeCanoingCaption")}/>
          </div>

          <div className="body sm:body text-grey-darkest mt-2">
            <PhotoHolder src={hualienCoast} caption={t("DestinationsAndMap.packages.hualienCoastCaption")}/>
          </div>

          <div className="body sm:body text-grey-darkest mt-2">
            <PhotoHolder src={tarokoTrial} caption={t("DestinationsAndMap.packages.tarokoTrialCaption")}/>
          </div>
        </div>
      </div>
      <div className="captions bg-background-cool text-grey-dark flex flex-col sm:flex-row">
        <div className="flex sm:px-16 flex-col lg:flex-row w-full">
          <div id="region" className="w-full flex flex-col p-6">
            <h2  className={t("Navbar.language")!=="en"
            ?
            "h2 lg:h2-lg text-accent mt-2 mb-5 sm:my-5 tracking-wide"
            :
            "h2 lg:h2-lg text-accent mt-2 mb-5 sm:my-5 tracking-widest"
          }
            >
            {t("DestinationsAndMap.glossary.h2")}
            </h2>

            <div className="flex flex-row">

              <h3 className="h3 lg:h3-lg text-warm my-5 mr-3 w-1/4">
              {t("DestinationsAndMap.glossary.activities.h3")}
              </h3>

              <div className="grid-link grid grid-cols-2 w-3/4 md:grid-cols-3 sm:grid-cols-4 my-5 row-auto captions gap-y-3  text-grey-darkest">

                <div>
                  <a href="http://www.taroko.gov.tw/" target="_blank">              {t("DestinationsAndMap.glossary.activities.l1")}</a>
                </div>
                <div>
                  <a href="http://www.eastcoast-nsa.gov.tw/" target="_blank">{t("DestinationsAndMap.glossary.activities.l2")}</a>
                </div>
                <div>
                  <a href="https://www.facebook.com/pinegarden1943" target="_blank">{t("DestinationsAndMap.glossary.activities.l3")}</a>
                </div>
                <div>
                  <a href="http://www.yoshino793.com.tw/" target="_blank">{t("DestinationsAndMap.glossary.activities.l4")}</a>
                </div>
                <div>
                  <a href="http://www.erv-nsa.gov.tw/" target="_blank">{t("DestinationsAndMap.glossary.activities.l5")}</a>
                </div>
                <div>
                  <a href="http://pujols.pixnet.net/blog/post/20598159-%5B%E8%8A%B1%E8%93%AE%5D%E4%B8%83%E6%98%9F%E6%BD%AD" target="_blank">{t("DestinationsAndMap.glossary.activities.l6")}</a>
                </div>
                <div>
                  <a href="http://www.erv-nsa.gov.tw/user/article.aspx?Lang=1&amp;SNo=03000108" target="_blank">{t("DestinationsAndMap.glossary.activities.l7")}</a>
                </div>
                <div>
                  <a href="https://www.erv-nsa.gov.tw/zh-tw/attractions/detail/39" target="_blank">{t("DestinationsAndMap.glossary.activities.l8")}</a>
                </div>
                <div>
                  <a href="https://www.taisugar.com.tw/Resting/hualian/CP2.aspx?n=12037" target="_blank">{t("DestinationsAndMap.glossary.activities.l9")}</a>
                </div>
                <div>
                  <a href="http://www.farglory-oceanpark.com.tw/index.php?site=1" target="_blank">{t("DestinationsAndMap.glossary.activities.l10")}</a>
                </div>
                <div>
                  <a href="http://www.skcf.com.tw/" target="_blank">{t("DestinationsAndMap.glossary.activities.l11")}</a>
                </div>
                <div>
                  <a href="http://www.eastsea.com.tw/" target="_blank">{t("DestinationsAndMap.glossary.activities.l12")}</a>
                </div>
                <div>
                  <a href="http://www.huadong.com.tw/" target="_blank">{t("DestinationsAndMap.glossary.activities.l13")}</a>
                </div>
                <div>
                  <a href="http://www.riverking.com.tw/main.htm" target="_blank">{t("DestinationsAndMap.glossary.activities.l14")}</a>
                </div>
                <div>
                  <a href="https://www.stay-here.com.tw/hualien-fishing-port/" target="_blank">{t("DestinationsAndMap.glossary.activities.l15")}</a>
                </div>

              </div>
            </div>
            <div className="border-destinations-cool"></div>

            <div className="flex flex-row">

              <h3 className="h3 lg:h3-lg text-warm my-5 mr-3 w-1/4">
                {t("DestinationsAndMap.glossary.food.h3")}
              </h3>

              <div className="grid-link grid grid-cols-2 w-3/4 md:grid-cols-3 sm:grid-cols-4 my-5 row-auto captions gap-y-3 text-grey-darkest">
                <div>
                  <a href="http://www.dongdamen.com.tw/" target="_blank">                {t("DestinationsAndMap.glossary.food.l1")}</a>
                </div>
                <div>
                  <a href="https://yoti.life/hualien-food-5/" target="_blank">{t("DestinationsAndMap.glossary.food.l2")}</a>
                </div>
                <div>
                  <a href="http://g8906011.pixnet.net/blog/post/436762762-%E8%8A%B1%E8%93%AE%E5%B8%82--%E5%AD%94%E8%A8%98%E5%B0%8F%E9%A4%A8" target="_blank">{t("DestinationsAndMap.glossary.food.l3")}</a>
                </div>
                <div>
                  <a href="http://match000.pixnet.net/blog/post/39134237-(花蓮)鐘老爹牛肉麵-清燉牛肉麵及蹄花麵" target="_blank">{t("DestinationsAndMap.glossary.food.l4")}</a>
                </div>
                <div>
                  <a href="http://rdoglm.pixnet.net/blog/post/156336752-♥-美食-♥--花蓮市【鵝肉先生】鮮嫩到不行" target="_blank">{t("DestinationsAndMap.glossary.food.l5")}</a>
                </div>
                <div>
                  <a href="http://blog.xuite.net/cga.jackl/tripneat/40009081" target="_blank">{t("DestinationsAndMap.glossary.food.l6")}</a>
                </div>
                <div>
                  <a href="https://vivawei.tw/haipu-oyster/" target="_blank">{t("DestinationsAndMap.glossary.food.l7")}</a>
                </div>
                <div>
                  <a href="https://alina00.com/hualien-bomb-onioncake/" target="_blank">{t("DestinationsAndMap.glossary.food.l8")}</a>
                </div>
                <div>
                  <a href="https://yoti.life/hualien-food-532/" target="_blank">{t("DestinationsAndMap.glossary.food.l9")}</a>
                </div>
                <div>
                  <a href="http://iamjulia.pixnet.net/blog/post/28201471-（花蓮市）蹦康肉丸" target="_blank">{t("DestinationsAndMap.glossary.food.l10")}</a>
                </div>
                <div>
                  <a href="http://jesse0218.pixnet.net/blog/post/28582091-【花蓮】一碗小羊肉-花蓮好吃的一碗小羊肉" target="_blank">{t("DestinationsAndMap.glossary.food.l11")}</a>
                </div>
                <div>
                  <a href="http://www.ebisu.com.tw/" target="_blank">{t("DestinationsAndMap.glossary.food.l12")}</a>
                </div>
                <div>
                  <a href="http://www.derli.com.tw/" target="_blank">{t("DestinationsAndMap.glossary.food.l13")}</a>
                </div>
                <div>
                  <a href="http://janotts.pixnet.net/blog/post/23648579-讓我愛上麻糬的花蓮糬王～曾記麻糬" target="_blank">{t("DestinationsAndMap.glossary.food.l14")}</a>
                </div>
                <div>
                  <a href="http://yoti.life/hualien-food-132/" target="_blank">{t("DestinationsAndMap.glossary.food.l15")}</a>
                </div>
                <div>
                  <a href="https://www.facebook.com/pages/category/Diner/%E5%A4%96%E5%A9%86%E5%AE%B6%E9%A4%90%E9%A4%A8-106116654207613/" target="_blank">{t("DestinationsAndMap.glossary.food.l16")}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="captions bg-background-beige text-warm flex flex-col sm:flex-row">
        <div className="flex sm:px-16 flex-col lg:flex-row w-full">
          <div id="region" className="w-full flex flex-col p-6">
            <h2  className={t("Navbar.language")!=="en"
            ?
            "h2 lg:h2-lg text-accent mt-2 mb-5 sm:my-5 tracking-wide"
            :
            "h2 lg:h2-lg text-accent mt-2 mb-5 sm:my-5 tracking-widest"
          }
            >
              {t("DestinationsAndMap.other.h2")}
            </h2>

            <div className="flex flex-row">

              <h3 className="h3 lg:h3-lg text-warm my-5 mr-3 w-1/4">
                {t("DestinationsAndMap.other.related.h3")}
              </h3>

              <div className="grid-link grid grid-cols-2 w-3/4 md:grid-cols-3 sm:grid-cols-4 my-5 row-auto captions gap-y-3  text-grey-darkest">

                <div>
                  <a href="http://tour-hualien.hl.gov.tw/" target="_blank">{t("DestinationsAndMap.other.related.l1")}</a>
                </div>
                <div>
                  <a href="https://www.railway.gov.tw/tra-tip-web/tip" target="_blank">{t("DestinationsAndMap.other.related.l2")}</a>
                </div>
                <div>
                  <a href="http://www.hulairport.gov.tw/" target="_blank">{t("DestinationsAndMap.other.related.l3")}</a>
                </div>
                <div>
                  <a href="https://www.motc.gov.tw/ch/home.jsp?id=4&amp;parentpath=0" target="_blank">{t("DestinationsAndMap.other.related.l4")}</a>
                </div>
                <div>
                  <a href="http://www.hualienbus.com.tw/bus/hualien_bus.php" target="_blank">{t("DestinationsAndMap.other.related.l5")}</a>
                </div>
                <div>
                  <a href="https://www.facebook.com/TarokoBus/" target="_blank">{t("DestinationsAndMap.other.related.l6")}</a>
                </div>

              </div>
            </div>
            <div className="border-destinations-warm"></div>

            <div className="flex flex-row">

              <h3 className="h3 lg:h3-lg text-warm my-5 mr-3 w-1/4">
                {t("DestinationsAndMap.other.partner.h3")}
              </h3>

              <div className="grid-link grid grid-cols-2 w-3/4 md:grid-cols-3 sm:grid-cols-4 my-5 row-auto captions gap-y-3 text-grey-darkest">
              <div>
                <a href="http://booking.com" target="_blank">{t("DestinationsAndMap.other.partner.l1")}</a>
              </div>
              <div>
                <a href="http://www.e-go.com.tw/" target="_blank">{t("DestinationsAndMap.other.partner.l2")}</a>
              </div>
              <div>
                <a href="http://www.huadong.com.tw/" target="_blank">{t("DestinationsAndMap.other.partner.l3")}</a>
              </div>
              <div>
                <a href="http://www.eastsea.com.tw/" target="_blank">{t("DestinationsAndMap.other.partner.l4")}</a>
              </div>
              <div>
                <a href="http://www.riverking.com.tw/" target="_blank">{t("DestinationsAndMap.other.partner.l5")}</a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <Footer/>
  </div>)
}

export default DestinationsAndMap
