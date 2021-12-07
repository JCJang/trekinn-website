import landing from '../../photos/landing.jpg'
import {ReactComponent as MountainLogo} from '../../photos/mountain-logo.svg'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import {Link} from 'react-router-dom'

import NavbarDark from '../util/NavbarDark.js'
import PhotoHolder from '../util/PhotoHolder.js'
import NavLink from '../util/NavLink.js'

//photos
import lakePeaceful from '../../photos/destinations/lake-peaceful-desat.jpg'
import tarokoTrial from '../../photos/destinations/taroko-trail.jpg'
import lakeCanoing from '../../photos/destinations/lake-canoing.jpg'

const Destinations = () => {
  return (

    <div className="bg-background-beige h-screen overflow-y-scroll">
      <NavbarDark/>
      <div className="relative shadow-md justify-center h-screen w-screen">
          <div className="absolute h-screen w-screen sm:px-20 gradient"></div>
          <img className="h-screen w-screen object-cover" src={lakePeaceful}/>
          <div className="absolute top-0 w-screen h-screen flex flex-col p-6 text-left">
          <div id="overview" className="w-full sm:px-20 lg:px-16 lg:w-1/2 mx-2 lg:m-0 p-6"style={{height:"50vh"}}>

            <h2 className="h2 lg:h2-lg text-accent my-5">
              觀光指南及地圖
            </h2>
            <div>
              <a className="h3 lg:h3-lg text-warm my-5">
                包棟
              </a>
              <div className="body sm:body text-grey-darkest">
            包棟5房7千元起，詳細請電洽0983-661588。<br></br>
              </div>
            </div>
            <div>
              <h3 className="h3 lg:h3-lg text-warm my-5">
                停留一個月以上的住宿需求
              </h3>
              <div className="body sm:body text-grey-darkest">
                若您有需要停留花蓮較長時間，可住宿合作的月租套房《花蓮EZ套房》，省錢便利。詳情請搜尋《花蓮EZ套房》，或打電話0983-661588問阿香小姐，謝謝。
              </div>
            </div>
            </div>

          </div>

    </div>


    </div>

  )
}

export default Destinations
