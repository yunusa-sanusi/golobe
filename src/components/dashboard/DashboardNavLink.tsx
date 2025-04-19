import { Link, useMatch } from 'react-router';

import { DashboardNavItemProp } from '../../types/DashboardNavItemProp';

const DashboardNavLink = ({ text, url, icon }: DashboardNavItemProp) => {
  const match = useMatch(url);
  return (
    <Link
      to={url}
      className={`w-full border-r-gray-200 relative h-full flex justify-center md:justify-start items-center gap-x-2 hover:text-secondary-bg transition-all duration-300 ${
        text === 'Payment Methods' ? '' : 'border-r-2'
      }`}
    >
      {icon}
      <span className="hidden md:block">{text}</span>
      {match?.pathname === url && (
        <span className="w-1/2 h-[3px] bg-secondary-bg absolute left-[25%] md:left-0 bottom-0"></span>
      )}
    </Link>
  );
};
export default DashboardNavLink;
