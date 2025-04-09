import { useMetadata } from '../../hooks/useMetadata';

const PaymentMethod = () => {
  useMetadata('Payment Methods');
  return <div>PaymentMethod</div>;
};

export default PaymentMethod;
