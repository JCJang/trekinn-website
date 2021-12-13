import {Link} from 'react-router-dom'

const NavLink = ({linkText="", currentPath="", linkRoute=""}) => {
  return (
      <Link to={linkRoute} className="flex card font-semibold text-2xl lg:text-base text-center justify-self-center self-center w-64 lg:w-full lg:px-8 h-full duration-150" style={{color:currentPath===linkRoute && "#3E4F54", cursor:currentPath===linkRoute && "default"}}>{linkText}</Link>
)
}

export default NavLink
