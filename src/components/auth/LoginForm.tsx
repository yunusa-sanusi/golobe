import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router';

import Input from '../Input';
import Button from '../Button';

// Services
import { loginEmailPasswordUser } from '../../services/auth';

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

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const authResponse = await loginEmailPasswordUser(
      data.email,
      data.password,
    );
    console.log(authResponse);
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

      <div className="flex flex-col gap-y-2 md:gap-y-0 md:flex-row md:justify-between text-sm font-semibold w-full mb-8">
        <div className="flex items-center gap-x-1">
          <input type="checkbox" className="w-4 h-4" /> Remember Me
        </div>
        <Link to="/auth/forgot-password" className="text-highlight-text">
          Forgot Password
        </Link>
      </div>

      <Button type="submit" text="Login to your Account" style="primary" />
      <div className="mt-4 flex justify-center">
        <p className="text-sm font-semibold">
          Don't have an account?{' '}
          <Link
            to="/auth/signup"
            className="text-highlight-text hover:text-secondary-bg transition-all duration-300"
          >
            Create your account
          </Link>
        </p>
      </div>
    </form>
  );
};
export default LoginForm;
