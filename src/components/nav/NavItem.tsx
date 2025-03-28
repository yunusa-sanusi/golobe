import { NavLink } from 'react-router';

import { NavItemProps } from '../../types/NavItemProps';

const NavItem = ({ url, text, icon, additionalStyle }: NavItemProps) => {
  const activeState = `flex items-center gap-x-1 text-secondary-bg hover:text-primary-text transition-all duration-300 ${additionalStyle}`;
  const normalState = `flex items-center gap-x-1 hover:text-secondary-bg transition-all duration-300 ${additionalStyle}`;
  return (
    <NavLink
      to={url}
      //   className={"flex items-center gap-x-1 hover:text-secondary-bg transition-all duration-300"}
      className={({ isActive }) => (isActive ? activeState : normalState)}
    >
      {icon}
      {text}
      {/* <span className="w-full h-[3px] bg-secondary-bg absolute bottom-0"></span> */}
    </NavLink>
  );
};

export default NavItem;
