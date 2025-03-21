import AuthFormsWrapper from '../../components/auth/AuthFormsWrapper';
import SetPasswordForm from '../../components/auth/SetPasswordForm';
import { useMetadata } from '../../hooks/useMetadata';

const SetPassword = () => {
  useMetadata('Set Password');
  return (
    <AuthFormsWrapper
      component={<SetPasswordForm />}
      formHeader="Set New Password"
      formDescription="Your previous password has been reseted. Please set a new password for your account."
    />
  );
};
export default SetPassword;
