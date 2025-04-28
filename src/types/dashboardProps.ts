export type UserDetailsEditFormProps = {
  onClose: () => void;
};

export type UserDetailsFormInputProps = {
  type: string;
  id: string;
  label: string;
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type FormDataType = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
};
