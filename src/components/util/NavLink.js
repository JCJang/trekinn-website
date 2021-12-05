import {Link} from 'react-router-dom'

const NavLink = ({linkText="", linkRoute=""}) => {
  return (
      <Link to={linkRoute} className="font-semibold font-base genwan text-center justify-self-center self-center px-8 h-full sm:opacity-75 sm:hover:opacity-100 duration-150">{linkText}</Link>
)
}

export default NavLink
