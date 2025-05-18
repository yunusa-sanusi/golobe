import FlightDetail from './FlightDetail';
import FlightDuration from './FlightDuration';
import Button from '../../../Button';
import airlineLogo from '../../../../assets/airline_logo.svg';

const FlightTicket = () => {
  return (
    <div className="bg-primary-bg w-[1000px] md:w-[1300px] xl:w-full h-36 rounded-lg px-2 md:px-6 flex justify-between items-center mt-6 shadow-md overflow-x-scroll xl:overflow-x-hidden">
      <div className="flex items-center gap-x-5">
        <div className="w-20 h-20 rounded-lg border-1 border-secondary-bg p-2 mr-4">
          <img src={airlineLogo} alt="airline logo" className="w-full h-full" />
        </div>

        <FlightDuration />

        <div className="w-[1px] h-14 bg-secondary-bg" />

        <FlightDetail />
      </div>

      <div>
        <Button type="button" text="Download Ticket" style="primary" />
      </div>
    </div>
  );
};

export default FlightTicket;
