import {Link} from 'react-router-dom'

const NavLink = ({linkText="", currentPath="", linkRoute=""}) => {
  return (
      <Link to={linkRoute} className={currentPath===linkRoute ?"font-medium flex text-2xl lg:text-base genwan text-center justify-self-center self-center w-64 lg:w-full lg:px-8 h-full duration-150":"NavLinkDark font-medium flex text-2xl lg:text-base genwan text-center justify-self-center self-center w-64 lg:w-full lg:px-8 h-full duration-150"} style={{fontFamily:"'Rufina', 'Genwan'", color:currentPath===linkRoute && "#83C4D2", cursor:currentPath===linkRoute && "default"}}>{linkText}</Link>
)
}

export default NavLink
