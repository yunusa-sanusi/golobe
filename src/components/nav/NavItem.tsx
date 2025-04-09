import { NavLink, useMatch } from 'react-router';

import { NavItemProps } from '../../types/NavItemProps';

const NavItem = ({ url, text, icon, additionalStyle }: NavItemProps) => {
  const match = useMatch(url);

  return (
    <NavLink
      to={url}
      className={`relative flex items-center gap-x-1 hover:text-secondary-bg transition-all duration-300 ${additionalStyle}`}
    >
      {icon}
      {text}
      {match && (
        <span className="w-full h-[3px] bg-secondary-bg absolute bottom-0"></span>
      )}
    </NavLink>
  );
};

export default NavItem;
