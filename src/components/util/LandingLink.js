import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LandingLink = ({verticalTitle=true, title="", body="", linkText="", linkRoute=""}) => {
  const {t, i18n} = useTranslation();

  return (<div className={t("Navbar.language")!=="en"?"bg-background-beige text-accent flex pb-6 pt-2 px-8 lg:max-w-33":"bg-background-beige text-accent flex p-6"}>
    {verticalTitle &&
      <div className="h2 lg:h2-lg vertical fit-content tracking-tighter opacity-75" style={{
        margin: "0.35rem 1.7rem 0 1rem"
      }}>{title}</div>
    }
    <div className="flex flex-col" style={{
      margin: "0 1rem 0 0"
    }}>
      {verticalTitle === false &&
        <div className="h2 lg:h2-lg fit-content tracking-normal opacity-75" style={{
          margin: "0 0 0.5rem 0"
        }}>{title}</div>
      }
      <div className="flex-grow">{body}</div>
      <Link to={linkRoute} className="h3 lg:h3-lg link-btn text-background text-center mt-4">{linkText}</Link>
    </div>
  </div>)
}

export default LandingLink
