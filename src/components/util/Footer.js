import React from 'react'
import { useTranslation } from 'react-i18next'
import {Link} from 'react-router-dom'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Footer = () => {
  const {t, i18n} = useTranslation();
  return (
    <footer className="w-screen px-6 py-24 bg-background-cool flex flex-col items-center justify-center text-center sm:text-left">
      <div className="flex flex-col w-full sm:flex-row text-grey-darkest justify-center">
        <div className="flex flex-col w-full sm:w-1/2">
            <div className="h3 sm:text-base">
              <div className="leading-9">
              {t("Footer.address-1")}<br className="sm:hidden"></br>{t("Footer.address-2")}
              </div>
            </div>
            <div className="captions text-xs mt-1 tracking-widest">
              {t("Footer.license")}
            </div>
            <div className="captions mt-auto hidden sm:block">
              © 2006 - 2021 Trekinn, All rights reserved.
            </div>
        </div>
        <div className="w-full flex flex-row sm:flex-col sm:m-0 sm:w-1/5  captions">
            <div className="flex flex-col mt-4 sm:mt-0 mx-auto sm:mx-0 text-left">
              <div>{t("Footer.callPrompt")}</div>
              <a href="tel:+886983661588">0983-661588</a>
              <a href="tel:+88638228430">03-8228430 ( {t("Footer.day")} )</a>
              <a href="tel:+886920313243">0920-313243 ( English )</a>
            </div>
            <div className="mt-auto sm:mt-auto ml-4 mx-auto sm:ml-0 sm:mt-2">
              <Link to="/contact">{t("Footer.more")}<ArrowRightOutlinedIcon className="pb-1"/></Link>
          </div>
        </div>
      </div>
      <div className="captions mt-6 sm:mt-3 sm:hidden">
        © 2006 - 2021 Trekinn, All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
