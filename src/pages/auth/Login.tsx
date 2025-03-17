import AuthFormsWrapper from '../../components/auth/AuthFormsWrapper';
import LoginForm from '../../components/auth/LoginForm';
import { useMetadata } from '../../hooks/useMetadata';

const Login = () => {
  useMetadata('Login');
  return (
    <AuthFormsWrapper
      component={<LoginForm />}
      formHeader="Login"
      formDescription="Login to access your Golobe account"
    />
  );
};
export default Login;
