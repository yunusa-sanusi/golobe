import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router';

import Input from '../Input';
import Button from '../Button';

export type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const emailValidation = {
    pattern: {
      // eslint-disable-next-line no-useless-escape
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: 'Invalid email address',
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        type="password"
        label="Password"
        field="password"
        register={register}
        message="Please enter your password"
        errors={errors}
      />

      <div className="flex justify-between text-sm font-semibold">
        <div className="flex items-center gap-x-1">
          <input type="checkbox" className="w-4 h-4" /> Remember Me
        </div>
        <Link to="" className="text-highlight-text">
          Forgot Password
        </Link>
      </div>

      <Button type="submit" text="Create Account" style="primary" />
      <div className="mt-4 flex justify-center">
        <p className="text-sm font-semibold">
          Don't have an account?{' '}
          <Link to="/auth/signup" className="text-highlight-text">
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
};
export default LoginForm;
