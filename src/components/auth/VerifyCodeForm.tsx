import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../Input';
import Button from '../Button';

export type FormData = {
  code: string;
};

const VerifyCodeForm = () => {
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
        type="text"
        label="Verification Code"
        field="code"
        message="Please enter the verification code sent to your mail"
        register={register}
        errors={errors}
      />
      <Button type="submit" text="Verify code" style="primary" />
    </form>
  );
};
export default VerifyCodeForm;
