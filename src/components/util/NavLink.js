import {Link} from 'react-router-dom'

const NavLink = ({linkText="", currentPath="", linkRoute=""}) => {
  return (
      <Link to={linkRoute} className="font-semibold text-2xl lg:mt-1 lg:text-base genwan text-center justify-self-center self-center w-64 lg:w-full lg:px-8 h-full duration-150" style={{color:currentPath===linkRoute && "#D8E5E3", cursor:currentPath===linkRoute && "default"}}>{linkText}</Link>
)
}

export default NavLink
