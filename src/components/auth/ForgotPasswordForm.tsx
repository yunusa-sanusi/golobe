import { useForm, SubmitHandler } from 'react-hook-form';

import Input from '../Input';
import Button from '../Button';

export type FormData = {
  email: string;
};

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
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
      />
      <Button type="submit" text="Request password change" style="primary" />
    </form>
  );
};
export default ForgotPasswordForm;
