import {Link} from 'react-router-dom'

const NavLink = ({linkText="", currentPath="", linkRoute=""}) => {
  return (
      <Link to={linkRoute} className={currentPath===linkRoute ? "flex font-medium text-2xl lg:text-base text-center justify-self-center self-center w-64 lg:w-full lg:px-8 h-full duration-150":"NavLink flex font-medium text-2xl lg:text-base text-center justify-self-center self-center w-64 lg:w-full lg:px-8 h-full duration-150"} style={{fontFamily:"'Rufina', 'Genwan'", color:currentPath===linkRoute && "#3E4F54", cursor:currentPath===linkRoute && "default"}}>{linkText}</Link>
)
}

export default NavLink
