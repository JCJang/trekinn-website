import ImageFadeIn from './../util/ImageFadeIn'
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
          <ImageFadeIn className="h-screen w-screen object-cover" src={landing}/>
          <div className="absolute top-0 w-screen h-screen flex flex-col justify-center items-center">
            {t("Navbar.language")!=="en"?
            <h1 className="text-background h1 text-center m-8">
              {t("Landing.h1")}
            </h1>
            :
            <h1 className="text-background vertical h1 lg:h1-lg lg:horizontal m-8">
              {t("Landing.h1")}
            </h1>
            }
            <div className={t("Navbar.language")!=="en"?"body lg:body-lg text-background max-w-sm text-center tracking-normal mx-12":"body lg:body-lg text-background max-w-sm text-center tracking-wider mx-12"}>
    {t("Landing.p1")}
            </div>
            <MountainLogo className="h-8 w-full m-6"/>
            <Link to="/rooms" className="action-btn h3 lg:h3-lg text-warm bg-accent-green hover:scale-95 py-4 px-10 hover:shadow hover:bg-accent-blue active:bg-grey-dark hover:text-accent duration-75">{t("Landing.actionButton")}</Link>
            <div className="caption lg:caption-lg opacity-75 semibold m-3 text-background">{t("Landing.readMore")}<ExpandMoreOutlinedIcon/></div>
          </div>

    </div>

  <div className="flex flex-col lg:flex-row py-4">
  <LandingLink verticalTitle={JSON.parse(t("mod.vertical"))} title={t("Landing.link-about.title")} body={t("Landing.link-about.body")} linkText={t("Landing.link-about.linkText")} linkRoute="/about"/>
  <div className="border-rooms-warm"></div>
  <LandingLink verticalTitle={JSON.parse(t("mod.vertical"))} title={t("Landing.link-rooms.title")} body={t("Landing.link-rooms.body")} linkText={t("Landing.link-rooms.linkText")} linkRoute="/rooms"/>
  <div className="border-rooms-warm"></div>
  <LandingLink verticalTitle={JSON.parse(t("mod.vertical"))} title={t("Landing.link-destinations.title")} body={t("Landing.link-destinations.body")} linkText={t("Landing.link-destinations.linkText")} linkRoute="/destinations"/>
</div>
    </div>

  )
}

export default Landing
