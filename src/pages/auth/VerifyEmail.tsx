import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';

import { useMetadata } from '../../hooks/useMetadata';

// services
import { verifyEmail } from '../../services/auth';

const VerifyEmail = () => {
  useMetadata('Email Verification');

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const userId = searchParams.get('userId');
    const secret = searchParams.get('secret');

    verifyEmail(userId as string, secret as string);
  }, [searchParams]);

  return (
    <div>
      <h1>
        Your email has been verified. Click{' '}
        <Link to="/auth/login" className="text-highlight">
          here
        </Link>{' '}
        to login.
      </h1>
    </div>
  );
};
export default VerifyEmail;
