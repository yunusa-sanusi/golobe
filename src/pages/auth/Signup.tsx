import SignupForm from '../../components/auth/SignupForm';
import AuthFormsWrapper from '../../components/auth/AuthFormsWrapper';
import { useMetadata } from '../../hooks/useMetadata';

const Signup = () => {
  useMetadata('Sign Up');

  return (
    // <div className="w-full">
    //   <div className="mb-7">
    //     <h1 className="text-4xl mb-3">Sign Up</h1>
    //     <p>Let’s get you all st up so you can access your personal account.</p>
    //   </div>
    //   <SignupForm />
    // </div>
    <AuthFormsWrapper
      component={<SignupForm />}
      formHeader="Sign Up"
      formDescription="Let’s get you all st up so you can access your personal account."
    />
  );
};
export default Signup;
