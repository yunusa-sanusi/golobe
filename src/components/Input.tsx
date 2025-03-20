import { HTMLInputTypeAttribute } from 'react';
import {
  UseFormRegister,
  FieldValues,
  Path,
  FieldErrors,
  RegisterOptions,
} from 'react-hook-form';

type InputTypes<T extends FieldValues> = {
  label: string;
  type: HTMLInputTypeAttribute;
  field: Path<T>;
  message: string;
  errors: FieldErrors<T>;
  icon?: string;
  validation?: Omit<
    RegisterOptions<T, Path<T>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;
  register: UseFormRegister<T>;
};

const Input = <T extends FieldValues>({
  type,
  label,
  icon,
  field,
  message,
  errors,
  validation,
  register,
}: InputTypes<T>) => {
  return (
    <div className="relative z-0 w-full mb-6 group">
      <input
        type={type}
        id={field}
        className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2 rounded-sm border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-secondary-bg2 peer"
        placeholder=" "
        {...register(field, { required: message, ...validation })}
      />
      <label
        htmlFor={field}
        className="absolute px-1 text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 bg-primary-bg top-[0.9rem] translate-x-2 origin-[0] peer-placeholder-shown:-translate-y-1 peer-placeholder-shown:scale-100 peer-focus:-translate-y-[1.5rem] peer-focus:translate-x-2 peer-focus:bg-primary-bg peer-focus:scale-75 peer-focus:text-primary-text"
      >
        {label}
      </label>
      {icon && <div className="absolute top-2 right-2">{icon}</div>}
      {errors[field] && (
        <p className="mt-1 text-xs text-red-500">
          {String(errors[field]?.message)}
        </p>
      )}
    </div>
  );
};

export default Input;
