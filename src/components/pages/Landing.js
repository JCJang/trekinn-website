import landing from '../../photos/landing.jpg'
import {Helmet} from "react-helmet";
import { useTranslation } from 'react-i18next'

import {ReactComponent as MountainLogo} from '../../photos/mountain-logo.svg'
import LandingLink from '../util/LandingLink.js'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import {Link} from 'react-router-dom'

import NavbarDark from '../util/NavbarDark.js'

const Landing = () => {
  const {t, i18n} = useTranslation();
  
  return (
    <div className="bg-background-beige h-screen overflow-y-scroll">
  <Helmet>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
  <meta http-equiv="Content-Language" content="zh-tw"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  <meta name="format-detection" content="telephone=yes"></meta>
  <title>美崙遊記:花蓮民宿,市區住宿,旅遊行程門票協助</title>
  <meta name="Description" content="花蓮民宿住宿平價花蓮市區-美崙遊記民宿,舒適便利空調客房,旅遊租車門票優惠,是近七星潭花蓮港區鬧區夜市各美食景點的優質民宿,民宿網推薦排名"></meta>
  <meta name="keywords" content="花蓮民宿,花蓮市區住宿,花蓮旅遊,七星潭,花蓮海洋公園,泛舟,賞鯨,溯溪"></meta>
  <meta name="robots" content="index,follow"></meta>
  <meta name="rating" content="general"></meta>
  <meta name="publisher" content="花蓮 美崙遊記 民宿"></meta>
  <meta name="author" content="花蓮 美崙遊記 民宿-Administrator"></meta>
  <meta name="copyright" content="花蓮 美崙遊記 民宿"></meta>
  <meta name="distribution" content="global"></meta>
  </Helmet>
      <NavbarDark/>
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
            <Link to="/rooms" className="action-btn h3 lg:h3-lg text-warm bg-accent-green hover:scale-95 py-4 px-10 hover:shadow hover:bg-accent-blue active:bg-grey-dark hover:text-accent duration-75">立即訂房</Link>
            <div className="caption lg:caption-lg semibold m-3 text-background">下滑閱讀更多<ExpandMoreOutlinedIcon/></div>
          </div>

    </div>

  <div className="flex flex-col sm:flex-row py-4">
  <LandingLink title="民宿簡介" body="《 美崙遊記 》是花蓮市區優良合法民宿，從2006年營業至今，也榮獲花蓮縣政府頒衛生優良獎，住宿品質有保障。民宿平實優雅、設施齊全，是預算內花蓮旅遊出外住宿的好選擇。" linkText="民宿簡介" linkRoute="/about"/>
  <div className="border-rooms-warm"></div>
  <LandingLink title="客房介紹" body="潔淨舒適大床，大衣櫥收納，多種免費飲品，數位電視頻道，無線上網。衛生整潔由專人負責，是我們最在乎的基本要求。客房不多，所以可以堅持更多。溫馨燈光中，平實顯優雅。" linkText="客房介紹" linkRoute="/rooms"/>
  <div className="border-rooms-warm"></div>
  <LandingLink title="交通與活動" body="只要資訊充足，花蓮蠻適合自由行。我們會提供協助及諮詢：代辦泛舟、賞鯨、溯溪等活動，花蓮海洋公園、兆豐農場優惠門票及各種套裝行程，代租交通工具。" linkText="交通及觀光指南" linkRoute="/destinations"/>
</div>
    </div>

  )
}

export default Landing
