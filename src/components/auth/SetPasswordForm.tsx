import { useForm, SubmitHandler } from 'react-hook-form';

import Input from '../Input';
import Button from '../Button';

export type FormData = {
  password: string;
  confirmPassword: string;
};

const SetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

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

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="password"
        label="Password"
        field="password"
        register={register}
        message="Please enter your password"
        errors={errors}
        validation={passwordValidation}
      />

      <Input
        type="password"
        label="Confirm Password"
        field="confirmPassword"
        register={register}
        message="Please enter confirm your password"
        errors={errors}
        validation={confirmPasswordValidation}
      />

      <Button type="submit" text="Set New Password" style="primary" />
    </form>
  );
};
export default SetPasswordForm;
