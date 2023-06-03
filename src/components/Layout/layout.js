import { NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.css'

const Layout = () => {
  return (
    <div>
      <header>
        <ul>
          <li className={s.navLink} activeClassName={s.active}>
            <NavLink to="/" >Home</NavLink>
          </li>
          <li className={s.navLink} activeClassName={s.active}>
            <NavLink to="/movies" >Movies</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
