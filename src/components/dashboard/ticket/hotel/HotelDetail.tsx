import { ReactNode } from 'react';

import { FaClock } from 'react-icons/fa6';
import { BsFillDoorClosedFill } from 'react-icons/bs';

const HotelDetail = () => {
  return (
    <div className="flex gap-x-6">
      <div className="flex flex-col gap-y-2">
        <DetailInfo
          icon={<FaClock size={22} className="text-secondary-bg" />}
          infoHeading="Check-in Time"
          infoBody="12:00 pm"
        />
        <DetailInfo
          icon={<FaClock size={22} className="text-secondary-bg" />}
          infoHeading="Check-out Time"
          infoBody="11:00 am"
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <DetailInfo
          icon={
            <BsFillDoorClosedFill size={22} className="text-secondary-bg" />
          }
          infoHeading="Room no."
          infoBody="On arrival"
        />
      </div>
    </div>
  );
};

export default HotelDetail;

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
