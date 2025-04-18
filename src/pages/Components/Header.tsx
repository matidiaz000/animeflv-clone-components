import { NavLink } from 'react-router-dom';
import { Header as HeaderComponent, Icon } from '../../../lib'
import AnimeFLVLogo from '../../assets/logo.png'

const Header = () => {
  return (
    <>
      <h1>Headers</h1>
      <p>We use a subset of all colors to create a smaller color palette for generating color schemes, also available as Sass variables and a Sass map in Bootstrap’s <code>scss/_variables.scss</code> file.</p>
      <HeaderComponent
        logo={AnimeFLVLogo}
        leftContent={
          <>
            <NavLink
              className={({ isActive }) => `${isActive && ''} link-light p-3 link-offset-3 link-underline-light link-underline-opacity-0 link-underline-opacity-100-hover`}
              to="#"
            >Noticias</NavLink>
            <NavLink
              className={({ isActive }) => `${isActive && ''} link-light p-3 link-offset-3 link-underline-light link-underline-opacity-0 link-underline-opacity-100-hover`}
              to="#"
            >Explorar</NavLink>
          </>
        }
        rightContent={
          <>
            <NavLink className={({ isActive }) => `${isActive && ''} link-light p-3 link-opacity-75-hover`} to="#">
              <Icon icon="Search_Magnifying_Glass"/>
            </NavLink>
            <NavLink className={({ isActive }) => `${isActive && ''} link-light p-3 link-opacity-75-hover`} to="#">
              <Icon icon="Bookmark"/>
            </NavLink>
            <NavLink className={({ isActive }) => `${isActive && ''} link-light p-3 link-opacity-75-hover`} to="#">
              <Icon icon="User_Circle"/>
            </NavLink>
          </>
        }
      />
    </>
  );
};

export default Header;