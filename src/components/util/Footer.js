import React from 'react'
import {Link} from 'react-router-dom'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Footer = () => {
  return (
    <footer className="w-screen p-6 bg-warm flex flex-col items-center justify-center text-center sm:text-left">
      <div className="flex flex-col w-full sm:flex-row text-background justify-center">
        <div className="flex flex-col w-full sm:w-1/2">
            <div className="h3 sm:text-base">
              <div className="leading-9">
              《美崙遊記》 970 花蓮市<br className="sm:hidden"></br>中興路179號
              </div>
            </div>
            <div className="captions text-xs mt-1 tracking-widest">
              花蓮縣合法民宿登記證第282號
            </div>
            <div className="captions mt-auto hidden sm:block">
              © 2006 - 2021 Trekinn, All rights reserved.
            </div>
        </div>
        <div className="w-full flex flex-row sm:flex-col sm:m-0 sm:w-1/5 text-accent-green captions">
            <div className="flex flex-col mt-4 sm:mt-0 mx-auto sm:mx-0 text-left">
              <div>點擊撥打：</div>
              <a href="tel:+886983661588">0983-661588</a>
              <a href="tel:+88638228430">03-8228430 ( 日間 )</a>
              <a href="tel:+886920313243">0920-313243 ( English )</a>
            </div>
            <div className="mt-auto sm:mt-auto ml-4 mx-auto sm:ml-0 sm:mt-2">
              <Link to="/contact">更多聯絡方式<ArrowRightOutlinedIcon className="pb-1"/></Link>
          </div>
        </div>
      </div>
      <div className="captions mt-6 sm:mt-3 sm:hidden text-background">
        © 2006 - 2021 Trekinn, All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
