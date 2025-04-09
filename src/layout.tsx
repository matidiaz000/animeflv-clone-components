import { Outlet, Link } from 'react-router-dom'
import AnimeFLVLogo from './assets/logo.png'
import { useEffect, useState } from 'react';

interface ITitlesNav {
  id: number;
  link: string;
  text: string;
}

const Layout = () => {
  const [titlesNav, setTitlesNav] = useState<ITitlesNav[] | null>(null);

  useEffect(() => {
    if (!titlesNav) {
      const h2 = document.body.getElementsByTagName(`h2`)
      const titlesNavMap: ITitlesNav[] = [];
      let h2Id: ITitlesNav['link'] | null = null;
      for (let i = 0; i < h2.length; i++) {
        h2Id = h2[i].getAttribute("id");
        if (h2Id != null) {
          titlesNavMap.push({ id: i, link: h2Id, text: h2[i].innerText});
        }
      }
      setTitlesNav(titlesNavMap)
    }
  }, [titlesNav]);

  return (
    <div className="container row gx-5 h-100">
      <aside className="col-3 bg-dark">
        <div className="sticky-top">
          <img src={AnimeFLVLogo} alt="AnimeFLV" className="mt-3" />
          <strong className="pt-2 d-block">Getting started</strong>
          <ul className="list-unstyled">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/typography">Typography</Link></li>
            <li><Link to="/color">Color</Link></li>
            <li><Link to="/dropdown">Dropdown</Link></li>
            <li><Link to="/grid">Grid</Link></li>
            <li><Link to="/card">Card</Link></li>
            <li><Link to="/form">Form</Link></li>
            <li><Link to="/header">Header</Link></li>
            <li><Link to="/slide">Slide</Link></li>
            <li><Link to="/footer">Footer</Link></li>
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
                  {titlesNav?.map((el) => (
                    <li key={el.id}><a href={`#${el.link}`} className="active">{el.text}</a></li>
                  ))}
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
