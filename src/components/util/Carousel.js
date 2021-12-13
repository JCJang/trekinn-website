import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {useState} from 'react'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const Carousel = ({verticalTitle=true, title="", body="", linkText="", linkRoute="", imgSources=[], caption="", alt=title, prices=[0,0]}) => {
  const {t, i18n} = useTranslation();
  const [selectedImage,setSelectedImage] = useState(0)

  return (
    <div className="w-auto">
    <div className="text-accent flex px-6">
    {verticalTitle &&
      <div className="h2 lg:h2-lg vertical fit-content tracking-tighter opacity-75" style={{
        marginRight: "1.7rem"
      }}>{title}</div>
    }
    <div className="flex flex-col w-full">
      {verticalTitle === false &&
        <div className="h2 mb-6 lg:h2-lg fit-content tracking-tighter opacity-75" >{title}</div>
      }
      <div className="max-w-full w-full flex h-full flex-col bg-background-beige">
      <img src={imgSources[selectedImage]} alt={alt} className="z-10 place-center flex-grow max-h-full h-64 object-contain shadow" style={{borderRadius:"3px"}}/>
      <div className="flex flex-row flex-wrap bg-background-beige" style={{opacity:"0.8"}}>
        {imgSources.map((img, num)=>{
          return <div className="h-16 w-12 mb-1 mr-1 relative">
          <div className="absolute top-0 h-16 w-12 flex bg-accent-blue justify-center items-center" style={{display:selectedImage!==num && "none"}}>
          <RemoveRedEyeOutlinedIcon/>
          </div>
          <img src={img} alt={alt} className="relative h-16 w-12 max-w-full max-h-full object-cover saturate-70" style={{opacity:selectedImage===num && "1", cursor:selectedImage!==num && "pointer",mixBlendMode: selectedImage===num && "screen"}} onClick={()=>{setSelectedImage(num)}}/>
          <div className="absolute top-0 h-16 w-12 flex text-accent-blue justify-center items-center" style={{display:selectedImage!==num && "none"}}>
          <RemoveRedEyeOutlinedIcon/>
          </div>
          </div>
        })}
      </div>
      </div>
    </div>
  </div>
<div>
    <div className="flex flex-col-reverse sm:flex-row px-6 pt-4 lg:pt-6">
    <div className="flex-grow w-full lg:w-auto">
    <div className={t("Navbar.language")!=="en"?"card lg:card-lg text-accent text-left":"h3 lg:h3-lg text-accent text-left"}>
    {t("Rooms.help.peak")} <span className="h3 lg:h3-lg text-accent text-left"> <span className="text-accent-blue ">//</span > {
    prices[0]
    }
    <span className="opacity-50 text-xl"> TWD</span>
    </span> < /div>
<div className={t("Navbar.language")!=="en"?"card mt-2 lg:card-lg text-accent text-left":"h3 lg:h3-lg text-accent text-left"}>
{t("Rooms.help.offpeak")} <span className="h3 lg:h3-lg text-accent text-left"> <span className="text-accent-blue ">//</span > {
prices[1]
}
<span className="opacity-50 text-xl"> TWD</span>
</span> < /div>
</div>
<div className="captions lg:captions-lg pt-3 pb-2 md:p-0 text-grey-darkest text-left sm:text-right w-full lg:w-5/12">
{caption}
</div>

</div>
  </div>
</div>)
}

export default Carousel
