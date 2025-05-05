import FlightTicketContainer from './FlightTicketContainer';
import HotelTicketContainer from './HotelTicketContainer';

type TicketContainerProps = {
  activeTab: 'flights' | 'stays';
};

const TicketContainer = ({ activeTab }: TicketContainerProps) => {
  return (
    <div>
      {activeTab === 'flights' ? (
        <FlightTicketContainer />
      ) : (
        <HotelTicketContainer />
      )}
    </div>
  );
};

export default TicketContainer;
