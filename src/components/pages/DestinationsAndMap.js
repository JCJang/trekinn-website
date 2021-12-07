import React from 'react'
import {ReactComponent as MountainLogo} from '../../photos/mountain-logo.svg'
import Carousel from '../util/Carousel.js'
import Navbar from '../util/Navbar.js'
import Footer from '../util/Footer.js'
import PhotoHolder from '../util/PhotoHolder.js'
import IntraWebLink from '../util/IntraWebLink.js'

//photos
import lakePeaceful from '../../photos/destinations/lake-peaceful-desat.jpg'
import tarokoTrial from '../../photos/destinations/taroko-trail.jpg'
import lakeCanoing from '../../photos/destinations/lake-canoing.jpg'
import hualienCoast from '../../photos/destinations/hualien-coast.jpg'

// <h1 className="mt-20 mx-16 h3 lg:h3-lg text-grey-darkest text-left w-full sm:w-3/4 opacity-50">客房介紹</h1>

const DestinationsAndMap = () => {
  return (<div className="bg-background h-screen overflow-y-scroll">
    <Navbar/>
    <div>
      <h1 className="h3 hidden sm:block mt-10 sm:mt-24 sm:px-20 mx-6 sm:mx-0 m-1 my-6 lg:h3-lg text-grey-darkest text-left w-full opacity-50">觀光指南及地圖</h1>
      <div id="payment" className="mb-6 flex sm:px-16 sm:py-6 flex-col bg-background-cool">

        <div className="flex flex-col lg:flex-row">
          <div id="overview" className="w-full flex-col-reverse sm:flex-col lg:w-1/2 p-6 ">
            <h2 className="h2 lg:h2-lg lg:mb-6 text-accent">
              觀光重要景點的路程及時間
            </h2>
            <div className="card lg:card-lg flex flex-row mt-3 shadow-xl" style={{
                borderRadius: "7px",
                border: "1.5px solid #c4c4c4",
                height: "22rem"
              }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12260.32208819209!2d121.62286412301299!3d23.995227456828072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34689e2baebff605%3A0x92d1b4b981f0171c!2zOTcw6Iqx6JOu57ij6Iqx6JOu5biC5Lit6IiI6LevMTc56Jmf!5e0!3m2!1szh-TW!2stw!4v1462847137894" width="100%" height="100%" frameborder="0" style={{
                  border: "0"
                }} allowfullscreen=""></iframe>
            </div>
            <div className="self-end text-right captions mt-2 text-grey-dark">
              <a href="https://goo.gl/maps/eNXLrehNP472" target="_blank">《美崙遊記》 970 花蓮市中興路179號</a>
            </div>

            <a className="lg:hidden h3 lg:h3-lg map-btn bg-background text-accent self-end text-center mt-3 lg:mt-6" name="GotoGoogleMap" type="button" href='https://goo.gl/maps/eNXLrehNP472' target="_blank">檢視較大的地圖，可導航</a>
          </div>
          <div className="border-rooms-cool"></div>
          <div id="region" className="w-full flex flex-col lg:w-1/2 p-6 lg:pl-16">
            <div id="local" className="mb-3">
              <div className="body sm:body text-grey-darkest">
                以下是花蓮美崙遊記民宿到一些重要地點的路徑，請點選
                <span className="text-grey-dark">地點名稱</span>
                進入Google地圖，行車時間是依市區速限估算參考，您也可自行更換地點：
              </div>
              <div className="card lg:card-lg flex flex-row mt-3">
                <div className="text-right mr-6 text-grey-dark w-1/2">

                  <div>
                    <a href="https://goo.gl/maps/SdUnjRRLac62" target="_blank">
                      花蓮火車站：</a>
                  </div>
                  <div>
                    <a href="https://goo.gl/maps/ihEASB1PnYs" target="_blank">
                      花蓮機場：</a>
                  </div>
                  <div>
                    <a href="https://goo.gl/maps/pzg8NiHVVnr" target="_blank">
                      賞鯨碼頭：</a>
                  </div>
                  <div>
                    <a href="https://goo.gl/maps/FtBv1AmhT9U2" target="_blank">
                      七星潭：</a>
                  </div>
                  <div>
                    <a href="https://goo.gl/maps/AWRmLcdfsaE2" target="_blank">
                      鬧區星巴克：</a>
                  </div>
                  <div>
                    <a href="https://goo.gl/maps/jiNoTa3kut62" target="_blank">
                      東大門夜市：</a>
                  </div>
                  <div>
                    <a href="https://goo.gl/maps/BFhoyMzW1ft" target="_blank">
                      鯉魚潭：</a>
                  </div>
                  <div>
                    <a href="https://goo.gl/maps/CpQ7zZhycy72" target="_blank">
                      松園別館-美崙山：</a>
                  </div>
                  <div>
                    <a href="https://goo.gl/maps/DfGwa2Cx8mP2" target="_blank">
                      慶修院：</a>
                  </div>
                  <div>
                    <a href="https://goo.gl/maps/3C4VQiMxbFK2" target="_blank">
                      海洋公園：</a>
                  </div>
                  <div>
                    <a href="https://goo.gl/maps/cFaq1jThk4o" target="_blank">
                      太魯閣國家公園：</a>
                  </div>

                </div>
                <div className="text-left text-grey-darkest">
                  <div>5.3 km, 13 min</div>
                  <div>4.8 km, 11 min</div>
                  <div>3.4 km. 8 min</div>
                  <div>5.3 km, 11 min</div>
                  <div>3.5 km, 10 min</div>
                  <div>3.5 km, 10 min</div>
                  <div>21 km, 35 min</div>
                  <div>1.9 km, 5 min</div>
                  <div>9.4 km, 20 min</div>
                  <div>14.5 km, 25 min</div>
                  <div>22.6 km, 34 min</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


            <div id="agreement" className="captions flex flex-col lg:flex-row text-grey-dark sm:px-16 lg:flex-row">
              <div className="w-full lg:w-3/5 p-6">
                <h2 className="h2 lg:h2-lg text-accent my-5">
                  交通套裝行程服務
                </h2>
                <h3 className="h3 lg:h3-lg text-warm my-5">
                  太魯閣、花東縱谷、東海岸、、、等半日遊一日遊
                </h3>
                <div className="body sm:body text-grey-darkest">
                  花蓮旅遊可自行坐車或開車自由行, 也可以3或4人包車, 由有經驗的司機導遊到各個您喜歡的景點. 您也可以參加美崙遊記與旅行社合作的巴士遊. 美崙遊記可以代為辦理包車, 協助報名各種巴士遊, 歡迎洽詢0983-661588。
                </div>
                <h3 className="h3 lg:h3-lg text-warm my-5">
                  各種叫車包車套裝行程服務
                </h3>
                <div className="body sm:body text-grey-darkest">
                  美崙遊記民宿挑選優質計程車、中小客車、租車公司、旅行社各景點套裝行程，服務品質較有保障，價錢也可能較為便宜，可配合房客彈性調整。另外還有提供代辦賞鯨,泛舟、獨木舟、溯溪、溫泉...等行程及優惠門票。歡迎詢問，我們會提供建議，協助安排適合您的預算及行程。
                </div>
                <h3 className="h3 lg:h3-lg text-warm my-5">
                  包車旅遊可以協助你找到好司機
                </h3>
                <div className="body sm:body text-grey-darkest">
                  如果有3人以上出遊, 可以考慮包一輛車, 由美崙遊記合作車行優良司機, 帶您去想去的景點. 考量旅遊時效及方便, 合理價錢我們會給于建議, 適合初次來大花蓮地區旅遊者. 包車可以提早預定或入住時決定, 歡迎洽詢0983-661588。
                </div>
              </div>

              <div className="w-full lg:w-2/5 lg:pl-16 p-6">

                <div className="body sm:body text-grey-darkest mt-2">
                  <PhotoHolder src={lakeCanoing} caption="鯉魚潭獨木舟水上活動"/>
                </div>

                <div className="body sm:body text-grey-darkest mt-2">
                  <PhotoHolder src={hualienCoast} caption="花蓮的東岸大自然景觀"/>
                </div>

                <div className="body sm:body text-grey-darkest mt-2">
                  <PhotoHolder src={tarokoTrial} caption="太魯閣國家公園錐麓古道"/>
                </div>
              </div>
            </div>
      <div className="captions bg-background-cool text-grey-dark flex flex-col sm:flex-row">
        <div className="flex sm:px-16 flex-col lg:flex-row w-full">
          <div id="region" className="w-full flex flex-col p-6">
            <h2 className="h2 lg:h2-lg text-accent my-5">
              觀光地點連結一覽
            </h2>

            <div className="flex flex-row">

              <h3 className="h3 lg:h3-lg text-warm my-5 mr-3 w-1/4">
                花蓮景點及活動
              </h3>

              <div className="grid grid-cols-2 w-3/4 md:grid-cols-3 sm:grid-cols-4 my-5 row-auto captions gap-y-3  text-grey-darkest">

                <div>
                  <a href="http://www.taroko.gov.tw/" target="_blank">太魯閣國家公園</a>
                </div>
                <div>
                  <a href="http://www.eastcoast-nsa.gov.tw/" target="_blank">東海岸風景區</a>
                </div>
                <div>
                  <a href="https://www.facebook.com/pinegarden1943" target="_blank">松園別館</a>
                </div>
                <div>
                  <a href="http://www.yoshino793.com.tw/" target="_blank">吉安慶修院</a>
                </div>
                <div>
                  <a href="http://www.erv-nsa.gov.tw/" target="_blank">花東縱谷</a>
                </div>
                <div>
                  <a href="http://pujols.pixnet.net/blog/post/20598159-%5B%E8%8A%B1%E8%93%AE%5D%E4%B8%83%E6%98%9F%E6%BD%AD" target="_blank">七星潭</a>
                </div>
                <div>
                  <a href="http://www.erv-nsa.gov.tw/user/article.aspx?Lang=1&amp;SNo=03000108" target="_blank">鯉魚潭</a>
                </div>
                <div>
                  <a href="https://www.erv-nsa.gov.tw/zh-tw/attractions/detail/39" target="_blank">林田山</a>
                </div>
                <div>
                  <a href="http://www.hualiensugar.com.tw/home.php" target="_blank">花蓮光復糖廠</a>
                </div>
                <div>
                  <a href="http://www.farglory-oceanpark.com.tw/index.php?site=1" target="_blank">遠雄海洋公園</a>
                </div>
                <div>
                  <a href="http://www.skcf.com.tw/" target="_blank">兆豐農場</a>
                </div>
                <div>
                  <a href="http://www.eastsea.com.tw/" target="_blank">秀姑巒溪泛舟</a>
                </div>
                <div>
                  <a href="http://www.huadong.com.tw/" target="_blank">賞鯨</a>
                </div>
                <div>
                  <a href="http://www.riverking.com.tw/main.htm" target="_blank">溯溪</a>
                </div>
                <div>
                  <a href="http://alexlin0409.pixnet.net/blog/post/155573027-花蓮漁港(吃魚丸,買魚貨,出海賞鯨都好玩)" target="_blank">花蓮漁港</a>
                </div>

              </div>
            </div>
            <div className="border-destinations-cool"></div>

            <div className="flex flex-row">

              <h3 className="h3 lg:h3-lg text-warm my-5 mr-3 w-1/4">
                花蓮美食
              </h3>

              <div className="grid grid-cols-2 w-3/4 md:grid-cols-3 sm:grid-cols-4 my-5 row-auto captions gap-y-3 text-grey-darkest">
                <div>
                  <a href="http://www.dongdamen.com.tw/" target="_blank">東大門夜市</a>
                </div>
                <div>
                  <a href="https://yoti.life/hualien-food-5/" target="_blank">來成排骨麵</a>
                </div>
                <div>
                  <a href="http://g8906011.pixnet.net/blog/post/436762762-%E8%8A%B1%E8%93%AE%E5%B8%82--%E5%AD%94%E8%A8%98%E5%B0%8F%E9%A4%A8" target="_blank">孔記</a>
                </div>
                <div>
                  <a href="http://match000.pixnet.net/blog/post/39134237-(花蓮)鐘老爹牛肉麵-清燉牛肉麵及蹄花麵" target="_blank">鍾老爹牛肉麵</a>
                </div>
                <div>
                  <a href="http://rdoglm.pixnet.net/blog/post/156336752-♥-美食-♥--花蓮市【鵝肉先生】鮮嫩到不行" target="_blank">鵝肉先生</a>
                </div>
                <div>
                  <a href="http://blog.xuite.net/cga.jackl/tripneat/40009081" target="_blank">來來包子</a>
                </div>
                <div>
                  <a href="https://vivawei.tw/haipu-oyster/" target="_blank">海埔蚵仔煎</a>
                </div>
                <div>
                  <a href="http://www.nicole1173.tw/2011/03/blog-post_9650.html" target="_blank">炸蛋蔥油餅</a>
                </div>
                <div>
                  <a href="https://yoti.life/hualien-food-532/" target="_blank">榕樹下小吃</a>
                </div>
                <div>
                  <a href="http://iamjulia.pixnet.net/blog/post/28201471-（花蓮市）蹦康肉丸" target="_blank">蹦康肉圓</a>
                </div>
                <div>
                  <a href="http://jesse0218.pixnet.net/blog/post/28582091-【花蓮】一碗小羊肉-花蓮好吃的一碗小羊肉" target="_blank">一碗小</a>
                </div>
                <div>
                  <a href="http://www.ebisu.com.tw/" target="_blank">惠比須</a>
                </div>
                <div>
                  <a href="http://www.derli.com.tw/" target="_blank">德利豆乾</a>
                </div>
                <div>
                  <a href="http://janotts.pixnet.net/blog/post/23648579-讓我愛上麻糬的花蓮糬王～曾記麻糬" target="_blank">曾記麻糬</a>
                </div>
                <div>
                  <a href="http://yoti.life/hualien-food-132/" target="_blank">正品蚵仔煎</a>
                </div>
                <div>
                  <a href="https://www.facebook.com/pages/category/Diner/%E5%A4%96%E5%A9%86%E5%AE%B6%E9%A4%90%E9%A4%A8-106116654207613/" target="_blank">外婆家無菜單料理</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
    <Footer/>
  </div>)
}

export default DestinationsAndMap
