import landing from '../../photos/landing.jpg'
import {ReactComponent as MountainLogo} from '../../photos/mountain-logo.svg'
import IntraWebLink from '../util/IntraWebLink.js'

const Landing = () => {
  return (
    <div>
      <div className="relative justify-center h-screen w-screen">
          <div className="absolute h-screen w-screen gradient darken-layer"></div>
          <img className="h-screen w-screen shadow-lg" src={landing}/>
          <div className="absolute top-0 w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="text-background vertical h1 lg:h1-lg lg:horizontal m-8">
              美崙遊記
            </h1>
            <div className="body text-background lg:max-w-sm text-center tracking-wider">
      無論旅遊或出外，找優質花蓮住宿，《 美崙遊記 》是提供友善便利環境的平價花蓮民宿。感覺我們的用心，找一個符合期待的停頓空間。
            </div>
            <MountainLogo className="h-8 w-full m-6"/>
            <div className="action-btn h3 lg:h3-lg text-warm bg-accent-green">立即訂房</div>
          </div>

    </div>

  <div className="flex">
  <IntraWebLink/>
  <div className="border-warm-light"></div>
  <IntraWebLink/>
  <IntraWebLink/>
</div>
    </div>

  )
}

export default Landing
