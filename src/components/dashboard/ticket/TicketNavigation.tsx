import { MdFlight } from 'react-icons/md';
import { FaHotel } from 'react-icons/fa';

import TicketTabItem from './TicketTabItem';
import { TicketNavigationProps } from '../../../types/ticketProps';

const TicketNavigation = ({
  activeTab,
  handleTabChange,
}: TicketNavigationProps) => {
  return (
    <div className="flex justify-start items-center h-20 bg-primary-bg shadow-md rounded-lg px-2 md:px-6 font-semibold  mb-4">
      <TicketTabItem
        text="Flights"
        activeTab={activeTab}
        argument="flights"
        handleTabChange={handleTabChange}
        icon={<MdFlight size={20} />}
      />

      <div className="w-[1px] h-[60%] bg-gray-400 mx-6" />

      <TicketTabItem
        text="Stays"
        activeTab={activeTab}
        argument="stays"
        handleTabChange={handleTabChange}
        icon={<FaHotel size={20} />}
      />
    </div>
  );
};

export default TicketNavigation;
