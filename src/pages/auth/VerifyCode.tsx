import AuthFormsWrapper from '../../components/auth/AuthFormsWrapper';
import VerifyCodeForm from '../../components/auth/VerifyCodeForm';
import { useMetadata } from '../../hooks/useMetadata';

const VerifyCode = () => {
  useMetadata('Verify Code');
  return (
    <AuthFormsWrapper
      component={<VerifyCodeForm />}
      formHeader="Verify Code"
      formDescription="An authentication code has been sent to your email."
    />
  );
};
export default VerifyCode;
