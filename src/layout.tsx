import { Outlet, Link } from 'react-router-dom'
import AnimeFLVLogo from './assets/logo.png'

const Layout = () => {
  return (
    <div className="container row gx-5 h-100">
      <aside className="col-3 bg-dark">
        <div className="sticky-top">
          <img src={AnimeFLVLogo} alt="AnimeFLV" className="mt-3" />
          <strong className="pt-2 d-block">Getting started</strong>
          <ul className="list-unstyled">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/card">Card</Link></li>
            <li><Link to="/color">Color</Link></li>
            <li><Link to="/dropdown">Dropdown</Link></li>
            <li><Link to="/footer">Footer</Link></li>
            <li><Link to="/form">Form</Link></li>
            <li><Link to="/grid">Grid</Link></li>
            <li><Link to="/header">Header</Link></li>
            <li><Link to="/slide">Slide</Link></li>
          </ul>
        </div>
      </aside>
      <main className="col row gx-5 pt-3 pb-5">
        <div className="col">
          <Outlet />
        </div>
        <div className="col-3">
          <div className="sticky-top">
            <strong className="h6 my-2 ms-3">On this page</strong>
            <hr />
            <div>
              <nav>
                <ul>
                  <li><a href="#what-is-vite" className="active">What is Vite?</a></li>
                  <li><a href="#setup" className="">Setup</a></li>
                  <li><a href="#project-structure" className="">Project structure</a></li>
                  <li><a href="#configure-vite" className="">Configure Vite</a></li>
                  <li><a href="#import-bootstrap" className="">Import Bootstrap</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
};

export default Layout;
