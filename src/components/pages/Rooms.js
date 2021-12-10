import React from 'react'
import {Helmet} from 'react-helmet'
import { useTranslation } from 'react-i18next'

import {ReactComponent as MountainLogo} from '../../photos/mountain-logo.svg'
import Carousel from '../util/Carousel.js'
import Navbar from '../util/Navbar.js'
import Footer from '../util/Footer.js'
import PhotoHolder from '../util/PhotoHolder.js'
import IntraWebLink from '../util/IntraWebLink.js'

//icons from https://mui.com/components/material-icons/
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import ChaletOutlinedIcon from '@mui/icons-material/ChaletOutlined';
import WifiIcon from '@mui/icons-material/Wifi';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined';

import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';

import EmojiFoodBeverageOutlinedIcon from '@mui/icons-material/EmojiFoodBeverageOutlined';
  // <h1 className="mt-20 mx-16 h3 lg:h3-lg text-grey-darkest text-left w-full sm:w-3/4 opacity-50">客房介紹</h1>
//photos
import twoBedroomOne from '../../photos/rooms/2-1.jpg'
import twoBedroomTwo from '../../photos/rooms/2-2.jpg'
import twoBedroomOneLg from '../../photos/rooms/2-1-lg.jpg'
import twoBedroomTwoLg from '../../photos/rooms/2-2-lg.jpg'
import twoBedroomThree from '../../photos/rooms/2-3.jpg'
import twoBedroomFour from '../../photos/rooms/2-4.jpg'
import fourBedroomOne from '../../photos/rooms/4-1.jpg'
import fourBedroomTwo from '../../photos/rooms/4-2.jpg'
import fourBedroomOneLg from '../../photos/rooms/4-1-lg.jpg'
import fourBedroomTwoLg from '../../photos/rooms/4-2-lg.jpg'
import bathroom from '../../photos/rooms/bathroom.jpg'
import lobby from '../../photos/rooms/lobby.jpg'
import lobbyLg from '../../photos/rooms/lobby-lg.jpg'
import lobby2 from '../../photos/rooms/lobby-2.jpg'

const Rooms = ({
  FourBedroomPeakPrice = "",
  FourBedroomOffpeakPrice = "",
  TwoBedroomPeakPrice = "",
  TwoBedroomOffpeakPrice = ""
}) => {
  const {t, i18n} = useTranslation();
  return (<div className="bg-background h-screen overflow-y-scroll">
  <Helmet>
<meta http-equiv="content-type" content="text/html;charset=utf-8"></meta>
<meta http-equiv="Content-Language" content="zh-tw"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<meta name="format-detection" content="telephone=yes"></meta>
<title>美崙遊記:客房介紹、特色、價格</title>
<meta name="Description" content="各式客房介紹,防螨寢具大床,免費飲食品供應,訂房付費入住退房說明"></meta>
<meta name="keywords" content="客房介紹,四人房,雙人房,客房特色,價格,訂房與付費,入住,退房"></meta>
<meta name="robots" content="index,follow"></meta>
<meta name="rating" content="general"></meta>
<meta name="publisher" content="花蓮 美崙遊記 民宿"></meta>
<meta name="author" content="花蓮 美崙遊記 民宿-Administrator"></meta>
<meta name="copyright" content="花蓮 美崙遊記 民宿"></meta>
<meta name="distribution" content="global"></meta>
</Helmet>
    <Navbar/>
    <div>
    <h1 className="h3 hidden sm:block mt-10 sm:mt-24 sm:px-20 mx-6 sm:mx-0 m-1 my-6 lg:h3-lg text-grey-darkest text-left w-full opacity-50">{t("Rooms.h1")}</h1>

      <div className="flex flex-col lg:flex-row mt-10 sm:mt-0 items-center">
        <div className="flex sm:hidden bg-background h-full flex-col flex-grow w-full lg:max-w-49 mb-8 lg:mb-0 items-center text-left">
          <Carousel title={t("Rooms.twoBedroom.title")} imgSources={[twoBedroomOne, twoBedroomTwo, twoBedroomThree, twoBedroomFour, bathroom, lobby, lobby2]} prices={[TwoBedroomPeakPrice, TwoBedroomOffpeakPrice]} caption={t("Rooms.twoBedroom.caption")}/>
        </div>
        <div className="hidden sm:flex bg-background h-full flex-col flex-grow md:px-6 lg:ml-8 mb-8 lg:mb-0 w-full lg:max-w-49 items-center text-left">
          <Carousel title={t("Rooms.twoBedroom.title")} imgSources={[twoBedroomOneLg, twoBedroomTwoLg, twoBedroomThree, twoBedroomFour, bathroom, lobbyLg, lobby2]} prices={[TwoBedroomPeakPrice, TwoBedroomOffpeakPrice]} caption={t("Rooms.twoBedroom.caption")}/>
        </div>
        <div className="border-rooms-carousel"></div>
        <div className="flex sm:hidden mt-8 lg:mt-0 bg-background h-full flex-col flex-grow w-full lg:max-w-49 items-center text-left">
          <Carousel title={t("Rooms.fourBedroom.title")} imgSources={[fourBedroomOne, fourBedroomTwo, bathroom, lobby, lobby2]} prices={[FourBedroomPeakPrice, FourBedroomOffpeakPrice]} caption={t("Rooms.fourBedroom.caption")}/>
        </div>
        <div className="hidden sm:flex  mt-8 lg:mt-0  bg-background h-full flex-col flex-grow md:px-8 lg:mr-8 w-full lg:max-w-49 items-center text-left">
          <Carousel title={t("Rooms.fourBedroom.title")} imgSources={[fourBedroomOneLg, fourBedroomTwoLg, bathroom, lobbyLg, lobby2]} prices={[FourBedroomPeakPrice, FourBedroomOffpeakPrice]} caption={t("Rooms.fourBedroom.caption")}
/>
        </div>
      </div>
      <div className="captions text-grey-dark sm:px-16 m-6"><HelpOutlineOutlinedIcon/> <span className="font-bold">{t("Rooms.help.peak")}</span> {t("Rooms.help.peakConditions")}<span className="font-bold">{t("Rooms.help.offpeak")}</span> {t("Rooms.help.offpeakConditions")}</div>

      <div className="captions bg-background-cool text-grey-dark flex flex-col sm:flex-row">

        <div className="flex sm:px-16 flex-col lg:flex-row w-full">
          <div id="times" className="w-full lg:w-4/12 p-6 flex flex-col">
            <div className="flex flex-row w-full">
              <div className="w-1/2">
                <h3 className="h3 lg:h3-lg text-warm mt-2 mb-5 sm:my-5 mr-6">
                  {t("Rooms.time+amenities.checkin")}
                </h3>
                <div className="genseki text-lg font-normal opacity-75 text-grey-dark">
                  {t("Rooms.time+amenities.checkinTime")}
                </div>
              </div>
              <div className="w-1/2">
                <h3 className="h3 lg:h3-lg text-warm mt-2 mb-5 sm:my-5">
                  {t("Rooms.time+amenities.checkout")}
                </h3>
                <div className="genseki text-lg font-normal opacity-75 text-grey-dark">
                  {t("Rooms.time+amenities.checkoutTime")}
                </div>
              </div>
            </div>

            <div className="body sm:body text-grey-darkest mt-6 md:my-auto">
              {t("Rooms.time+amenities.p1")}
            </div>
          </div>

          <div className="border-rooms-cool"></div>
          <div id="region" className="w-full flex flex-col lg:w-8/12 p-6">
            <div className="flex flex-row">
              <h3 className="h3 lg:h3-lg text-warm mt-2 mb-5 sm:my-5 mr-3 w-1/4">
                {t("Rooms.time+amenities.amenities.h3")}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 my-5 row-auto captions gap-4 text-grey-darkest">
                <div className="flex content-center">
                  <ChaletOutlinedIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>{t("Rooms.time+amenities.amenities.l1")}</div>
                </div>

                <div className="flex content-center">
                  <WifiIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>{t("Rooms.time+amenities.amenities.l2")}</div>
                </div>

                <div className="flex content-center">
                  <TipsAndUpdatesIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>{t("Rooms.time+amenities.amenities.l3")}</div>
                </div>

                <div className="flex content-center">
                  <LiveTvOutlinedIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>{t("Rooms.time+amenities.amenities.l4")}</div>
                </div>

                <div className="flex content-center">
                  <KitchenOutlinedIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>{t("Rooms.time+amenities.amenities.l5")}</div>
                </div>

                <div className="flex content-center">
                  <CleanHandsOutlinedIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>{t("Rooms.time+amenities.amenities.l6")}</div>
                </div>

                <div className="flex content-center">
                  <ShowerOutlinedIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>{t("Rooms.time+amenities.amenities.l7")}</div>
                </div>

                <div className="flex content-center">
                  <AirOutlinedIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>{t("Rooms.time+amenities.amenities.l8")}</div>
                </div>

                <div className="flex content-center">
                  <BedOutlinedIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>{t("Rooms.time+amenities.amenities.l9")}</div>
                </div>

                <div className="flex content-center">
                  <EmojiFoodBeverageOutlinedIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>{t("Rooms.time+amenities.amenities.l10")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="payment" className="mb-6 flex sm:px-16 flex-col lg:flex-row">
        <div id="overview" className="w-full lg:w-1/2 p-6 ">
          <h2 className="h2 lg:h2-lg text-accent mt-2 mb-5 sm:my-5">
            {t("Rooms.reservation+payment.h2")}
          </h2>
          <div className="body sm:body text-grey-darkest">
          {t("Rooms.reservation+payment.p1")}
          </div>
          <div className="card lg:card-lg flex flex-row mt-3">
            <div className="text-right mr-6 text-warm-dark">
              <div>{t("Rooms.reservation+payment.reservation.number")}</div>
              <div>{t("Rooms.reservation+payment.reservation.dayNumber")}</div>
              <div>{t("Rooms.reservation+payment.reservation.email")}</div>
            </div>
            <div className="text-left text-warm">
              <div>0983-661588, 0920-313243({t("Rooms.reservation+payment.reservation.chinese+english")})
              </div>
              <div>03-8228430</div>
              <div>trekinnez@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="border-rooms-warm"></div>
        <div id="region" className="w-full flex flex-col lg:w-1/2 p-6 lg:pl-16">
          <div id="local" className="mb-3">
            <h3 className="h3 lg:h3-lg text-accent my-5">
              {t("Rooms.reservation+payment.regional.h3")}
            </h3>
            <div className="body sm:body text-grey-darkest">
              {t("Rooms.reservation+payment.regional.p1")}
            </div>
            <div className="card lg:card-lg flex flex-row mt-3">
              <div className="text-right mr-6 text-warm-dark">
                <div>{t("Rooms.reservation+payment.regional.bankNumberCaption")}</div>
                <div>{t("Rooms.reservation+payment.regional.accountNumberCaption")}</div>
                <div>{t("Rooms.reservation+payment.regional.accountNameCaption")}</div>
              </div>
              <div className="text-left text-warm">
                <div>{t("Rooms.reservation+payment.regional.bankNumberValue")}</div>
                <div>0091216-0058708</div>
                <div>{t("Rooms.reservation+payment.regional.accountNameValue")}</div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="h3 lg:h3-lg text-accent my-5">
              {t("Rooms.reservation+payment.nonRegional.h3")}
            </h3>
            <div className="body sm:body text-grey-darkest">
                {t("Rooms.reservation+payment.nonRegional.p1")}
            </div>
            <form className="mt-2 sm:mt-4" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
              <input type="hidden" name="cmd" value="_s-xclick"></input>
              <input type="hidden" name="hosted_button_id" value="6RK45AVJZFQ6J"></input>
              <input type="image" src="https://www.paypalobjects.com/zh_TW/TW/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal － 更安全、更簡單的線上付款方式！"></input>
              </form>
          </div>
        </div>
      </div>

      <div id="agreement" className="caption bg-background-cool text-grey-dark sm:px-16 flex flex-col lg:flex-row">
        <div id="cancellation" className="w-full lg:w-1/2 p-6">
          <h2 className="h2 lg:h2-lg text-accent mt-2 mb-5 sm:my-5">
            {t("Rooms.agreement.h2")}
          </h2>
          <h3 className="h3 lg:h3-lg text-warm my-5 pt-2">
            {t("Rooms.agreement.cancellation.h3")}
          </h3>
          <div className="body sm:body text-grey-darkest">
          {t("Rooms.agreement.cancellation.p1")}
          </div>
        </div>
        <div className="border-rooms-cool"></div>
        <div id="changes" className="w-full lg:w-1/2 p-6 sm:pb-10 lg:pl-16">
        <div id="local" className="mb-3">
          <h3 className="h3 lg:h3-lg text-warm my-5">
            {t("Rooms.agreement.changes.h3")}
          </h3>
          <div className="body sm:body text-grey-darkest">
            {t("Rooms.agreement.changes.p1")}
          </div>

        </div>
        <div>
          <h3 className="h3 lg:h3-lg text-warm my-5">
            {t("Rooms.agreement.exceptions.h3")}
          </h3>
          <div className="body sm:body text-grey-darkest">
          {t("Rooms.agreement.exceptions.p1")}
          </div>
        </div>
        </div>
      </div>

      <div id="other" className="caption bg-background text-grey-dark flex flex-col-reverse lg:flex-row">
      <div id="overview" className="w-full sm:pl-16 lg:w-1/2 p-6 bg-background-beige">
          <IntraWebLink title={t("Rooms.packages.title")} verticalTitle={false} body={t("Rooms.packages.body")} linkText={t("Rooms.packages.linkText")} linkRoute="/destinations"/>
      </div>
        <div id="overview" className="w-full sm:px-20 lg:px-16 lg:w-1/2 sm:mx-2 sm:pb-10 lg:m-0 p-6">
          <h2 className="h2 lg:h2-lg text-accent mt-2 mb-5 sm:my-5">
            {t("Rooms.other.h2")}
          </h2>
          <div>
            <h3 className="h3 lg:h3-lg text-warm my-5">
              {t("Rooms.other.allRooms.h3")}
            </h3>
            <div className="body sm:body text-grey-darkest">
          {t("Rooms.other.allRooms.p1")}<br></br>
            </div>
          </div>
          <div>
            <h3 className="h3 lg:h3-lg text-warm my-5">
              {t("Rooms.other.longterm.h3")}
            </h3>
            <div className="body sm:body text-grey-darkest">
              {t("Rooms.other.longterm.p1")}
            </div>
          </div>

        </div>
      </div>
    </div>
    <Footer/>
  </div>)
}

export default Rooms
