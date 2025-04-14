import { NavLink } from 'react-router-dom'
import { Icon } from '..'

interface ILinks {
  content: string,
  link: string,
  id: number
}

interface IProps {
  logo: string,
  navLinks: ILinks[],
  iconLinks: ILinks[] 
}

export const Header = ({logo, navLinks, iconLinks}: IProps) => {
  return (
    <header className="bg-dark">
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center">
          <a href="">
            <img src={logo} alt="AnimeFLV" />
          </a>
          <nav className="d-flex align-items-center ms-3">
            {navLinks.map(({link, content, id}) => 
              <NavLink
                key={id}
                className={({ isActive }) => `${isActive && ''} link-light p-3 link-offset-3 link-underline-light link-underline-opacity-0 link-underline-opacity-100-hover`}
                to={link}
              >{content}</NavLink>
            )}
          </nav>
          <nav className="ms-auto d-flex align-items-center me-n3">
            {iconLinks.map(({link, content, id}) => 
              <NavLink
                key={id}
                className={({ isActive }) => `${isActive && ''} link-light p-3 link-opacity-75-hover`}
                to={link}
              >
                <Icon icon={content}/>
              </NavLink>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}