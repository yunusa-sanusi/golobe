const UserDetail = () => {
  return (
    <div className="px-6 py-2 bg-primary-bg shadow-md rounded-md">
      <div className="py-3">
        <p className="text-base">Name</p>
        <p className="font-semibold text-xl">John Doe</p>
      </div>

      <div className="py-3">
        <p className="text-base">Email</p>
        <p className="font-semibold text-xl">johndoe@gmail.com</p>
      </div>

      <div className="py-3">
        <p className="text-base">Phone Number</p>
        <p className="font-semibold text-xl">(+123) 456 789 0000</p>
      </div>

      <div className="py-3">
        <p className="text-base">Address</p>
        <p className="font-semibold text-xl">123, Main Street, Africa, Earth</p>
      </div>
    </div>
  );
};
export default UserDetail;
