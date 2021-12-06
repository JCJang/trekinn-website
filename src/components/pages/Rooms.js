import React from 'react'
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
import twoBedroomThree from '../../photos/rooms/2-3.jpg'
import twoBedroomFour from '../../photos/rooms/2-4.jpg'
import fourBedroomOne from '../../photos/rooms/4-1.jpg'
import fourBedroomTwo from '../../photos/rooms/4-2.jpg'
import bathroom from '../../photos/rooms/bathroom.jpg'
import lobby from '../../photos/rooms/lobby.jpg'
import lobby2 from '../../photos/rooms/lobby-2.jpg'

const Rooms = ({
  FourBedroomPeakPrice = "2200",
  FourBedroomOffpeakPrice = "1800",
  TwoBedroomPeakPrice = "1500",
  TwoBedroomOffpeakPrice = "1200"
}) => {
  return (<div className="bg-background h-screen overflow-y-scroll">
    <Navbar/>
    <div>

      <div className="flex flex-col lg:flex-row items-center mt-16">
        <div className="flex bg-background h-full flex-col flex-grow md:px-6 w-full lg:max-w-49 items-center text-left">
          <Carousel title="精緻雙人房" imgSources={[twoBedroomOne, twoBedroomTwo, twoBedroomThree, twoBedroomFour, bathroom, lobby, lobby2]} prices={[TwoBedroomPeakPrice, TwoBedroomOffpeakPrice]} caption="6~8坪空間，一大床(6尺)，淋浴設施，8坪可加床。"/>
        </div>
        <div className="border-rooms-carousel"></div>
        <div className="flex bg-background h-full flex-col flex-grow md:px-8 w-full lg:max-w-49 items-center text-left">
          <Carousel title="溫馨四人房" imgSources={[fourBedroomOne, fourBedroomTwo, bathroom, lobby, lobby2]} prices={[FourBedroomPeakPrice, FourBedroomOffpeakPrice]} caption="9坪空間，兩大床(5尺)，有陽台，淋浴設施，可加床。

"/>
        </div>
      </div>
      <div className="captions text-grey-dark px-16 py-6"><HelpOutlineOutlinedIcon/>
        假日 指連續假日、週五、週六。部分房型的寒暑假期間。平日 指週日至週四。以上不含農曆新年假期，春節優惠價格於年前公告。</div>

      <div className="captions bg-background-cool text-grey-dark flex flex-col sm:flex-row">

        <div className="flex sm:px-16 flex-col lg:flex-row w-full">
          <div id="times" className="w-full lg:w-4/12 sm:p-6 flex flex-col">
            <div className="flex flex-row w-full">
              <div className="w-1/2">
                <h3 className="h3 lg:h3-lg text-warm my-5 mr-6">
                  入住
                </h3>
                <div className="genseki text-lg font-normal opacity-75 text-grey-dark">
                  下午 15:00 後
                </div>
              </div>
              <div className="w-1/2">
                <h3 className="h3 lg:h3-lg text-warm my-5">
                  退房
                </h3>
                <div className="genseki text-lg font-normal opacity-75 text-grey-dark">
                  中午 12:00 前
                </div>
              </div>
            </div>

            <div className="body sm:body text-grey-darkest mt-6 sm:my-auto">
              住房旅客必須提供本人身分證 (或護照)，以便查核登記。若需提早入住，請事先告知。
            </div>
          </div>

          <div className="border-rooms-cool"></div>
          <div id="region" className="w-full flex flex-col lg:w-8/12 sm:p-6">
            <div className="flex flex-row">
              <h3 className="h3 lg:h3-lg text-warm my-5 mr-3 w-1/4">
                設施
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 my-5 row-auto captions gap-4 text-grey-darkest">
                <div className="flex content-center">
                  <ChaletOutlinedIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>三菱恆溫變頻空調</div>
                </div>

                <div className="flex content-center">
                  <WifiIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>免費無線寬頻上網</div>
                </div>

                <div className="flex content-center">
                  <TipsAndUpdatesIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>高級壁飾，西式照明</div>
                </div>

                <div className="flex content-center">
                  <LiveTvOutlinedIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>有線電視頻道</div>
                </div>

                <div className="flex content-center">
                  <KitchenOutlinedIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>小尺寸冰箱</div>
                </div>

                <div className="flex content-center">
                  <CleanHandsOutlinedIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>個人衛浴用品供應</div>
                </div>

                <div className="flex content-center">
                  <ShowerOutlinedIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>按摩淋浴</div>
                </div>

                <div className="flex content-center">
                  <AirOutlinedIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>吹風機</div>
                </div>

                <div className="flex content-center">
                  <BedOutlinedIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>高級床墊，防螨寢具</div>
                </div>

                <div className="flex content-center">
                  <EmojiFoodBeverageOutlinedIcon className="text-accent-blue mb-1 mr-2 text-accent-blue"/>
                  <div>安全快燒熱水瓶，免費茶包、咖啡包、飲料供應</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="payment" className="mb-6 flex flex-col lg:flex-row">
        <div id="overview" className="w-full lg:w-1/2 sm:p-6 sm:px-16">
          <h2 className="h2 lg:h2-lg text-accent my-5">
            訂房與付費
          </h2>
          <div className="body sm:body text-grey-darkest">
            您可電話或網路預約訂房，並於訂房後二日內支付住宿費之50%做為訂金。支付訂金後煩請告知我們，我們將以實際收到訂金，才確定完成訂房手續，不便之處敬請見諒。餘款現場支付。訂房後，若未能在指定時間內匯款，將自動取消訂房，不另行通知，不便之處敬請見諒。
          </div>
          <div className="card lg:card-lg flex flex-row mt-3">
            <div className="text-right mr-6 text-warm-dark">
              <div>訂房專線：</div>
              <div>日間：</div>
              <div>聯絡信箱：</div>
            </div>
            <div className="text-left text-warm">
              <div>0983-661588, 0920-313243(中英文)
              </div>
              <div>03-8228430</div>
              <div>trekinnez@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="border-rooms-warm"></div>
        <div id="region" className="w-full flex flex-col lg:w-1/2 sm:p-6 sm:px-16">
          <div id="local" className="mb-3">
            <h3 className="h3 lg:h3-lg text-accent my-5">
              台灣境內訂房
            </h3>
            <div className="body sm:body text-grey-darkest">
              請將訂金匯入以下郵局帳戶 :
            </div>
            <div className="card lg:card-lg flex flex-row mt-3">
              <div className="text-right mr-6 text-warm-dark">
                <div>訂房帳號：</div>
                <div>局帳號：</div>
                <div>戶名：</div>
              </div>
              <div className="text-left text-warm">
                <div>郵局 (金融代碼 700)</div>
                <div>0091216-0058708</div>
                <div>林億</div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="h3 lg:h3-lg text-accent my-5">
              非台灣境內訂房
            </h3>
            <div className="body sm:body text-grey-darkest">
              可採用信用卡或PayPal網路支付訂金。請點選下面按鈕，輸入訂金金額(以台幣NT或TWD計費)，再填入信用卡相關資料或登入您的PayPal帳號完成付款。
            </div>
          </div>
        </div>
      </div>

      <div id="agreement" className="caption bg-background-cool text-grey-dark px-16 flex flex-col sm:flex-row">
        <div id="cancellation" className="w-full sm:w-1/2"></div>
        <div className="border-rooms-cool"></div>
        <div id="changes" className="w-full sm:w-1/2"></div>
      </div>

      <div id="other" className="caption bg-background text-grey-dark flex flex-col sm:flex-row">
        <div id="planning" className="w-full sm:w-1/2"><IntraWebLink title="交通與活動" body="只要資訊充足，花蓮蠻適合自由行。我們會提供協助及諮詢：代辦泛舟、賞鯨、溯溪等活動，花蓮海洋公園、兆豐農場優惠門票及各種套裝行程，代租交通工具。" linkText="交通及觀光指南" linkRoute="/destinations"/></div>
        <div className="border-rooms-warm"></div>
        <div id="options" className="w-full sm:w-1/2"></div>
      </div>
    </div>
    <Footer/>
  </div>)
}

export default Rooms
