import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router';

// Components
import Input from '../Input';
import Button from '../Button';

// Services
import { createEmailPasswordUser } from '../../services/auth';

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    createEmailPasswordUser(
      data.firstName,
      data.lastName,
      data.email,
      data.password,
    );
    reset();
  };

  const emailValidation = {
    pattern: {
      // eslint-disable-next-line no-useless-escape
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: 'Invalid email address',
    },
  };

  const password = watch('password');

  const confirmPasswordValidation = {
    validate: (value: string | boolean) =>
      value === password || 'Passwords do not match',
  };

  const passwordValidation = {
    minLength: {
      value: 8,
      message: 'Password must at least be 8 characters',
    },
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        'Password must contain at least 8 characters, uppercase / lowercase alphanumeric, a special character',
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="block md:flex md:gap-x-3">
        <Input
          type="text"
          label="First Name"
          field="firstName"
          register={register}
          message="Please enter your first name"
          errors={errors}
        />
        <Input
          type="text"
          label="Last Name"
          field="lastName"
          register={register}
          message="Please enter your last name"
          errors={errors}
        />
      </div>

      <div className="block md:flex md:gap-x-3">
        <Input
          type="email"
          label="Email"
          field="email"
          register={register}
          message="Please enter your email"
          errors={errors}
          validation={emailValidation}
        />
        <Input
          type="text"
          label="Phone Number"
          field="phone"
          register={register}
          message="Please enter your phone number"
          errors={errors}
        />
      </div>

      <div className="flex gap-x-3">
        <Input
          type="password"
          label="Password"
          field="password"
          register={register}
          message="Please enter your password"
          errors={errors}
          validation={passwordValidation}
        />
      </div>

      <div className="flex gap-x-3">
        <Input
          type="password"
          label="Confirm Password"
          field="confirmPassword"
          register={register}
          message="Please enter confirm your password"
          errors={errors}
          validation={confirmPasswordValidation}
        />
      </div>

      <div className="flex row items-center gap-x-1 mb-8">
        <input type="checkbox" required className="w-4 h-4" />
        <span className="font-semibold text-sm">
          I agree to all the{' '}
          <a href="" className="text-highlight-text">
            Terms
          </a>{' '}
          and{' '}
          <a href="" className="text-highlight-text">
            Privacy Policies
          </a>
        </span>
      </div>

      <Button type="submit" text="Create Account" style="primary" />
      <div className="mt-4 flex justify-center">
        <p className="text-sm font-semibold">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-highlight-text">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};
export default SignupForm;
