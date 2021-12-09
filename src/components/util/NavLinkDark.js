import {Link} from 'react-router-dom'

const NavLink = ({linkText="", currentPath="", linkRoute=""}) => {
  return (
      <Link to={linkRoute} className="font-semibold lg:mt-1 text-2xl lg:text-base genwan text-center justify-self-center self-center w-64 lg:w-full lg:px-8 h-full duration-150" style={{color:currentPath===linkRoute && "#FFF6F2", cursor:currentPath===linkRoute && "default"}}>{linkText}</Link>
)
}

export default NavLink
