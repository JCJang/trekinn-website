import React from 'react'
import {ReactComponent as MountainLogo} from '../../photos/mountain-logo.svg'
import Carousel from '../util/Carousel.js'
import Navbar from '../util/Navbar.js'
import Footer from '../util/Footer.js'
import PhotoHolder from '../util/PhotoHolder.js'

//photos
import twoBedroomOne from '../../photos/rooms/2-1.jpg'
import twoBedroomTwo from '../../photos/rooms/2-2.jpg'
import twoBedroomThree from '../../photos/rooms/2-3.jpg'
import twoBedroomFour from '../../photos/rooms/2-4.jpg'
import fourBedroomOne from '../../photos/rooms/4-1.jpg'
import fourBedroomTwo from '../../photos/rooms/4-2.jpg'

const Rooms =({FourBedroomPeakPrice="2200",FourBedroomOffpeakPrice="1800",TwoBedroomPeakPrice="1500",TwoBedroomOffpeakPrice="1200"}) => {
  return (
  <div className="bg-background-beige h-screen overflow-y-scroll">
    <Navbar/>
<div>
  <div className="p-6 lg:p-10 lg:pt-18">
      <h1 className="h3 lg:h3-lg text-grey-darkest text-left w-full lg:w-3/4 opacity-50">訂房</h1>
  </div>
    <div className="flex flex-col lg:flex-row items-center">
      <div className="flex bg-background flex-col flex-grow p-6 lg:p-10 w-1/2 items-center text-left py-8">
        <Carousel title="精緻雙人房" sources={[fourBedroomOne,fourBedroomTwo]}
          prices={[TwoBedroomPeakPrice,TwoBedroomOffpeakPrice]} caption="6~8坪空間，一大床(6尺)，淋浴設施，8坪可加床。" />
      </div>
      <div className="border-warm-light"></div>
      <div className="flex bg-background flex-col flex-grow p-6 lg:p-10 w-1/2 items-center text-left py-8">
        <Carousel title="溫馨四人房" sources={[fourBedroomOne,fourBedroomTwo]} prices={[FourBedroomPeakPrice,FourBedroomOffpeakPrice]} caption="9坪空間，兩大床(5尺)，有陽台，淋浴設施，可加床。

" />
      </div>
    </div>
  <div className="caption text-grey-dark">假日 指連續假日、週五、週六。部分房型的寒暑假期間。平日 指週日至週四。以上不含農曆新年假期，春節優惠價格於年前公告。</div>
</div>
      <Footer/>
    </div>
    )
}

export default Rooms
