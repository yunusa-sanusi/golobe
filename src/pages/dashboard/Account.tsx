import { useState } from 'react';
import { createPortal } from 'react-dom';
import { FaEdit } from 'react-icons/fa';

import UserDetail from '../../components/dashboard/account/UserDetail';
import UserDetailsEditForm from '../../components/dashboard/account/UserDetailsEditForm';
import { useMetadata } from '../../hooks/useMetadata';

const Account = () => {
  const [showUserDetailsForm, setShowUserDetailsForm] = useState(false);
  useMetadata('Accounts');

  const openDetailsForm = (): void => {
    setShowUserDetailsForm(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDetailsForm = (): void => {
    setShowUserDetailsForm(false);
    document.body.style.overflow = '';
  };

  return (
    <section className="py-6">
      <div className="flex items-center gap-x-2 mb-3">
        <h2 className="font-semibold text-2xl">Account</h2>
        <FaEdit
          size="20"
          className="text-yellow-400 cursor-pointer"
          onClick={openDetailsForm}
        />
      </div>
      <UserDetail />
      {showUserDetailsForm &&
        createPortal(
          <UserDetailsEditForm onClose={closeDetailsForm} />,
          document.body,
        )}
    </section>
  );
};
export default Account;
