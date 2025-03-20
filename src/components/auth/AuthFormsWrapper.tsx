import { ReactElement } from 'react';

type WrapperProp = {
  component: ReactElement;
  formHeader: string;
  formDescription: string;
};

const AuthFormsWrapper = ({
  component,
  formHeader,
  formDescription,
}: WrapperProp) => {
  return (
    <div className="w-full">
      <div className="mb-7">
        <h1 className="text-3xl md:text-4xl mb-3">{formHeader}</h1>
        <p>{formDescription}</p>
      </div>
      {component}
    </div>
  );
};
export default AuthFormsWrapper;
