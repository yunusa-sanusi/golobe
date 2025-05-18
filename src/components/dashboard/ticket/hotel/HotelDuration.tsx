const HotelDuration = () => {
  return (
    <div className="flex items-center gap-x-3">
      <div>
        <p className="text-sm opacity-75">Check-in</p>
        <p className="font-semibold text-lg">Thurs, Dec 8</p>
      </div>
      <div className="w-5 h-0.5 bg-secondary-bg2 opacity-60" />
      <div>
        <p className="text-sm opacity-75">Check-out</p>
        <p className="font-semibold text-lg">Fri, Dec 9</p>
      </div>
    </div>
  );
};

export default HotelDuration;
