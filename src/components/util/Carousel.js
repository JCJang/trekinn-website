import {Link} from 'react-router-dom'
import {useState} from 'react'
const Carousel = ({verticalTitle=true, title="", body="", linkText="", linkRoute="", sources=[], caption="", alt=title, prices=[0,0]}) => {
  return (
    <div>
    <div className="text-accent flex p-4">
    {verticalTitle &&
      <div className="h2 lg:h2-lg vertical fit-content tracking-tighter opacity-75 opacity-75" style={{
        margin: "0 1.7rem 0 1rem"
      }}>{title}</div>
    }
    <div className="flex flex-col" style={{
      margin: "0 1rem 0 0"
    }}>
      {verticalTitle === false &&
        <div className="h2 lg:h2-lg fit-content tracking-tighter opacity-75" style={{
          margin: "2rem 0"
        }}>{title}</div>
      }
      <div className="max-w-full sm:max-w-3xl flex flex-col">
      <img src={sources[0]} alt={alt} className="max-w-full max-h-full object-contain shadow" style={{borderRadius:"3px"}}/>
      </div>

    </div>
  </div>
<div>
    <div className="flex flex-col-reverse sm:flex-row p-6">
    <div className="flex-grow">
    <div className="h3 lg:h3-lg text-accent text-left">假日 <span className="text-accent-blue">//</span> {prices[0]} TWD</div>
<div className="h3 lg:h3-lg text-accent text-left">
平日 <span className="text-accent-blue">//</span > {
prices[1]
}
TWD < /div>
</div>
<div className="captions lg:captions-lg text-grey-darkest text-right w-5/12">
{caption}
</div>

</div>
  </div>
</div>)
}

export default Carousel
