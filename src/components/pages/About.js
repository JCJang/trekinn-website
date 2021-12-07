import React from 'react'
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

const About = ({aboutp1="無論旅遊或出外，找優質花蓮住宿，《 美崙遊記 》是提供友善便利環境的平價花蓮民宿。感覺我們的用心，找一個符合期待的停頓空間。溫馨精緻客房使用原裝三菱多聯式變頻環保空調，恆溫靜音。熱泵壓縮環保節能熱水供應系統，確保沐浴品質。潔淨舒適大床，大衣櫥收納，多種免費飲品，數位電視頻道，無線上網。衛生整潔由專人負責，是我們最在乎的基本要求。客房不多，所以可以堅持更多。溫馨燈光中，平實顯優雅。《 美崙遊記 》是花蓮市區優良合法民宿，預算內花蓮旅遊出外住宿的好選擇。",
aboutp2="《 美崙遊記 》近花蓮美崙高爾夫球場，稍稍走幾步路，便能體驗高爾夫球的樂趣；《 美崙遊記 》近花蓮港，我們可以借您腳踏車10分鐘到海邊，或再騎10分鐘到花蓮鬧區。《 美崙遊記 》鄰便利商店，餐館小吃走路到，生活機能佳。",
aboutp3="交通與活動我們會提供協助及諮詢：代辦泛舟、賞鯨、溯溪等活動，花蓮海洋公園、兆豐農場優惠門票及各種套裝行程，代租交通工具。只要資訊充足，花蓮蠻適合自由行。就近到花蓮港賞鯨碼頭搭船，出海觀看一群群悠游大洋的海豚，神情自若。他們有些朋友是受過訓的，住在花蓮海洋公園，專業表演，您也可以去看看他們。",
aboutp4="《 美崙遊記 》是花蓮市區合法民宿，不是MOTEL也不是HOTEL，沒有閒雜人等。我們沒有營造一堆特色，因為特色留給花蓮，尤其是寬闊的東岸大自然景觀及悠閒的人文風情。"
}) => {
  return (
    <div className="bg-background-beige w-screen h-screen overflow-y-scroll overflow-x-hidden">
    <Navbar/>
      <div className="flex flex-row items-center">
      <div className="flex bg-background flex-col flex-grow p-6 sm:p-10 sm:pt-18 w-2/3 items-center text-left py-8">
      <PhotoHolder src={lobby} caption="民宿大廳" className=" mt-16 w-full sm:w-3/4"/>
      <h1 className="h3 lg:h3-lg text-grey-darkest text-left w-full sm:w-3/4 opacity-50">簡介</h1>
      <h2 className="h2 lg:h2-lg text-warm w-full sm:w-3/4 py-4">
      <div>歡迎來到</div><div>花蓮民宿 《美崙遊記》</div></h2>
      <div className="body lg:body-lg text-warm w-full sm:w-3/4 my-2">{aboutp1}</div>
      <PhotoHolder src={exterior} caption="民宿外觀" className="w-full sm:hidden"/>
      <div className="body text-warm w-full sm:w-3/4 my-2">{aboutp2}</div>
      <PhotoHolder src={biking} caption="民宿附近的自行車道" className="w-full sm:hidden"/>
      <div className="body lg:body-lg text-warm w-full sm:w-3/4 my-2">{aboutp3}</div>
      <PhotoHolder src={bay} caption="民宿鄰近海邊" className="w-full sm:hidden"/>
      <div className="body lg:body-lg text-warm w-full sm:w-3/4 my-2">{aboutp4}</div>

      </div>
      <div className="hidden h-full sm:p-10 sm:pt-18 sm:flex flex-col w-1/3 bg-background-beige justify-center items-center">
      <PhotoHolder src={exterior} caption="民宿外觀" className="w-48 xl:w-64 my-2"/>
      <PhotoHolder src={biking} caption="民宿附近的自行車道" className="w-48 xl:w-64 my-2"/>
      <PhotoHolder src={bay} caption="民宿鄰近海邊" className="w-48 xl:w-64 my-2"/>
      </div>
      </div>
    <Footer/>
    </div>  )
}

export default About
