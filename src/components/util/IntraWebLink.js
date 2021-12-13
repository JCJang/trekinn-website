import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const IntraWebLink = ({verticalTitle=true, title="", body="", linkText="", linkRoute=""}) => {
    const {t, i18n} = useTranslation();
  return (<div className="bg-background-beige text-accent flex p-6">
    {verticalTitle &&
      <div className="h2 lg:h2-lg vertical fit-content tracking-tighter opacity-75 opacity-75" style={{
        margin: "0 1.7rem 0 1rem"
      }}>{title}</div>
    }
    <div className="flex flex-col" style={{
      margin: "0 1rem 0 0"
    }}>
      {verticalTitle === false &&
        <div className={t("Navbar.language")!=="en"
          ?
          "h2 lg:h2-lg fit-content tracking-tighter opacity-75 mb-5 tracking-wide"
          :
          "h2 lg:h2-lg fit-content tracking-tighter opacity-75 mb-5 tracking-widest"
        }>{title}</div>
      }
      <div className="flex-grow">{body}</div>
      <Link to={linkRoute} className="h3 lg:h3-lg link-btn text-background text-center mt-4">{linkText}</Link>
    </div>
  </div>)
}

export default IntraWebLink
