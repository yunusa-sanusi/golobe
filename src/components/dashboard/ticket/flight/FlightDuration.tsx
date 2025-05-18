const FlightDuration = () => {
  return (
    <div className="flex items-center gap-x-3">
      <div>
        <p className="text-sm opacity-75">Newark (NWR)</p>
        <p className="font-semibold text-lg">12:00 pm</p>
      </div>
      <div className="w-5 h-0.5 bg-secondary-bg2 opacity-60" />
      <div>
        <p className="text-sm opacity-75">Newark (NWR)</p>
        <p className="font-semibold text-lg">06:00 pm</p>
      </div>
    </div>
  );
};

export default FlightDuration;
