import FlightTicketContainer from './flight/FlightTicketContainer';
import HotelTicketContainer from './hotel/HotelTicketContainer';

type TicketContainerProps = {
  activeTab: 'flights' | 'stays';
};

const TicketContainer = ({ activeTab }: TicketContainerProps) => {
  return (
    <div className="overflow-x-scroll">
      {activeTab === 'flights' ? (
        <FlightTicketContainer />
      ) : (
        <HotelTicketContainer />
      )}
    </div>
  );
};

export default TicketContainer;
