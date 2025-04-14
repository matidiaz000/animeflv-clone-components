import { NavLink } from 'react-router-dom'
import AnimeFLVLogo from './../../assets/logo.png'
import { NavList } from "./Nav.list"

export const NavComponent = () => {
  return (
    <div className="">
      <img src={AnimeFLVLogo} alt="AnimeFLV" className="mt-3 mb-4 ms-4 ps-2" />
      {
        NavList.map(item => 
          <div key={`${item.title}-${item.id}`}>
            <strong className="pt-2 pb-2 d-flex text-white">
            <span className="material-icons-round text-primary me-2">{item.icon}</span>
              {item.title}
            </strong>
            <ul className="list-unstyled ms-4">
              {
                item.nav.map(item => 
                  item.external ?
                    <li key={`${item.description}-${item.id}`}>
                      <a
                        className="text-white rounded-2 my-0 small px-2 py-1 text-decoration-none d-inline-block"
                        href={`https://getbootstrap.com/docs/5.3/${item.link}`}
                        target="_blank"
                      >{item.description}</a> <span className="opacity-25 text-white small">Bootstrap</span>
                    </li> :
                    <li key={`${item.description}-${item.id}`}>
                      <NavLink
                        className={({ isActive }) => `${isActive && 'bg-primary'} text-white rounded-2 my-0 small px-2 py-1 text-decoration-none d-inline-block`}
                        reloadDocument
                        to={item.link}
                      >{item.description}</NavLink>
                    </li>
                )
              }
            </ul>
          </div>
        )
      }
    </div>
  )
}