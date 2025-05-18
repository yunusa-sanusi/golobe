import HotelDetail from './HotelDetail';
import HotelDuration from './HotelDuration';
import Button from '../../../Button';
import hotelLogo from '../../../../assets/hotel_logo.svg';

const HotelTicket = () => {
  return (
    <div className="bg-primary-bg w-[1000px] md:w-[1300px] xl:w-full h-36 rounded-lg px-2 md:px-6 flex justify-between items-center mt-6 shadow-md">
      <div className="flex items-center gap-x-5">
        <div className="w-20 h-20 rounded-lg border-1 border-secondary-bg p-2 mr-4">
          <img src={hotelLogo} alt="hotel logo" className="w-full h-full" />
        </div>

        <HotelDuration />

        <div className="w-[1px] h-14 bg-secondary-bg" />

        <HotelDetail />
      </div>

      <div>
        <Button type="button" text="Download Ticket" style="primary" />
      </div>
    </div>
  );
};

export default HotelTicket;
