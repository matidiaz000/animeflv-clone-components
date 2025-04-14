import { Outlet } from 'react-router-dom'
import { Suspense } from 'react';
import { NavComponent } from './components/Nav';
import { AsideComponent } from './components/Aside';

const Layout = () => {
  return (
    <>
      <div className="container row gx-5 h-100 position-relative">
        <aside className="col-3 bg-dark position-absolute overflow-auto h-100">
          <NavComponent />
        </aside>
        <div className="col-3"></div>
        <main className="col row gx-5 ,t">
          <div className="col">
            <div className="mt-4 mb-5">
              <Suspense>
                <Outlet />
              </Suspense>
            </div>
          </div>
          <div className="col-3">
            <AsideComponent />
          </div>
        </main>
      </div>
    </>
  )
};

export default Layout;
