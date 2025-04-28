import { useState } from 'react';
import { LiaTimesSolid } from 'react-icons/lia';

import UserDetailedFormInput from './UserDetailedFormInput';
import Button from '../../Button';
import {
  UserDetailsEditFormProps,
  FormDataType,
} from '../../../types/dashboardProps';

const initialFormData: FormDataType = {
  name: '',
  email: '',
  phoneNumber: '',
  address: '',
};

const UserDetailsEditForm = ({ onClose }: UserDetailsEditFormProps) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/90 flex justify-center items-center z-30">
      <form className="relative bg-primary-bg w-1/3 h-auto px-4 py-6 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h4>Update Profile Information</h4>
          <LiaTimesSolid
            size={20}
            className="cursor-pointer ml-auto"
            onClick={onClose}
          />
        </div>

        <UserDetailedFormInput
          type="text"
          id="name"
          label="Name"
          value={formData.name}
          onChangeHandler={handleChange}
        />

        <UserDetailedFormInput
          type="email"
          id="email"
          label="Email"
          value={formData.email}
          onChangeHandler={handleChange}
        />

        <UserDetailedFormInput
          type="tel"
          id="phoneNumber"
          label="Phone Number"
          value={formData.phoneNumber}
          onChangeHandler={handleChange}
        />

        <UserDetailedFormInput
          type="text"
          id="address"
          label="Address"
          value={formData.address}
          onChangeHandler={handleChange}
        />

        <div className="h-4" />

        <Button
          style="primary"
          type="submit"
          text="Update Profile Information"
        />
      </form>
    </div>
  );
};

export default UserDetailsEditForm;
