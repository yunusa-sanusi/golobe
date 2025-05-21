import { createBrowserRouter } from 'react-router';

import AuthLayout from './layouts/AuthLayout';
import RootLayout from './layouts/RootLayout';
import {
  Login,
  Signup,
  ForgotPassword,
  VerifyCode,
  SetPassword,
  VerifyEmail,
} from './pages/auth';
import { Dashboard, Account, Ticket, PaymentMethod } from './pages/dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        path: 'dashboard',
        Component: Dashboard,
        children: [
          { path: '', Component: Account },
          { path: 'tickets', Component: Ticket },
          { path: 'payment-methods', Component: PaymentMethod },
        ],
      },
    ],
  },
  {
    path: '/auth',
    Component: AuthLayout,
    children: [
      { path: 'signup', Component: Signup },
      { path: 'login', Component: Login },
      { path: 'forgot-password', Component: ForgotPassword },
      { path: 'set-password', Component: SetPassword },
      { path: 'set-password', Component: SetPassword },
      { path: 'verify-code', Component: VerifyCode },
      { path: 'email-verification', Component: VerifyEmail },
    ],
  },
]);

export default router;
