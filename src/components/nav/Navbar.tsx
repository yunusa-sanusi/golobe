import { useState } from 'react';
import { NavLink } from 'react-router';
import { FaHeart } from 'react-icons/fa';
import { IoBed } from 'react-icons/io5';
import { MdFlight } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';

import NavItem from './NavItem';
import logo from '../../assets/logo.svg';
import profile_pic from '../../assets/profile_pic.svg';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <header className="w-full h-20 shadow-md text-sm font-semibold">
      <nav className="w-[95%] md:w-[90%] lg:w-[80%] h-full mx-auto flex justify-between items-center">
        <div className="h-full hidden md:flex gap-x-4">
          <NavItem
            url="/flights"
            text="Find Flight"
            icon={<MdFlight size={18} />}
          />
          <NavItem url="/hotels" text="Find Stays" icon={<IoBed size={18} />} />
        </div>

        <RxHamburgerMenu
          size={22}
          className="block md:hidden cursor-pointer"
          onClick={toggleMobileMenu}
        />

        <div className="w-27 h-9">
          <NavLink to="/">
            <img src={logo} alt="golobe logo" className="w-full h-full" />
          </NavLink>
        </div>

        <div className="flex items-center gap-x-4 md:gap-x-7 h-full">
          <NavItem
            url="/favorites"
            text="Favorites"
            additionalStyle="hidden md:flex"
            icon={<FaHeart size={18} />}
          />
          <span className="hidden md:block">|</span>
          <NavLink
            to="/"
            className="flex items-center gap-x-2 hover:text-secondary-bg"
          >
            <div className="w-11 h-11 rounded-full">
              <img
                src={profile_pic}
                alt="profile picture"
                className="w-full h-full"
              />
            </div>
            <p className="hidden md:block">John D.</p>
          </NavLink>
        </div>

        {showMobileNav && (
          <div className="w-full h-[80vh] flex flex-col md:hidden gap-y-5 text-xl justify-center items-center absolute top-20 left-0 z-10 bg-primary-bg">
            <NavItem
              url="/flights"
              text="Find Flight"
              icon={<MdFlight size={18} />}
            />
            <NavItem
              url="/hotels"
              text="Find Stays"
              icon={<IoBed size={18} />}
            />
            <NavItem
              url="/favorites"
              text="Favorites"
              icon={<FaHeart size={18} />}
            />
          </div>
        )}
      </nav>
    </header>
  );
};
export default Navbar;
