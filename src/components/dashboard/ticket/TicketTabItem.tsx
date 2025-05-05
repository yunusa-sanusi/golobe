import { TicketTabItemProps } from '../../../types/ticketProps';

const TicketTabItem = ({
  text,
  activeTab,
  argument,
  handleTabChange,
}: TicketTabItemProps) => {
  return (
    <button
      type="button"
      className="w-full h-full text-left relative cursor-pointer"
      onClick={() => handleTabChange(argument)}
    >
      {text}
      {activeTab === argument && (
        <span className="w-full h-[3px] bg-secondary-bg absolute left-[25%] md:left-0 bottom-0"></span>
      )}
    </button>
  );
};
export default TicketTabItem;
