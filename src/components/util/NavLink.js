import {Link} from 'react-router-dom'

const NavLink = ({linkText="", linkRoute=""}) => {
  return (
      <Link to={linkRoute} className="font-semibold text-2xl sm:text-base genwan text-center justify-self-center self-center px-8 h-full duration-150">{linkText}</Link>
)
}

export default NavLink
