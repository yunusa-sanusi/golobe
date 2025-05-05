import { TicketTabItemProps } from '../../../types/ticketProps';

const TicketTabItem = ({
  text,
  activeTab,
  argument,
  icon,
  handleTabChange,
}: TicketTabItemProps) => {
  return (
    <button
      type="button"
      className="w-full h-full relative cursor-pointer flex justify-center md:justify-start items-center gap-x-2 hover:text-secondary-bg transition-all duration-300"
      onClick={() => handleTabChange(argument)}
    >
      {icon} <span className="hidden md:block">{text}</span>
      {activeTab === argument && (
        <span className="w-full md:w-full h-[3px] bg-secondary-bg absolute left-0 bottom-0"></span>
      )}
    </button>
  );
};
export default TicketTabItem;
