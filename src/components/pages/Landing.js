import landing from '../../photos/landing.jpg'
import {ReactComponent as MountainLogo} from '../../photos/mountain-logo.svg'
import IntraWebLink from '../util/IntraWebLink.js'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import Navbar from '../util/Navbar.js'

const Landing = () => {
  return (

    <div className="bg-background-beige h-screen overflow-y-scroll">
      <Navbar/>
      <div className="relative shadow-md justify-center h-screen w-screen">
          <div className="absolute h-screen w-screen gradient darken-layer"></div>
          <img className="h-screen w-screen object-cover" src={landing}/>
          <div className="absolute top-0 w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="text-background vertical h1 lg:h1-lg lg:horizontal m-8">
              美崙遊記
            </h1>
            <div className="body text-background max-w-sm text-center tracking-wider mx-12">
      無論旅遊或出外，找優質花蓮住宿，《 美崙遊記 》是提供友善便利環境的平價花蓮民宿。感覺我們的用心，找一個符合期待的停頓空間。
            </div>
            <MountainLogo className="h-8 w-full m-6"/>
            <div className="action-btn h3 lg:h3-lg text-warm bg-accent-green">立即訂房</div>
            <div className="caption lg:caption-lg semibold m-3 text-background">下滑閱讀更多<ExpandMoreOutlinedIcon/></div>
          </div>

    </div>

  <div className="flex flex-col sm:flex-row py-4">
  <IntraWebLink title="民宿簡介" body="《 美崙遊記 》是花蓮市區優良合法民宿，從2006年營業至今，也榮獲花蓮縣政府頒衛生優良獎，住宿品質有保障。民宿平實優雅、設施齊全，是預算內花蓮旅遊出外住宿的好選擇。" linkText="民宿簡介" linkRoute="/about"/>
  <div className="border-warm-light"></div>
  <IntraWebLink title="客房介紹" body="潔淨舒適大床，大衣櫥收納，多種免費飲品，數位電視頻道，無線上網。衛生整潔由專人負責，是我們最在乎的基本要求。客房不多，所以可以堅持更多。溫馨燈光中，平實顯優雅。" linkText="客房介紹" linkRoute="/rooms"/>
  <div className="border-warm-light"></div>
  <IntraWebLink title="交通與活動" body="只要資訊充足，花蓮蠻適合自由行。我們會提供協助及諮詢：代辦泛舟、賞鯨、溯溪等活動，花蓮海洋公園、兆豐農場優惠門票及各種套裝行程，代租交通工具。" linkText="交通及觀光指南" linkRoute="/destinations"/>
</div>
    </div>

  )
}

export default Landing
