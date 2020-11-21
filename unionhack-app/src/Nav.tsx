import React , {useState}from 'react';
import {Link} from 'react-router-dom';
import cx from 'classnames';
import profile from './assets/profile.png';

// @TODO this is very clumsy - would work better with the title integrated
// something like react-navigation, if we go the Expo route later
export const Nav = ({title}: {title: string}) => {
  const [showNav, toggleNav] = useState(false);
  const toggle = () => toggleNav(!showNav);

  return (
    <>
      <header className="p-3 text-center relative">
        <img
          alt=""
          className="absolute left ml-3"
          height="34"
          onClick={toggle}
          src={profile}
          width="34"
        />
        <h1>{title}</h1>
      </header>
      {showNav && (
        <span
          className='bg-black o-9 absolute top left bottom right'
          onClick={toggle}
        />
      )}
      <aside
        className={cx({
          "absolute bg-grey-2 sidebar top bottom pt-3 pb-3": true,
          "active": showNav,
        })}>
        <nav>
          <Link className="block p-3" to="">
            Your Account Profile
          </Link>
          <ul className="p-3">
            <li>
              <h3 className="mb-3">Logged In Campaigns</h3>
            </li>
            <li className='mb-2 flex items-center'>
              <span className="bg-white p-3 br-4 mr-2" />
              <Link to="/">Campaign A</Link>
            </li>
            <li className='mb-2 flex items-center o-9'>
              <span className="bg-grey p-3 br-4 mr-2" />
              <Link to="/">Campaign B</Link>
            </li>
          </ul>
          <ul className="mb-3">
            <li className="brd-t-1 brd-b-1 p-3">
              <Link to="/">Readiness Overview</Link>
            </li>
            <li className="brd-b-1 p-3">
              <Link to="/conversations">Workplace Conversations</Link>
            </li>
            <li className="brd-b-1 p-3">
              <Link to="/">Structure Tests</Link>
            </li>
            <li className="brd-b-1 p-3">
              <Link to="/workers">Worker List</Link>
            </li>
          </ul>
          <Link className='p-3' to="/">
            Logout
          </Link>
        </nav>
      </aside>
    </>
  )
};
