import { UserDetailsFormInputProps } from '../../../types/dashboardProps';

const UserDetailedFormInput = ({
  type,
  id,
  label,
  value,
  onChangeHandler,
}: UserDetailsFormInputProps) => {
  return (
    <div className="relative z-0 w-full mb-6 group">
      <input
        type={type}
        id={id}
        name={id}
        className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2 rounded-sm border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-secondary-bg2 peer"
        placeholder=" "
        value={value}
        onChange={onChangeHandler}
      />
      <label
        htmlFor="name"
        className="absolute px-1 text-sm text-gray-500 bg-primary-bg duration-300 transform -translate-y-6 scale-75 top-[0.9rem] translate-x-2 origin-[0] peer-placeholder-shown:-translate-y-1 peer-placeholder-shown:scale-100 peer-focus:-translate-y-[1.5rem] peer-focus:translate-x-2 peer-focus:bg-primary-bg peer-focus:scale-75 peer-focus:text-primary-text -z-10 peer-focus:z-10"
      >
        {label}
      </label>
    </div>
  );
};
export default UserDetailedFormInput;
