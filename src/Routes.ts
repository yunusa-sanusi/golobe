import { createBrowserRouter } from 'react-router';

import AuthLayout from './layouts/AuthLayout';
import {
  Login,
  Signup,
  ForgotPassword,
  VerifyCode,
  SetPassword,
} from './pages/auth';

const router = createBrowserRouter([
  {
    path: '/auth',
    Component: AuthLayout,
    children: [
      {
        path: 'signup',
        Component: Signup,
      },
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'forgot-password',
        Component: ForgotPassword,
      },
      {
        path: 'set-password',
        Component: SetPassword,
      },
      {
        path: 'verify-code',
        Component: VerifyCode,
      },
    ],
  },
]);

export default router;
