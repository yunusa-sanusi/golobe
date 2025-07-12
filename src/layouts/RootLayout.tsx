import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

import Navbar from '../components/nav/Navbar';
import Footer from '../components/footer/Footer';
import Toast from '../components/Toast';

import { successToast } from '../utils/displayToast';

const RootLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.loginSuccess) successToast('Login Successful');

    navigate(location.pathname, { replace: true });
  }, []);

  return (
    <main>
      <Navbar />
      <Toast />
      <main className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto pt-10 pb-14">
        <Outlet />
      </main>
      <Footer />
    </main>
  );
};
export default RootLayout;
