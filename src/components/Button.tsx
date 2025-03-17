type ButtonType = {
  type: 'submit' | 'reset' | 'button' | undefined;
  text: string;
  style: 'primary' | 'secondary' | 'outline';
};

const Button = ({ type, text, style }: ButtonType) => {
  const outline =
    'bg-primary-bg border-1 border-secondary-bg2 hover:bg-secondary-bg2 hover:text-secondary-text';
  const primary = 'bg-secondary-bg text-primary-text hover:opacity-70';
  const secondary = 'bg-secondary-bg2 text-secondary-text hover:opacity-70';

  const btnStyle =
    style === 'primary' ? primary : style === 'secondary' ? secondary : outline;

  return (
    <button
      type={type}
      className={`w-full px-4 py-3 rounded-sm cursor-pointer font-semibold text-sm ${btnStyle}`}
    >
      {text}
    </button>
  );
};
export default Button;
