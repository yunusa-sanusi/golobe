import AuthFormsWrapper from '../../components/auth/AuthFormsWrapper';
import ForgotPasswordForm from '../../components/auth/ForgotPasswordForm';
import { useMetadata } from '../../hooks/useMetadata';

const ForgotPassword = () => {
  useMetadata('Forgot Password');
  return (
    <AuthFormsWrapper
      component={<ForgotPasswordForm />}
      formHeader="Forgot Password"
      formDescription="Don’t worry, happens to all of us. Enter your email below to recover your password"
    />
  );
};
export default ForgotPassword;
