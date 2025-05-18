import { ReactNode } from 'react';

import { IoCalendar } from 'react-icons/io5';
import { FaClock } from 'react-icons/fa6';
import { BsFillDoorClosedFill } from 'react-icons/bs';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';

const FlightDetail = () => {
  return (
    <div className="flex items-center gap-x-6">
      <div className="flex flex-col gap-y-2">
        <DetailInfo
          icon={<IoCalendar size={22} className="text-secondary-bg" />}
          infoHeading="Date"
          infoBody="18-05-25"
        />
        <DetailInfo
          icon={<FaClock size={22} className="text-secondary-bg" />}
          infoHeading="Flight Time"
          infoBody="6 hrs"
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <DetailInfo
          icon={
            <BsFillDoorClosedFill size={22} className="text-secondary-bg" />
          }
          infoHeading="Gate"
          infoBody="A12"
        />
        <DetailInfo
          icon={
            <MdAirlineSeatReclineNormal
              size={22}
              className="text-secondary-bg"
            />
          }
          infoHeading="Seat no."
          infoBody="128"
        />
      </div>
    </div>
  );
};

export default FlightDetail;

const DetailInfo = ({
  icon,
  infoHeading,
  infoBody,
}: {
  icon: ReactNode;
  infoHeading: string;
  infoBody: string;
}) => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-10 h-10 flex justify-center items-center bg-secondary-bg3 rounded-lg">
        {icon}
      </div>
      <div>
        <p className="text-sm opacity-75">{infoHeading}</p>
        <p className="font-semibold text-lg">{infoBody}</p>
      </div>
    </div>
  );
};
