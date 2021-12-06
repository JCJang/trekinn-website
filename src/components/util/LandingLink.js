import {Link} from 'react-router-dom'

const LandingLink = ({verticalTitle=true, title="", body="", linkText="", linkRoute=""}) => {
  return (<div className="bg-background-beige text-accent flex p-6 sm:max-w-33">
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
      <div className="flex-grow">{body}</div>
      <Link to={linkRoute} className="h3 lg:h3-lg link-btn text-background text-center mt-4">{linkText}</Link>
    </div>
  </div>)
}

export default LandingLink
