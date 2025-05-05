import { FaUser } from 'react-icons/fa';
import { FaTicket } from 'react-icons/fa6';
import { MdPayments } from 'react-icons/md';

import DashboardNavLink from './DashboardNavLink';

const DashboardNav = () => {
  return (
    <nav className="w-full h-20 bg-primary-bg shadow-md rounded-lg flex justify-between items-center gap-x-2 md:gap-x-6 px-2 md:px-6 font-semibold mt-6 relative">
      <DashboardNavLink
        text="Account"
        icon={<FaUser size={18} className="" />}
        url="/dashboard"
      />
      <DashboardNavLink
        text="Tickets/Bookings"
        icon={<FaTicket size={18} className="" />}
        url="/dashboard/tickets"
      />
      <DashboardNavLink
        text="Payment Methods"
        icon={<MdPayments size={18} className="" />}
        url="/dashboard/payment-methods"
      />
    </nav>
  );
};

export default DashboardNav;
